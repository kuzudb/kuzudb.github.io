const htmlName = window.location.pathname.split("/").pop();
const htmlNameWithoutExt = htmlName.split(".")[0];

const redirectUrl = "/docusaurus/blog/" + htmlNameWithoutExt;
window.location.replace(redirectUrl);