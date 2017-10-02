# Running Samples

Follow these instructions to run any of the samples in the Samples directory.  The only exception is the React Tutorial, that sample has its own README and setup instructions.

### Pre-requisites
* You must have Node.js or Python installed (or other software which can serve the contents of this folder over http). You can get Node.js from http://nodejs.org and Python from https://www.python.org/downloads/

### Setup
1. Copy the `.trex` files of the sample you wish to run to `~\Documents\My Tableau Repository (Beta)\Extensions` so they are available to Tableau.
2. Open a command prompt window to the location where you cloned this repo.
4. Start a simple file hosting server:
	* Python 2.x : `python -m SimpleHTTPServer 8765`
	* Python 3.x : `python -m http.server 8765`
	* Node.js : First run `npm install http-server -g` (only the first time) then `http-server -p 8765`
5. Launch Tableau and use the sample.
