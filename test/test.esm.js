const {pathToFileURL} = require("url");
const {sync: globSync} = require("glob");
const {resolve} = require("path");

(async () => {
    const matches = globSync("test/*.mjs"); // Change the glob to match your test files
    for (const match of matches) {
        await import(pathToFileURL(resolve(match)).href);
    }
    run();
})();