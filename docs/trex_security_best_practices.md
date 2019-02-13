---
title: Extension Security - Best Practices
layout: docs
--- 

Extensions provide a way to add unique features to dashboards. You can use extensions to directly integrate the dashboard with applications outside of Tableau. 
While extension open up a world of possibilities, there are instances where you need or want to maintain control of how extensions are deployed in your company or enterprise. 
You can use the controls and features within Tableau to restrict and curate the dashboard extensions users have access to. 


**In this section**

* TOC
{:toc}


<div class="alert alert-info"><b>Who should read this?</b> The following information is for IT officers and administrators, Tableau server and site administrators, and anyone who is interested in managing dashboard extensions and the security of their data and business.</div>

---


## Be secure

Extensions are external applications that can access data from the dashboards. Tableau supports extensions in Tableau Desktop, Tableau Server, and Tableau Online. Tableau Server and Tableau Online provide the most control over the extensions your users can run. If you want the most secure deployment, you should restrict or limit the use of dashboard extensions on Tableau Desktop. If you trust your Tableau Desktop users to choose which extensions they should run, use the default settings for extensions in Tableau Desktop. If you don’t think you can trust your Tableau Desktop users to make that decision, you can turn off extensions in Tableau Desktop. If you only trust a certain set of users, you can enable extensions in Tableau Desktop for just those users, or use web authoring on Tableau Server or Tableau Online.

Tableau provides security measures and requirements for extensions by design. These are enabled for Tableau Desktop, Tableau Server, and Tableau Online.

* All extensions use the HTTP Secure (HTTPS) protocol.

* By default, anyone using a dashboard with an extension will be prompted and asked to allow or deny the extension permission to run. The extension must request permission if it will access underlying data.

* Starting in 2019.1, to run on Tableau Server or Tableau Online, the URL of the extension must be added to a safe list. The site administrator manages this list.

* On Tableau Server and Tableau Online, the site administrator can control whether the prompt appears for each extension.


