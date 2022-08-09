const fs = require("fs");
const _ = require('lodash');
const pkg =  require('./package.json');

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
    const outObj = _.chain(pkg)
        .omit('scripts')
        .omit('devDependencies')
        .value();

    outObj.main = './index.js';
    outObj.files = ['./**/*'];

    fs.writeFileSync(__dirname + '/dist/lib/package.json', JSON.stringify(outObj, null, 4));
    fs.copyFileSync(__dirname + '/LICENSE', __dirname + '/dist/lib/LICENSE');
}

main();