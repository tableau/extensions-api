---
title: HTTPS and Tableau Extensions
layout: docs
---

A Tableau extension is essentially a web application that runs inside a Tableau dashboard. The extension can interact with other components in the dashboard and potentially has access to the visible and underlying data in the workbook (through a well-defined API). In addition, the web application can be running code on a server that sits outside of the domain where Tableau Server or Tableau Desktop are located. For security, Tableau requires the following:
 
* All extensions must use the HTTP Secure (HTTPS) protocol. 

* To run on Tableau Server, the URL of the extension must be added to a safe list. The Tableau Server site administrator manages this list.

* By default, anyone using the extension will be prompted and asked to allow or deny the extension access. The Tableau Server site administrator can control whether the prompt appears for each extension.


This section covers options for setting up your extension to use HTTPS. For information about adding an extension to the safe list on Tableau Server or Tableau Online, or how to configure the prompts to allow or deny access, see [Manage Dashboard Extensions on Tableau Server](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm) or [Manage Dashboard Extensions on Tableau Online](https://onlinehelp.tableau.com/current/online/en-us/dashboard_extensions_server.htm) for more information. 



**In this section**

* TOC
{:toc}


---
## Why HTTPS?

When you use HTTPS, all HTTP data is encrypted prior to transmission by the Transport Layer Security (TLS) and decrypted when it is received.  HTTPS ensures a secure channel between the extension (client), running in the Tableau dashboard, and the web server that hosts the extension. The use of HTTPS provides a level of privacy, authentication, and integrity.

If you plan to make your extension available to others, using HTTPS
 assures your customers that their data is safe and that they are connecting to a trusted extension. Because the extension is using HTTPS, Tableau is also able to verify the identity of the server that hosts the extension, which prevents various malicious man-in-the-middle attacks that could occur if the extension were to use HTTP alone.  

> Note: For development or internal use, you can run your extension on your local computer as `localhost` and you can use the HTTP protocol. See [Use HTTP and localhost for development or internal use](#use-http-and-localhost-for-development-or-internal-use).



--- 

## HTTPS and security requirements

The requirements are pretty straight-forward. If you are distributing your extension so that others can use it, the extension must be hosted on a web server that is configured to support the HTTPS protocol. 

- The server that hosts your extension must have a certificate from a Certificate Authority (CA). There are many free and low cost options. Note that self-signed or test-signed certificates are not sufficient. The certificate is sometimes called an SSL certificate, as HTTPS was formerly implemented by the Secure Sockets Layer (SSL). 

- In the `.trex` file for your extension, the `url` you use for the source location must start with `https://`.  If the HTTPS protocol is not specified, the extension fails registration and will not load in Tableau. The exception to this requirement is for `localhost`. If you are developing your extension, you can host it on your computer using HTTP (for example, `http://localhost`). You can also use `http://localhost` if you publish the workbook to Tableau Server. In this case, the extension must be running on the same computer as the browser you are using to access the server. 

- Mixed content is not allowed. If your web application uses other libraries or resources, those assets should also use `https`, or use site-relative links. 

- Redirects are permitted, but if they redirect to any other origin, other than the URL of the extension, those pages cannot interact with the Extensions API. For example, if the URL of your extension is `https://example.com` and you redirect to `https://myexample.com`, the page you were redirecting to (`https://myexample.com`) cannot interact with the Extensions API. 

- To run on Tableau Server or Tableau Online, your extension must be added to the safe list for the site. Server administrators or site administrators (Tableau Online) can add or remove extensions, and can configure how an extension requests permissions for access to data.  

----

## Setting the source location in the .trex file

The source location of the extension is its URL. You specify the URL in the extension manifest (`.trex`) file. The syntax includes the name of the server, which includes the protocol (HTTPS, HTTP), the port used, if any, and the path to the extension web page (optional). 

The `<source-location>` element in the `.trex` file, looks like the following:

```xml
<source-location>
    <url>SCHEME://SERVER[:PORT][/PATH]</url> 
</source-location>

```

For example, if the extension is hosted on example.com, the entry might look like the following: 

```xml 
<source-location>
    <url>https://example.com:4043/extension</url> 
</source-location>


``` 

Or during development, when you can use `localhost`, the entry might look like the following: 

```xml 

<source-location>
    <url>http://localhost:8080/extension</url> 
</source-location>


```
At startup, Tableau looks for and validates the extension `.trex` files. If the extension source location does not specify HTTPS or localhost, validation fails and the extension is not registered. These errors are written to the log file. The extension will not load in Tableau. If you examine the log files (for example, with Tableau Log Viewer), you will find something similar to the following:

```
Error: Registration Failed: XSD Validation Failed
file: Example.trex


Error: Error(11,67): value 'http://example.com/example.html' does not match regular expression facet '[Hh][Tt][Tt][Pp][Ss]://.+|[Hh][Tt][Tt][Pp]://[Ll][Oo][Cc][Aa][Ll][Hh][Oo][Ss][Tt]|[Hh][Tt][Tt][Pp]://[Ll][Oo][Cc][Aa][Ll][Hh][Oo][Ss][Tt][:/].*' (id: C:\Users\<user>\Documents\My Tableau Repository (Beta)\Extensions\example.trex)
file: Example.trex


```

For more information, see [Use Log files to Troubleshoot Dashboard Extensions]({{site.baseurl}}/docs/trex_logging.html).

## Avoid mixed content - use HTTPS or site-relative paths for resources

The extension should not call any pages over HTTP. If you reference libraries or resources, specify `https` for the files you include. 

For example:

```html
<head>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ></script>


</head>

``` 


Or use site-relative or protocol-agnostic links (that is, where the protocol is not specified).

```html

    <!-- Extensions Library ) -->
    <script src="../../lib/tableau.extensions.1.latest.js"></script>

    <!-- The extensions's code -->
    <script src="./example.js"></script>

``` 


## Use HTTP and localhost for development or internal use

While HTTPS is required, during development, you can run a web server on your local computer (`localhost`) to host the extension over HTTP. This exception also applies to Tableau Server and Tableau Online. 

For example, you can author a workbook in Tableau Desktop that uses an extension (running as `localhost` on same computer as Tableau Desktop). You can then publish that workbook to Tableau Server or Tableau Online. The extension must be running on the same computer as the browser that you are using to connect to Tableau Server. The `localhost` is local to the browser. For example, the source location of an extension might be `http://localhost:8080/extension`. If you publish that extension to Tableau Server, other users can view the dashboard and extension, provided that they also have a local copy of the extension hosted on their computers and the extension is using the same URL. 

Note the following considerations:


- If Tableau Server is using HTTPS, your extension might not load if it is using `http://localhost`. The same situation occurs with Tableau Online. This is because it is generally not a good practice to embed an HTTP `<iframe>` inside of an HTTPS web page, and the default settings of most browsers will consider this as unsafe content. To temporarily allow the extension to run while you are testing, see [Load and view localhost content on sites that use secure connections]({{site.baseurl}}/docs/trex_debug_server.html#load-and-view-localhost-content-on-sites-that-use-secure-connections).


- In the manifest file (`.trex`) for the extension, you must specify the DNS name `localhost` and **not** the IP address (for example, `127.0.0.1`). 

- To make it easier to migrate your extension to a production server, use relative addresses and use HTTPS when you include resources. 

### Load and view localhost content on sites that use secure connections

If you want to test your extension (running on `http://localhost`) with Tableau Online, or with Tableau Server that is using HTTPS, the default settings of many browsers will block the extension from loading because the extension is not using a secure connection.

To temporarily get around these safety settings for the session, you can click the shield icon (or lock icon) in the browser's address bar. The alert dialog box will allow you to either load the scripts, or allow you to view the full content of the page. As soon as you load the unsafe scripts or allow the blocked content, the extension will load and will continue to be available for the duration of your session. Be sure to close the browser completely when you are finished testing. The following example shows what you might see in Chrome. 
<br/>

![Chrome browser showing alert when extension running on a localhost server]({{site.baseurl}}/assets/online_blocked_extension.png)





## Use HTTPS for production and public use

In most cases, if you are distributing your extension, you will host it on a secure server. There are many options available that can provide the necessary HTTPS support. 

- Free hosting services (such as GitHub, Heroku).
- Using an existing HTTPS server. If you or your organization already have a certificate authority that you use for your organization's intranet, you can use that certificate on your server.   
- Setting up your own HTTPS web server, using low-cost or free certificate from a CA (Comodo, GlobalSign, GoDaddy, Symantec, Let's Encrypt)

### It's for free!
There are some free and low-cost options that you can use to host your extension that don't require much setup on your part. These include hosting your extension on GitHub and Heroku. These options don't require you to provide the web server or to pay for a certificate from a Certificate Authority. 


1. Host your extension on GitHub Pages.

    If your extension is composed of client-side code only (just HTML/CSS/JS files),
    you can host your content for free on GitHub Pages (This is actually what's hosting the documentation
    you are currently reading!).

    GitHub Pages makes it really easy to host content, especially if your extension code
    is already on GitHub.  Check out their tutorial for details: [pages.github.com/](https://pages.github.com)

2. Host your extension on Heroku.

    If your extension contains a sever component, for example, like a Node.js application, 
    you can host your extension for free on Heroku. There are certain usage restrictions. For example,
    Heroku's free tier requires the extension to be off-line for a few hours a day. Heroku also has an add-on marketplace, where you can add database support, such as PostsgreSQL or MongoDB.

    Check out their Node.js tutorial for more details:
    [Heroku Tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)



### Do it yourself (DIY)


To set up a web server to host a Tableau extension over HTTPS, you need to acquire a certificate from a Certificate Authority (CA). The certificate is used to verify that you are who you say you are, so that people who use your extension can be assured that they are indeed on your site. To receive a certificate from a CA, you must first create a public key/private key pair, and then create a certificate signing request (CSR) that you send to a CA. After you receive the certificate from the CA, you need to install it and enable HTTPS on your serer. 

Simple checklist for what you need:

- Have or acquire a domain (example.com) 
- Have or create a web server
- Create public/private key pair (for example, using Openssl)
- Create a certificate signing request (CSR) and send it to a CA
- Install the certificate you receive from the CA on your server
- Enable your web server for HTTPS

Information about requesting and creating the TLS/SSL certificates is available from many of the Certificate Authorities (Comodo, GlobalSign, GoDaddy, Symantec, Let's Encrypt).


## Useful links

- [HTTPS (Wikepdia)](https://en.wikipedia.org/wiki/HTTPS){:target="_blank"} 

- If you have control over your own domain, you can request free certificates from the Certificate Authority [Let's Encrypt](https://letsencrypt.org/){:target="_blank"}. 

- You can also request free 90 day TLS/SSL certificates from Comodo, see [Comodo Free SSL](https://ssl.comodo.com/free-ssl-certificate.php?track=8177){:target="_blank"}

- [Secure your site with HTTPS (Google)](https://support.google.com/webmasters/answer/6073543?hl=en){:target="_blank"}.

- [DNSimple - Domains for developers](https://dnsimple.com/){:target="_blank"}.
