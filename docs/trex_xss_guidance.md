---
title: Cross-Site Scripting and Extension Security
layout: docs
---

As a developer of dashboard extensions, there are certain precautions you should take and best practices you can follow to help ensure that your extensions are secure. A dashboard extension is a web application that runs inside the Tableau dashboard, and as a web application, your dashboard extension could be vulnerable to cross-site scripting (XSS). Cross-site scripting is an attack where a malicious user injects client-side code (typically, JavaScript) to execute in your web application. When other users load the web pages of your extension, the attacker's scripts can run, potentially stealing information or redirecting the browser to another web page.


**In this section**

* TOC
{:toc}



---

## Basic steps toward preventing XSS

If your dashboard extension accepts text input from users through forms or text boxes, you will want to ensure that you aren't accidentally introducing vulnerabilities. The best prevention for XSS attacks is to validate and encode any user input. There is a lot of good information available on the web for developers about how to protect web applications from attacks. For example, see  [Cross Site Scripting Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet){:target="_blank"} from the Open Web Application Security Project (OWASP).

#### Key points:

* Always validate user-provided text input into your HTML pages.
  If your extension uses forms or text boxes to collect user input, be sure to validate and verify that the input conforms to what you expect. Use regular expressions to verify the input. 
* Use HTML entity encoding and escape the characters `&`, `<`, `>`, `"`, `'`, and `/`.  For example, use entity names or numbers `&gt;` or `&#62;` for the greater than character `>`.
* If your extension makes use of URIs as input, use JavaScript methods, such as `encodeURI` and `encodeURIComponent` for encoding.
* Follow the XSS Positive Prevention model as outlined by OWASP, and only allow user-provided data in specific HTML locations in your web application.  

## Additional proposals for prevention

* Prohibit inline JavaScript. 
  Set the Content-Security-Policy (CSP) property for your web pages. See [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP){:target="_blank"}. 
  Do not use or allow JavaScript code within the `<script>` tags.

  ```
   <script> alert("XSS attack")</script>
  ```
  Only allow or use references to JavaScript files within the script tags. 
  ```
  <script src="./myJavaScript.js" </script>
  ```

* Only allow local scripts. Instead of referencing externally hosted JavaScript libraries, make local copies and link to these. This is a proposal for all dashboard extensions. This is a recommendation and not a requirement. 

``` 
// Instead of linking to libraries on the web:
<script src="https://cdn.example.net/library.js"></script>

 // Link to libraries on the local host:
<script src="./library.js"></script>

```
For more information, see [https://github.com/tableau/extensions-api/issues/103](https://github.com/tableau/extensions-api/issues/103){:target="_blank"}

