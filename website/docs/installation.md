---
title: Installation
description: Installation instructions
---


```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { Link } from "react-router-dom";
```


This section will take you through the process of setting up your environment to enable code development and testing against the Extension API SDK. 

**Manual installation** 

Follow the instructions on this page to use one of the sample dashboard, viz, or workspace extensions. Using one of the sample extensions is a great way to learn and great way to get started developing your own extensions. In this section, you will start a simple web server on your computer to host the samples. You can use the same process for hosting the extension when you start developing your own.

**Using an agent**  

Use [Tableau Studio](%studio_dev_guide%), or the AI coding assistant of your choice with Tableau MCP, to [install the SDK and create an extension using natural language](./dataapps/trex_dataapp_getstarted.md#get-the-tableau-plugin).

---

:::info

**What's in a Tableau extension?**
A Tableau extension consists of an XML manifest file (`.trex`), an web page (`.html`) that uses a Tableau-provided JavaScript library, and the JavaScript file (`.js`) (or files) that contain your extension logic. The Tableau dashboard and viz extensions are supported on Tableau Server, Tableau Cloud, and Tableau Desktop. Workspace extensions on this site target Tableau Desktop (see below).

:::

---

### What you need to get started

If you want to create an extension or work with the sample code, make sure you have the following dependencies installed:

* [Git](https://git-scm.com/downloads)
* [Node.js and npm](https://nodejs.org/en/download/) 
* Extensions enabled on your [Tableau Server](https://help.tableau.com/current/server/en-us/dashboard_extensions_server.htm) or [Tableau Cloud](https://help.tableau.com/current/online/en-us/dashboard_extensions_server.htm)

You need Node.js and npm to run the extension demos and to host a local workspace extension page. Node.js is a JavaScript runtime. npm is a package manager for Node.js and is installed when you install Node.js.

---

### Get the Tableau Extensions API SDK

You can get the Tableau Extensions API SDK in two ways. Clone the repository if you want to contribute to the open source project or keep current with the latest changes. Download the `.zip` file if you want to view the samples and work on your own.

```mdx-code-block
<Tabs queryString="clone-repo">
<TabItem value="https" label="HTTPS" default>
```

* Open a terminal in the directory where you want to copy the Tableau Extensions SDK.  Then run the following command to clone the Tableau Extensions API git repository:

HTTPS
<CodeBlock language="js">
git clone https://github.com/tableau/extensions-api.git
</CodeBlock>

```mdx-code-block
</TabItem>
<TabItem value="ssh" label="SSH">
```

* Open a terminal in the directory where you want to copy the Tableau Extensions SDK.  Then run the following command to clone the Tableau Extensions API git repository:

SSH

`git clone git@github.com:tableau/extensions-api.git`

```mdx-code-block
</TabItem>
<TabItem value="download" label="Download">
```

* Download the [Tableau Extensions API SDK (.zip file)](https://github.com/tableau/extensions-api/archive/main.zip) and extract the files to your computer.

```mdx-code-block
</TabItem>
</Tabs>
```

---

### Requirements for using extensions in Tableau

To use Tableau dashboard, viz, or workspace extensions, or data apps in Tableau, you need one of the following versions of Tableau. Data apps are available only on Tableau Cloud.

For dashboard extensions:

* Tableau Desktop 2018.2 and later
* Tableau Server 2018.2 and later
* Tableau Cloud

For viz extensions:

* Tableau Desktop 2024.1 and later
* Tableau Server 2024.1 and later
* Tableau Cloud

For workspace extensions:

* Tableau Desktop %coming_release% and later

  This path is Tableau Desktop.

For data apps (Cloud-only):

* Tableau Cloud


### Security requirements

To run extensions on Tableau Server or Tableau Cloud, support for extensions must be enabled, and depending upon the extension and the data access it requires, the extension might need to be added to the safe list for the site. See
 [Manage Dashboard Extensions on Tableau Server](https://help.tableau.com/current/server/en-us/dashboard_extensions_server.htm) or [Manage Dashboard Extensions on Tableau Cloud](https://help.tableau.com/current/online/en-us/dashboard_extensions_server.htm) for more information.

Special care must be taken for data apps, available only on Tableau Cloud, to ensure that security concerns are addressed. See [Manage data apps](./dataapps/trex_dataapp_manage.md) and [data app security](./dataapps/trex_dataapp_security.md) for more information.
