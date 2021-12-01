---
title: Hosting and Contributing to the Community Portal
layout: docs
---

Submit your extension to the [Community Extension]({{ site.baseurl }}/community/)
portal to share your work with other developers. To make it easier for others to use your extension,
we ask that you include a link to a hosted version of your extension.

If you don't have a hosted version yet, see our [suggestions for hosting](#hosting).

Submitting to the Community Portal {#portal}
----------------------------------

**Note:** Before you submit a extension, you'll need a GitHub account.

1. Create a fork of the `extensions-api` repository.  

1. In your fork of the repository, find the community folder at the root of the repository. 

1. In the `community_extensions.json` file, add an entry for your extension.  Name, author, and description are required. All other fields are optional.  While we recommend both providing the source code and a hosted version of your extension, you may choose one or the other.  If you choose to provide a hosted version of your extension, see the next step (skip otherwise).

1. First, host your extension on a web server (see below for suggestions). Second, create a manifest file (`.trex`) where the URL points to the hosted location of your extension.  Finally, in your pull request, place the manifest file in the `community/CommunityManifests` folder.  Also place the file name into your entry in community_extensions.json.  Ensure the filename matches your manifest file and it is unique from others in the folder.

1. Submit a pull request from your fork to the main branch in the official repository.


After that, a member of the Tableau Extensibility team will review your submission.

Suggestions for hosting your extension {#hosting}
---------------------------------------

There are several free hosting services that you can use for your extension.  You can host
your extension anywhere you please, but we have two suggested locations that we have
seen to be the easiest to use.

1. Host your static content on GitHub pages.

    If your extension is composed of client-side code only (just HTML/CSS/JS files),
    you can host your content for free on GitHub Pages (This is actually what's hosting the documentation
    you are currently reading!).

    GitHub Pages makes it really easy to host content, especially if your extension code
    is already on GitHub.  Check out their tutorial for details: [pages.github.com/](https://pages.github.com)

2. Host your node app on Heroku.

    If your extension contains a sever component, like the Node Proxy sample,
    you can host your extension for free on Heroku.  There are certain usage restrictions; for example,
    their free tier requires the extension to be offline for a few hours a day.

    Check out their tutorial for more details:
    [Heroku Tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
