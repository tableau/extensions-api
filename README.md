# Tableau Extensions API
[![Tableau Supported](https://img.shields.io/badge/Support%20Level-Tableau%20Supported-53bd92.svg)](https://www.tableau.com/support-levels-it-and-developer-tools)

![Image of Flex the T-Rex](./assets/flex.png)

## Why the Tableau Extensions API?
The Extensions API lets you do more without leaving Tableau. Build Tableau extensions that can interact and communicate with Tableau, and embed them directly in your workbooks.

## Setup and Running Samples

### Prerequisites
* You must have Node.js and npm installed. You can get these from [http://nodejs.org](http://nodejs.org).

### Setup
1. Copy the `.trex` files of the sample you wish to run to `~\Documents\My Tableau Repository (Beta)\Extensions` so they are available to Tableau.
2. Open a command prompt window to the location where you cloned this repo.
3. Run `npm install`.
4. Run `npm start`.
5. Launch Tableau and use the sample in a dashboard.

 >**Note** The web server just serves the extension samples and tutorial, which have URLs similar to the following: `http://localhost:8765/Samples/DataSources/datasources.html`
 >   This local web server is not intended to serve the Extensions API Help pages. 
 >   View the Help on GitHub at [https://tableau.github.io/extensions-api](https://tableau.github.io/extensions-api).

## Submissions
We would love submissions to either the Docs or Sample code! To contribute, first sign our CLA that can be found [here](https://tableau.github.io/contributing.html).  To submit a contribution, please fork the repository then submit a pull request to the `submissions` branch.

## Code Style
Our sample code follows the [Semi-Standard Style](https://github.com/Flet/semistandard).  If you add your own extension code to the Samples directory, you can run `npm run lint` to validate the style of your code.  Please run this command before submitting any pull requests for Sample code.

## Contributions
Code contributions and improvements by the community are welcomed!
See the LICENSE file for current open-source licensing and use information.

Before we can accept pull requests from contributors, we require a signed [Contributor License Agreement (CLA)](http://tableau.github.io/contributing.html).

## Documentation
[Visit the project website and read the documentation here.](https://tableau.github.io/extensions-api/)


## Issues
Use [Issues](https://github.com/tableau/ProjectFrelard/issues) to log any problems or bugs you encounter in the docs or sample  code. 
