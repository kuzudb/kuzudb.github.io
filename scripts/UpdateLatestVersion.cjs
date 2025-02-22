const GITHUB_API_URL = "https://api.github.com/repos/kuzudb/kuzu/releases/latest";
const fs = require('fs/promises');
const path = require('path');

(async () => {
    console.log("Fetching latest version from GitHub...");
    const response = await fetch(GITHUB_API_URL);
    const data = await response.json();
    let version = data.tag_name;
    version = version.trim();
    version = version.substring(1);
    console.log(`Latest version is ${version}`);
    console.log("Updating LatestVersion.json...");
    const pathToJson = path.resolve(path.join(__dirname, "..", "src", "lib", "utils", "LatestVersion.json"));
    console.log("Path to LatestVersion.json: ", pathToJson);
    const json = JSON.stringify({ latestVersion: version });
    await fs.writeFile(pathToJson, json);
    console.log("LatestVersion.json updated successfully.");
    console.log("Done.");
})();
