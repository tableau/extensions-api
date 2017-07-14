const fs = require('fs');
let program = require('commander');
let path = require('path');

program
  .option('-p, --perforce [oath]', 'Path to perforce scriptsharp directory')
  .parse(process.argv);

var qwebChannel = fs.readFileSync(path.join(program.perforce, 'qwebchannel.js'), 'utf8');
var bootstrap = fs.readFileSync(path.join(program.perforce, 'src/AddInBootstrap/bin/Debug/vqladdinbootstrap.debug.js'), 'utf8');
var api = fs.readFileSync(path.join(program.perforce, 'src/AddInApi/bin/Debug/vqladdinapi.debug.js'), 'utf8');

var combined = qwebChannel + "\n\n" + bootstrap + "\n\n" + api;

var destination = path.join('./src/addin/tableau-addin-0.1.0.js');
fs.writeFileSync(destination, combined);
