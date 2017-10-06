---
title: Dashboard Extension Samples
layout: docs
---

<div class="alert alert-info">
    <i><b>Developer Preview:</b> This is preliminary documentation and is subject to change.</i> 
</div>


To examine the sample source code and to see how Tableau dashboard extensions work, you can clone or download the [Extensions API](https://github.com/tableau/extensions-api) repository on GitHub and run the samples. The samples are in the `Samples` folder. There is also a step-by-step tutorial you can follow in the `Tutorial` folder. 

You can also check out the dashboard extensions from the community, see [Community Extensions]({{ site.baseurl }}/community/).

--- 
### Install the manifest files (`.trex`) for the samples 


Every Tableau extension has a manifest file (`.trex`) that describes the extension and identifies the location of the web application. 

1. Close Tableau, if you have it opened. 
2. Copy the `.trex` files of the samples you wish to run to `~\Documents\My Tableau Repository (Beta)\Extensions` so they are available to Tableau. 
  The `.trex` files for the samples can be found in the folder with the samples. For example, `\extensions-api\Samples\DataSources\DataSources.trex`.



---
### Start a web server to host the sample dashboard extensions

To use the dashboard extension samples, you need to start up a web server on your computer to host the HTML pages. If you downloaded or cloned the Extensions API repository, you can start the web service in the root directory of the repository on your computer. 

- From the root of this directory, start an HTTP server on port 8765.
	- Python 2.x : `python -m SimpleHTTPServer 8765`
	- Python 3.x : `python -m http.server 8765`
	- Node.js : `npm install http-server -g && http-server -p 8765`





