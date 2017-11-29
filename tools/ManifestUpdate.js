const fs = require("fs");
const readline = require("readline");
const path = require("path");
const eol = require('os').EOL;

const tagsToDelete = ["addin-type", "dashboard-addin"]
const contentToReplace = {
    "http://wwww.tableau.com/xml/addin_manifest": "http://wwww.tableau.com/xml/extension_manifest",
    "tableau-addin": "dashboard-extension",
    "addin-version": "extension-version"
}

function updateManifestsInDir(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        files.forEach((file) => {
            if (path.extname(file) == ".trex") {
                updateManifestFile(path.join(dirPath, file));
            }
        });
    });
}

function processLine(lines, line) {
    var fileUpdated = false;
    for (i in tagsToDelete) {
        if (line.includes(tagsToDelete[i])) {
            fileUpdated = true;
            return fileUpdated;
        }
    }
    const toReplace = Object.keys(contentToReplace);
    toReplace.forEach((tag) => {
        if (line.includes(tag)) {
            line = line.replace(tag, contentToReplace[tag]);
            fileUpdated = true;
        }
    });
    lines.push(line + eol);
    return fileUpdated;
}

function updateManifestFile(filePath) {
    const parser = path.parse(filePath);
    const outputFile = parser.name + "_updated" + parser.ext;
    const outputPath = path.join(parser.dir, outputFile);
    if (fs.existsSync(outputPath)) {
        console.log(`${outputFile} already exists. No changes Made`);
        return;
    }
    const rs = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: rs,
    });
    var fileUpdated = false;
    var newLines = [];
    rl.on('line', (input) => {
        if(processLine(newLines, input)) {
            fileUpdated = true;
        }
    });
    rl.on('close', () => {
        rs.close();
        if (fileUpdated) {
            const ws = fs.createWriteStream(outputPath);            
            newLines.forEach((newLine) => {
                ws.write(newLine);
            });
            console.log(`Updated File: ${outputFile}`);            
        } else {
            console.log(`No Updates Made to: ${parser.name + parser.ext}`);
        }
    });
}

function main() {
    const inputPath = process.argv.slice(2)[0];
    fs.stat(inputPath, (err, stats) => {
        if (err || !(stats.isDirectory() || stats.isFile())) {
            console.error(inputPath + ": is not a valid directory or file");
        }
        if (stats.isDirectory()) {
            updateManifestsInDir(inputPath);
        } else if (stats.isFile()) {
            updateManifestFile(inputPath);
        }
    });
}

main();