For more information, see [Publishing a dashboard extension to Tableau Server or Tableau Online]({{site.baseurl}}/docs/trex_publish.html#publishing-a-dashboard-extension-to-tableau-server-or-tableau-online).

---

## Summary of recommended deployment options

You can use the controls in Tableau Server and Tableau Online to allow access to only the extensions you approve of, or if you choose, to restrict the use of extensions entirely. You can use the controls in Tableau Desktop to restrict the use of dashboard extensions on Tableau Desktop.

| **Security** | **Tableau Desktop** | **Tableau Server**, **Tableau Online** | **Why** |
| Extensions not allowed  | [Turn off extensions](#turn-off-extensions-on-tableau-desktop) | [Turn off extensions per site or server](#turn-off-extensions-on-tableau-server-and-tableau-online) | Only if you want to completely<br/> restrict the use of extensions,<br/> including in-house extensions<br/> you create for your business. 
| [Most secure](#most-secure---tableau-server-and-tableau-online) | Turn off extensions;<br/> Or turn on for select users  | Turn on extensions<br/> Turn off default behavior<br/> Add extensions to safe list<br/> Use web authoring to add to dashboard | Provides you the most control and<br/> flexibility to run only the <br/>extensions you trust.  |
| [Secure](#secure---tableau-server-and-tableau-online) | Turn off extensions;<br/> Or turn on for select users | Turn on extensions<br/> Turn on default behavior<br/> Add extensions to safe list<br/> Add extensions to block list (*Tableau Server*)<br/> Use web authoring to add to dashboard | Provides more flexibility<br/> and allows extensions to run<br/> that don't access<br/> underlying data, but still<br/> provides a way to block<br/> specific extensions.  | 
| [Less secure](#less-secure---tableau-desktop---tableau-server-and-tableau-online) | Turn on extensions<br/>for all users  | Turn on extensions<br/> Turn on default behavior<br/> Add extensions to safe list<br/> Add extensions to block list (*Tableau Server*)<br/> Use web authoring to add to dashboard | Provides the most flexibility, while<br/> still being able to use all<br/> of the security controls in<br/> Tableau Server and Tableau Online.  |





---

## Turn off extensions on Tableau Desktop

By default, extensions are enabled on Tableau Desktop, and dashboard authors are not restricted from adding extensions to their dashboards. Unlike Tableau Server or Tableau Online, there is no way to restrict the URLs desktop user can access, and therefore, no way to restrict the extensions they can use. However, you can turn off extensions in Tableau Desktop with a registry setting in Windows or with a property list for macOS. 

For more information, see [Turn off dashboard extensions](https://onlinehelp.tableau.com/current/desktopdeploy/en-us/desktop_deploy_setting_changes.htm#dashboard_extensions){:target="_blank"}


## Turn off extensions on Tableau Server and Tableau Online

By default, extensions are enabled on Tableau Server and Tableau Online. On both Tableau Server and Tableau Online, the site administrator can turn off extensions for the site. The server administrator can turn off extensions for Tableau Server, this overrides the site settings. Starting with Tableau Server 2019.1, no extensions are allowed to run unless they have been added to the safe list. In Tableau 2018.2 and 2018.3, extensions that are not on a safe list are allowed to run, provided that they do not access full data. That is, they do not access the underlying data in the workbook.  

* To completely disable extensions on Tableau Server, change the global setting that enables users to run extensions on the server (overrides the site settings). 

* To disable extensions on a site (Tableau Server, Tableau Online), change the site settings that enables users to run extensions on the site. 

For Tableau Server, see [Control extensions and access to data](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#Control){:target="_blank"}

For Tableau Online, see [Control extensions and access to data](https://onlinehelp.tableau.com/current/online/en-us/dashboard_extensions_server.htm#Control){:target="_blank"}


---

## Most secure - Tableau Server and Tableau Online

Starting with Tableau Server 2019.1, no extensions are allowed to run unless they have been added to the safe list. In Tableau 2018.2 and 2018.3, the default behavior is enabled, which allows extensions that are not on a safe list to run, provided that they do not access full data. For the most security, you need to change the default settings so that the only the extensions you add to the safe list are allowed. 

* Enable extensions on the server and on the sites you where you want to allow them. 

* For Tableau 2018.2 and 2018.3, use the site settings to change the default behavior for extensions, so that unknown extensions are not allowed to run.

* Add the URL of the extensions that you want to use to the safe list for the site. You can use the safe list settings to allow full data access. You can also control whether users of the extension will see prompts. The prompts request permission to run and describe the type of data that they require (summary or underlying data).

* Dashboard authors can use web authoring to add extensions to dashboard on Tableau Server and Tableau Online.

<br/>

**Tableau Server** - For more information:

* [Control extensions and access to data](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#Control){:target="_blank"}

* [Add extensions to the safe list](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#Add){:target="_blank"}

<br/>

**Tableau Online** - For more information:

* [Control extensions and access to data](https://onlinehelp.tableau.com/current/online/en-us/dashboard_extensions_server.htm#Control){:target="_blank"}

* [Add extensions to the safe list](https://onlinehelp.tableau.com/current/online/en-us/dashboard_extensions_server.htm#Add){:target="_blank"}

---

## Secure - Tableau Server and Tableau Online

To allow extensions, but to limit their access, you need to change the default behavior, which allows extensions that are not on a safe list to run, provided that they do not access full data. For extension that you do not want to allow under any circumstances, you can add them to a blocked list (Tableau Server only).

* Enable extensions on the server and on the sites you where you want to allow them.

* For Tableau 2019.1, use the site settings to change the default behavior for extensions, so that unknown extensions are allowed to run. Tableau 2018.2 and Tableau 2018.3 this is the default setting. 

* Add the URL of the extensions that you want to use to the safe list for the site. You can use the safe list settings to allow full data access. You can also control whether users of the extension will see prompts. The prompts request permission to run and describe the type of data that they require (summary or underlying data).

* Add the URL of the extensions that you do not want to allow to the blocked list. This option is only available on Tableau Server. 

* Dashboard authors can use web authoring to add extensions to dashboard on Tableau Server and Tableau Online.

<br/>

**Tableau Server** - For more information:

* [Control extensions and access to data](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#Control){:target="_blank"}

* [Add extensions to the safe list](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#Add){:target="_blank"}

* [Change the default settings for a site](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#change-the-default-settings-for-a-site){:target="_blank"}

* [Block specific extensions](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#Block){:target="_blank"}

<br/>

**Tableau Online** - For more information:

* [Control extensions and access to data](https://onlinehelp.tableau.com/current/online/en-us/dashboard_extensions_server.htm#Control){:target="_blank"}

* [Add extensions to the safe list](https://onlinehelp.tableau.com/current/online/en-us/dashboard_extensions_server.htm#Add){:target="_blank"}



---


## Less secure - Tableau Desktop - Tableau Server and Tableau Online

The main difference between this configuration and a more secure deployment, is that dashboard authors are able to use Tableau Desktop to add and use extensions. Dashboard authors are not restricted to using extensions that are on a safe list or prevented from using extensions that are on a blocked list, unless they publish their workbooks to Tableau Server or Tableau Online.

* Enable extensions on Tableau Desktop for some users. The dashboard authors can add extensions to the dashboard and can publish those dashboard to Tableau Server or Tableau Online.

* Enable extensions on Tableau Server and Tableau Online on the sites you where you want to allow them.

* For Tableau 2019.1, use the site settings to change the default behavior for extensions, so that unknown extensions are allowed to run. Tableau 2018.2 and Tableau 2018.3 this is the default setting. 

* Add the URL of the extensions that you want to use to the safe list for the site. You can use the safe list settings to allow full data access. You can also control whether users of the extension will see prompts. The prompts request permission to run and describe the type of data that they require (summary or underlying data).

* Add the URL of the extensions that you do not want to allow to the blocked list. This option is only available on Tableau Server. 

* Dashboard authors can use either Tableau Desktop or web authoring to add extensions to dashboard on Tableau Server and Tableau Online.

<br/>

**Tableau Desktop**  - For more information:

* [Turn off dashboard extensions](https://onlinehelp.tableau.com/current/desktopdeploy/en-us/desktop_deploy_setting_changes.htm#dashboard_extensions){:target="_blank"}

* [Use dashboard extensions](https://https://onlinehelp.tableau.com/current/pro/desktop/en-us/dashboard_extensions.htm){:target="_blank"}

<br/>

**Tableau Server** - For more information:

* [Control extensions and access to data](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#Control){:target="_blank"}

* [Add extensions to the safe list](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#Add)
{:target="_blank"}

* [Change the default settings for a site](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#change-the-default-settings-for-a-site){:target="_blank"}

* [Block specific extensions](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm#Block){:target="_blank"}

<br/>



**Tableau Online** - For more information:

* [Control extensions and access to data](https://onlinehelp.tableau.com/current/online/en-us/dashboard_extensions_server.htm#Control){:target="_blank"}

* [Add extensions to the safe list](https://onlinehelp.tableau.com/v0.0/online/en-us/dashboard_extensions_server.htm#Add){:target="_blank"}



