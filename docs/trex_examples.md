---
title: Dashboard Extension Examples
layout: docs
---


To examine the sample source code and to see how Tableau dashboard extensions work, you can clone or download the [ProjectFrelard](https://github.com/tableau/ProjectFrelard) repository on GitHub and run the examples. 
See the [React Example](https://github.com/tableau/ProjectFrelard/tree/master/Examples/ReactJs) add-ins or the [HelloFrelard add-in](https://github.com/tableau/ProjectFrelard/tree/master/Examples/HelloFrelard) example. Follow the instructions in the Readme files to set up the samples. The Readme files are in the `Examples/HelloFrelard` and `Example/ReactJs` folders. The examples are set up for running the web applications on your computer (as localhost). 

## Dashboard Extensions - Show me now!
You can also test Frelard in Tableau Desktop by clicking the following links and downloading the `.trex` files. These Frelard manifest files are configured to point to the web appplications that are running on GitHub. You can quickly see Frelard in action. Start Tableau, open a workbook, and then drag the extension to the dashboard. 

| Download .trex file | Description |
|----|-----|
|  <a class="btn btn-primary btn-lg" href="{{ site.baseurl }}/samples/gitHelloFrelard.tflx" role="button" download>HelloFrelard</a>&nbsp;&nbsp; | Simple web app that initializes the add-in and gets and displays the name of the dashboard. Web app is hosted [here]({{site.host}}{{ site.baseurl}}/Examples/HelloFrelard/)
|	  <a class="btn btn-primary btn-lg" href="{{ site.baseurl }}/samples/gitGetData.tflx" role="button" download>GetData</a>&nbsp;&nbsp; |  Gets the data from the selected workbook. 


1. Select a dashboard extension from the table. 
Click the download button for the extension you want to use. 

2. Place the downloaded `.trex` manifest file (or files) in your Tableau `Addins` folder. The `Addins` folder is in the `My Tableau Repository` folder (for example, `c:\User\Name\Documents\My Tableau Repository (Beta)\Addins`). 

3. Start Tableau. 
Be sure to use the version of Tableau that has the `AddIns` feature flag enabled. See [Download and install Tableau Desktop]({{site.baseurl}}/docs/trex_getstarted.html#download-and-install-tableau-desktop).

4. Open a workbook that has a dashboard, or open a workbook and create a new dashboard. 

5. In the dashboard, under **Add-Ins**, select the add-in and drag it on to the dashboard. 

   ![]({{site.baseurl}}/assets/frelard_addin2.png)  

6. The extension (web application) appears in the dashboard frame. Configure the extension as necessary (make selections in the hosted web app). That's it!  


