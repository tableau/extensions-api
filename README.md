# Project Frelard

![Image of Flex the T-Rex](./assets/flex.png)


## Setup and Running Samples

### Pre-requisites
* You must have Node.js and npm installed. You can get these from [http://nodejs.org](http://nodejs.org).

### Setup
1. Copy the `.trex` files of the sample you wish to run to `~\Documents\My Tableau Repository (Beta)\Extensions` so they are available to Tableau.
2. Open a command prompt window to the location where you cloned this repo.
3. Run `npm install`.
4. Run `npm start`.
5. Launch Tableau and use the sample in a dashboard.


## Known Issues (as of June 14, 2017)
Use [Issues](https://github.com/tableau/ProjectFrelard/issues) to log any problems or bugs you encounter in the docs or sample  code. 

### Unhanded Exceptions During Interop (Qt Browser)
When invoking something from JS over to the C++ code, if there is an unhanded exception the Qt browser seems to become completely messed up and will not set up the web channel communications correctly any more until the process is restarted. This means if you get an exception which escapes, you might need to restart tableau in order to get things working again.

### Mac Missing Binaries
The binaries for Web Engine on MacOS still aren’t building correctly. That means Frelard is Windows only for now :( The new binaries should be available very soon though.

### Remote Desktop
Some configurations for remote desktop seem to have issues where the browser is rendered as a black box. Most common is from a Mac to a machine running Windows 7 although we have Windows 7 machines that work and some that don't. No ideas yet on the cause.

### Chrome Debugging
While you can technically do any remote debugging you want with a recent build of Chrome, the reality is we have a slightly outdate Chromium install which has some incompatibilities in the debugging layer of things. This means stuff like eval-ing from the console won’t work properly. Fear not, you can [download a legacy build of Chrome](https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Win%2F352221%2Fchrome-win32.zip?generation=1443839123039000&alt=media) and use it for remote debugging (simply go to http://localhost:8696). Stay tuned for more info on debugging tips.
