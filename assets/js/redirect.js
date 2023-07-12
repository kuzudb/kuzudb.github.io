const htmlName = window.location.pathname.split("/").pop();
const htmlNameSplit = htmlName.split(".");
htmlNameSplit.pop();
const htmlNameWithoutExt = htmlNameSplit.join(".");

const redirectUrl = "/docusaurus/blog/" + htmlNameWithoutExt;
window.location.replace(redirectUrl);
