# Project Management Write-back Sample

This extension demonstrates how to add write-back capabilities to a dashboard. We use a fictional marketing team's tasks and a corresponding dashboard. To simplify our set-up, we are using an Excel spreadsheet for our datasource.

Our dashboard comes from a [blog post](https://www.tableau.com/about/blog/2017/6/using-gantt-charts-tableau-manage-project-72429) by Tableau's marketing team.

### Pre-requisites
* You must have Node.js installed. You can get Node.js from http://nodejs.org.

### Setup
1. Copy `ProjectManagement.trex` to `~\Documents\My Tableau Repository (Beta)\Extensions` so it will be available in Tableau.
2. Open a command prompt window to the location where you cloned this repo.
3. Make sure you're in the `.\Examples\ProjectManagement` directory.
4. Start a simple file hosting server:
	* Node.js : First run `npm install` (only the first time) then `npm start`.
5. Launch Tableau.
6. Open `Tasks.twb` and then add the extension to the dashboard.
