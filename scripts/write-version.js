const package = require("../package.json");
const fs = require("fs");

const comment = "// Don't edit this - it will be updated automatically by the build script";
const data = `export const VERSION = '${package.version}';`

fs.writeFileSync("src/shared/version.const.ts", comment + '\n' + data);