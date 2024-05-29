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

This section will take you through the process of setting up your environment to use one of the sample dashboard or viz extensions. Using one of the sample extensions is a great way to learn and great way to get started developing your own extensions. In this section, you will start a simple web server on your computer to host the samples. You can use the same process for hosting the extension when you start developing your own.

---

:::info

**What's in a Tableau extension?**
A Tableau extension consists of an XML manifest file (`.trex`), an web page (`.html`) that uses a Tableau-provided JavaScript library, and the JavaScript file (`.js`) (or files) that contain your extension logic. The Tableau dashboard and viz extensions are supported on Tableau Server and Tableau Cloud. Tableau dashboard extensions are also supported in Tableau Desktop.

:::

---

### What you need to get started

If you want to create an extension or work with the sample code, make sure you have the following dependencies installed:

* [Git](https://git-scm.com/downloads)
* [Node.js and npm](https://nodejs.org/en/download/) 

You need Node.js and npm to run the viz extension demos. Node.js is a JavaScript runtime. npm is a package manager for Node.js and is installed when you install Node.js.

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

To use Tableau dashboard and viz extensions in Tableau, you need the following versions of Tableau.

For dashboard extensions:

* Tableau Desktop 2018.2 and later
* Tableau Server 2018.2 and later
* Tableau Cloud

For viz extensions:

* Tableau Cloud
* Tableau Server 2024.1


### Security requirements

To run extensions on Tableau Server or Tableau Cloud, support for extensions must be enabled, and depending upon the extension and the data access it requires, the extension might need to be added to the safe list for the site. See
 [Manage Dashboard Extensions on Tableau Server](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm) or [Manage Dashboard Extensions on Tableau Cloud](https://onlinehelp.tableau.com/current/online/en-us/dashboard_extensions_server.htm) for more information.


