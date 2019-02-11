var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

var os = require('os');
//control OS
//then run command depengin on the OS

if (os.type() === 'Linux')
   exec("npm run build-linux-webp", puts);
else if (os.type() === 'Darwin')
   exec("node build-mac.js", puts);
else if (os.type() === 'Windows_NT')
   exec("node build-windows.js", puts);
else
   throw new Error("Unsupported OS found: " + os.type());
