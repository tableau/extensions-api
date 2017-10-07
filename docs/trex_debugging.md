---
title: Remote Debugging of JavaScript and HTML
layout: docs
---

A dashboard extension embeds a web page and runs a Chromium-based browser inside of Tableau. Fortunately, you can debug this embedded web browser using the remote debugging abilities built-in to Chromium.

## Setup
### Tableau
* Inside Tableau desktop, drag out an Add-In onto a dashboard.
* Find the dropdown caret in the upper left or right corner of the add-in control
* After enabling debugging, click Reload to reinitialize the browser.

![Enable and reload]({{site.baseurl}}/assets/TcNTYA9566.gif)

Once you've done these steps, debugging will be enabled for all add-ins until it's turned off.

### Chromium Browser
In order to actually do any debugging, you'll need to use a Chromium-based browser. You can use a normal install of Chrome, but because of some version incompatibilities in the debugging protocol, we recommend using [this specific version of Chromium](https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Win%2F352221%2Fchrome-win32.zip?generation=1443839123039000&alt=media) which matches the version of the browser running inside Tableau (just download and unzip).

## Debugging Using Chrome/Chromium
Once you have all the setup steps completed, simply go to [http://localhost:8696](http://localhost:8696) which will bring up the page selector UI. Pick the add-in you want to debug from this page and debug just like normal.

![Remote Debugging]({{site.baseurl}}/assets/UsWdJEnOiR.gif)

### Debugging Loading / Initialization Issues
It can be difficult to hit breakpoints which occur during the loading of your page due to the remote debugging process. To help with this, we've included a menu option which causes your add-in to load until you trigger it to.
* In the Debug Options dropdown menu, select Pause Before Loading
* Reload your add-in
* In Chromium, go to the debugging homepage ([http://localhost:8696](http://localhost:8696)). Click the fist item listed (it will be completely blank but still visible) to attach to the browser instance.
* On the Sources tab, Find 'Event Listener Breakpoints' and enabled the 'Script' > 'Script First Statement' breakpoint.
* Back in Tableau, click the add-in zone to load your page.
* The debugger will pause each time the first statement of a script runs allowing you to debug the startup process

![Startup Debugging]({{site.baseurl}}/assets/foucUWBiUJ.gif)

## Known Issues
#### Refreshed Page Fails
Unfortunately due to a bug with our embedded browser, refreshing a loaded page doesn't properly setup the communication between Tableau and the add-in. This means that trigger a page reload will cause your add-in to stop working. It's important to note that the 'Reload' menu option actually tears down and recreates the Browser control which means you'll need to establish a new debugging sessions whenever you click that.

