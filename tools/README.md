# Helpful Tools
This directory contains a list of tools/scripts that is potentially helpful. 

### Update Old Manifests
The format of the manifest has been updated in the new developer preview on 11/29/2017. Updates mostly include changes of XML tag names. The details of the updates can be found here {TODO}.

**ManifestUpdate.js** is a simple node script that can conveniently update your old manifests. The script takes in a parameter of either a file path or directory path (only old trex files in the directory will be updated). Node is required to run the script. 

#### Example Usage
```
node ManifestUpdate.js C:/Users/foobar/documents/"My Tableau Repository (Beta)"
```
```
node ManifestUpdate.js C:/Users/foobar/documents/"My Tableau Repository (Beta)"/oldManifest.trex
```