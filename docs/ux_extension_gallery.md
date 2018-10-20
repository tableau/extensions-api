---
title: Submitting your Extension to the Extension Gallery
layout: guide
---


You may be interested in sharing your extension for others to download and use in their dashboards. To submit to our [Extension Gallery](https://extensiongallery.tableau.com/) online, make sure you have the following components gathered. 

**[Gallery Card](#gallery-card-example)**

* Extension Name
* Extension Icon
* Tagline

**[Gallery Page](#gallery-page-example)**

* Description
* Developer Info
* Featured Images

**[How to Submit your Extension](#how-to-submit-your-extension)**

&nbsp;

---

## Gallery Card Example
This is what an extension looks like to a user while browsing the Extension Gallery. 

![gallery card example](imgs/gallery_card_example.png)

|     | Details | 
| --- | ------- | 
| **Extension Name**  | The name of your extension must clearly communicate what it does in one to three words. Use title case, making sure that each word starts with a capital letter. The name you use here must match the name you specified in the extension manifest file (`.trex`).|
| **Extension Icon**  | The icon for your extension will be displayed at a small size, so ensure that all the important visual elements of your icon are easily visible. Dimensions for the icon must be 280x280 pixels and uploaded as a `.png` file with transparency. Learn more about branding at [Branding your Extension]({{site.baseurl}}/docs/Style_Guidelines/ux_branding.html). Note that the icon you use here must look like the icon you include in the extension manifest file (`.trex`). The icon in the manifest file is used in the **About** dialog box for your extension. The icon in the manifest file is a 70x70 pixel `.png` file that is Base64 encoded.   |
| **Tagline**         | The tagline is one sentence that explains what the extension does. The maximum length is 96 characters. This tagline is also used within the extension configuration dialog. Learn more at [Extension Components and Modes]({{site.baseurl}}/docs/Interaction_Guidelines/ux_components_modes.html).|


&nbsp; 

## Gallery Page Example
Users reach pages like this when they want to know more about a particular extension. 

![gallery page example](imgs/gallery_page_example.png)

|     | Details | 
| --- | ------- | 
| **Description**  | Describe what your extension does in one paragraph. The description must describe how your extension works, how it might help with one’s workflow, or how it might enhance data insights. |
| **Developer Info**  | Take credit for your work. Gather links, files, and/or contact info for the following items: <br>**Policy**: Privacy Policy (website link or PDF) <br>**Usage**: Terms of Service (website link or PDF), and terms of service <br>**Support**: Personal or company website, FAQ, PDF, and contact info for feedback and inquires <br>**Version**: Current version of your extension. |
| **Featured Images** | You can upload one to three images of your extension in action. Take caution that screenshots do not reveal any sensitive or confidential data. |

&nbsp;

## How to Submit your Extension

After completing your extension, fill out the template below and email your extension information to [devplat@tableau.com](mailto:devplat@tableau.com). The extension name in the template needs to match the name you specified for your extension in the manifest file (`.trex`). The 280x280 pixel `.png` icon that you attach with your submission must look like the icon you included in your manifest file (they just have different dimensions). Our developers from the Developer Platform team at Tableau will let you know any next steps for sharing your extension. 

```
EMAIL SUBJECT: Extension Gallery Submission
-------------------------------------------
EXTENSION NAME:

TAGLINE:

DESCRIPTION:

DEVELOPER INFO:
– Privacy Policy:
– Usage:
– Support:
```

Lastly, be sure to **attach these files** before sending the email.

* Extension `.trex` manifest
* Extension Icon (a 280x280 pixel `.png`)
* Featured Images
* Additional/optional PDF files (for Developer Info section)



&nbsp;

&nbsp;

---

<!-- ### <div id="expand-box"><div id="expand-box-header">[<span style="float: right;">Parts of an Extension &#8594;</span>](3 - Parts of an Extension.md)</div></div>

##### <div id="expand-box"><div id="expand-box-header">[<span style="float: left;">&#8592; Lifecycle of an Extension</span>](1 - Lifecycle of an Extension.md)</div></div>
-->

