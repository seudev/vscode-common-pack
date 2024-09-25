const fs = require('fs');

const packageFile = fs.readFileSync('package.json');
const extensions = JSON.stringify(JSON.parse(packageFile.toString()).extensionPack, null, 2)
const readmeTemplate = fs.readFileSync('src/README.template.md');
const readme = readmeTemplate.toString().replace("${extensions}", extensions);

const out = fs.createWriteStream('README.md');
out.write(readme);
out.end();
