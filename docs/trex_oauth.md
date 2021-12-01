---
title: Add OAuth to Dashboard Extensions
layout: docs
---

If you want your dashboard extension to use OAuth for authentication, you need to be aware of some important changes that were introduced along with sandboxed extensions in Tableau 2019.4. All dashboard extensions are now wrapped in an `iframe`. Because most OAuth sign-in pages enforce the `X-Frame-Options` settings, which helps prevent [clickjacking](https://tools.ietf.org/html/draft-ietf-oauth-v2-23#section-10.13) attacks, you can't load an OAuth sign-in page within the dashboard, or open a dashboard extension dialog window to use for OAuth sign in.

As a best practice, dashboard extensions should open an external browser window when you need to request end-user authorization. In Tableau Server and Tableau Online, you can do this by using methods like `window.open()` and `window.postMessage()`. However, the `window` methods alone will not work in Tableau Desktop, as the external browser window you open for OAuth sign in has no direct connection to the instance of the dashboard extension. This adds a layer of security and requires extra steps to properly route the access token back to your dashboard extension. The following section describes one possible way of coordinating the OAuth interaction using web sockets for communication and the authorization code grant. For security, the client secret should be stored on the server and not in the client code. This is the only safe way to ensure that someone can't use the client credentials to impersonate your application. To simplify your code, your extension should use the same OAuth flow for Tableau Server and Tableau Desktop.


---
**In this section**

* TOC
{:toc}

---

## Summary of the OAuth flow

The following outlines some of the basic steps in using a secondary window for OAuth sign in. For more guidance on setting up OAuth 2.0 securely, see [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics). The following summarizes the steps you'd take if you were using the authorization code grant type. This OAuth flow is recommended as it ensures that the access token is not returned in the URL and that the client secret is safely stored on the server.

* Open a channel for communication between the server hosting the extension (the server) and the instance of the extension (the client). Create a unique identifier (or session id) for the extension when the extension loads.

* Create a request (URL) that directs the user to the OAuth provider sign-in page. The request URL includes the client ID and the extension's unique identifier (session id), and provides a callback URL.  Open a new dialog window using `window.open()` directed to the URL. Prompt the user to sign in to the OAuth provider (the provider).

* The user signs in to the OAuth provider and allows (or denies) the extension access to data.

* When authorization has been granted, the OAuth authorization code is returned to the callback URL (on the server). The server processes the response and extracts the authorization code and the session id. The server creates a new request for the OAuth access token, using the authorization code grant type, and maps the client ID, client secret, and authorization code in the body of the request.

* When the response from the OAuth provider is received, the server signals an event that returns the OAuth access token, through the web socket, back to the calling extension.

* In response to the signal, the extension retrieves and stores the OAuth token in local storage on the client's computer. The extension can then use the access token to send subsequent requests for services from the OAuth provider.

---
<div class="mermaid">
sequenceDiagram
    participant User
    participant E as Extension (client)
    participant S as Server (web host)
    participant O as OAuth provider
    User->>E: Load dashboard extension
    E->>S: Open communication channel
    S-->>E: Use this socket session ID (socket.id)
    E->>O: Request the OAuth login page (with client ID)
    O-->>User: Prompt user: Allow or deny access?
    User->>O: Allow!
    O-->>S: Here's the auth code
    S->>O: Auth code request + client ID, client secret, session ID
    O-->>S: Here's the access token
    Note right of E: Route the access token based on session ID
    S->>E: This access token is for this session ID.
    Note right of E: Use the access token to request data

</div>



---

## An example of the OAuth code path using Socket.IO

One way to manage OAuth sign in for your dashboard extension is to employee web sockets for identifying and coordinating the OAuth connection. For example, the OAuth sample ([datadev-oauth-sign-in](https://glitch.com/~datadev-oauth-sign-in){:target="_blank"}) on Glitch makes use of the [Socket.IO](https://socket.io){:target="_blank"} library. Socket.IO provides bi-directional event-based communication between the browser (client) and server. This example uses Node.js and Express to setup a web server to host an extension that connects to Spotify. The extension uses sockets to identify the extension and to route communication with the OAuth sign-in window.


### Initialize the socket (session ID)

In the OAuth sample, when the extension loads in the dashboard, a unique socket session ID is generated. The socket instance is assigned a random 20-character identifier (`socket.id`). This code is on the client-side, the extension's web page (`index.js`). The code also initializes the sign-in button on the extension's home page.

```javascript

const socket = io();

// Wait to make sure you've made the socket connection so when you press the button there is a socket ID available to send with the request
socket.on("connect", () => {
  $("#submit").prop("disabled", false);
});


```

 On the Express server (`server.js`), in addition to serving the web pages, the server initializes `socket.io`.

```javascript

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const fetch = require("node-fetch");


```



### Sign in and get the authorization code

When a user clicks the sign-in button, it opens a new window or tab in the user's native browser (`window.open`) passing with it the client ID and the socket session ID (`socket.id`). In this example, the URL goes to the authorization endpoint on Spotify and specifies the authorization code response type. Note that this sample uses the client ID for the OAuth sample project on Glitch. You need to change this to match your client ID for your dashboard extension. The method also provides a redirect URL back to the server, where the response will return the authorization code.

```javascript

// Open a new window to manage the OAuth process outside of Desktop, passing the socket ID so the broker knows where to return the token
function openSignInWindow() {
  const scopes = "user-top-read";
  const redirect_uri = "https://datadev-oauth-sign-in.glitch.me/complete";
  const url =
    "https://accounts.spotify.com/authorize?response_type=code&client_id=" +
    "2029812009c54aef866bd660f612b603" +
    "&scope=" +
    encodeURIComponent(scopes) +
    "&redirect_uri=" +
    encodeURIComponent(redirect_uri) +
    "&state=" +
    socket.id;
  window.open(url, "_blank");
}


```

### Request the access token (server-side)

The redirect URL sends the response to the server, where the server extracts the authorization code. The server then sends a new request for the OAuth access token, providing the client ID, the client secret, and authorization code. Making this request from the server ensures that the client secret is kept protected and out of the client-side browser code. In this example, the request is made as part of an `async` function call and the sample makes use of the node-fetch module. There is a lot going on here. After sending the request, the server waits for the response from Spotify that returns the OAuth access token. When the access token is received, the server emits a `signedin` event that signals the instance of extension that initiated the sign in. The server redirects the client browser to the complete page and sends the client the access token, so that the extension can make the authorized requests from Spotify.

```javascript
app.get("/complete", async (req, res) => {
  const code = req.query.code;
  const sessionid = req.query.state;
  
  const url = "https://accounts.spotify.com/api/token";
  const parameters = {
    grant_type: "authorization_code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    code,
    redirect_uri: "https://datadev-oauth-sign-in.glitch.me/complete"
  };
  const body = Object.keys(parameters)
    .map(key => `${key}=${encodeURIComponent(parameters[key])}`)
    .join("&");
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  };

  const response = await fetch(url, options);
  const data = await response.json();

  io.to(sessionid).emit("signedin", data.access_token);
  res.sendFile(__dirname + "/views/complete.html");
});



```

### Pass the access token to the client and make requests

In response to the `signedin` event, the client checks to see if the OAuth access token was received. If the token is present, the client stores it locally and then uses the access token to make a new request to retrieve the user's top artist from Spotify. In case of error, the access token is removed from local storage and the user is asked to sign in again.

```javascript

socket.on("signedin", function(token) {
  if (token) {
    localStorage.setItem("spotifyAuth", token);
    getTopArtist(token);
  } else {
    console.error("Token response was empty!");
  }
});

// Get the top artist information with the token, if the request fails, prompt again for auth
async function getTopArtist(token) {
  const url = "https://api.spotify.com/v1/me/top/artists";
  const options = {
    headers: {
      Authorization: "Bearer " + token
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    updateTopArtist(data);
  } catch (error) {
    localStorage.removeItem("spotifyAuth");
    openSignInWindow();
    console.error(error);
  }
}

// Updated the text in the dashboard extension
function updateTopArtist(data) {
  $("#signIn").hide();
  $("#name").html("<b>" + data.items[0].name + "</b> is your favorite artist!");
}

```

### Next steps

* Use the sample code ([datadev-oauth-sign-in](https://glitch.com/~datadev-oauth-sign-in){:target="_blank"}) on Glitch as a starting point to build your own OAuth solution.

* Review the latest [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics) draft documentation.
