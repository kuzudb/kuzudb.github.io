const VERSION = "0.0.7";
const DOWNLOAD_LINKS_PREFIX =
  "https://github.com/kuzudb/kuzu/releases/download/v" + VERSION + "/";

const data = [
  { language: "Python", link: "pip install kuzu", isLinkAnchor: false },
  { language: "Node.js", link: "npm i kuzu", isLinkAnchor: false },
  {
    language: "CLI",
    platform: "macOS (Apple Silicon)",
    link: DOWNLOAD_LINKS_PREFIX + "kuzu_cli-osx-arm64.zip",
    isLinkAnchor: true,
  },
  {
    language: "CLI",
    platform: "macOS (Intel)",
    link: DOWNLOAD_LINKS_PREFIX + "kuzu_cli-osx-x86_64.zip",
    isLinkAnchor: true,
  },
  {
    language: "CLI",
    platform: "Linux",
    link: DOWNLOAD_LINKS_PREFIX + "kuzu_cli-linux-x86_64.zip",
    isLinkAnchor: true,
  },
  {
    language: "CLI",
    platform: "Windows",
    link: DOWNLOAD_LINKS_PREFIX + "kuzu_cli-windows-x86_64.zip",
    isLinkAnchor: true,
  },
  {
    language: "C/C++",
    platform: "macOS (Apple Silicon)",
    link: DOWNLOAD_LINKS_PREFIX + "libkuzu-osx-arm64.zip",
    isLinkAnchor: true,
  },
  {
    language: "C/C++",
    platform: "macOS (Intel)",
    link: DOWNLOAD_LINKS_PREFIX + "libkuzu-osx-x86_64.zip",
    isLinkAnchor: true,
  },
  {
    language: "C/C++",
    platform: "Linux",
    link: DOWNLOAD_LINKS_PREFIX + "libkuzu-linux-x86_64.zip",
    isLinkAnchor: true,
  },
  {
    language: "C/C++",
    platform: "Windows",
    link: DOWNLOAD_LINKS_PREFIX + "libkuzu-windows-x86_64.zip",
    isLinkAnchor: true,
  },
  { language: "Rust", link: "cargo add kuzu", isLinkAnchor: false },
  {
    language: "Java",
    link: DOWNLOAD_LINKS_PREFIX + "kuzu_java.jar",
    isLinkAnchor: true,
  },
];

const languages = [...new Set(data.map((item) => item.language))];
const platforms = [
  ...new Set(data.filter((item) => item.platform).map((item) => item.platform)),
];

const downloadLanguageSelect = $("#download-language");
const downloadPlatformSelect = $("#download-platform");

for (let language of languages) {
  downloadLanguageSelect.append(
    $(
      `<li><button id="${language}" class="button fit small download-language-select">${language}</a></li>`
    )
  );
}

for (let platform of platforms) {
  downloadPlatformSelect.append(
    $(
      `<li><button id="${platform}" class="button fit small download-platform-select">${platform}</a></li>`
    )
  );
}

const downloadLanguageSelectButtons = $(".download-language-select");
const downloadPlatformSelectButtons = $(".download-platform-select");
const downloadPlatformSelectContainer = $("#download-platform-container");
const downloadCommandContainer = $("#download-command-container");
const downloadCommand = $("#download-command");

downloadLanguageSelectButtons.on("click", function () {
  downloadPlatformSelectButtons.removeClass("primary");
  const language = $(this).attr("id");
  if ($(this).hasClass("primary")) {
    $(this).removeClass("primary");
    downloadPlatformSelectContainer.hide();
    downloadCommandContainer.hide();
    return;
  }
  const languageData = data.filter((item) => item.language === language);
  const platformData = languageData.filter((item) => item.platform);
  if (platformData.length > 0) {
    downloadPlatformSelectContainer.show();
    downloadCommandContainer.hide();
  } else {
    const item = languageData[0];
    if (item.isLinkAnchor) {
      downloadCommand.html(`<a href="${item.link}">${item.link}</a>`);
    } else {
      downloadCommand.html(item.link);
    }
    downloadPlatformSelectContainer.hide();
    downloadCommandContainer.show();
  }

  downloadLanguageSelectButtons.removeClass("primary");
  $(this).addClass("primary");
});

downloadPlatformSelectButtons.on("click", function () {
  const platform = $(this).attr("id");
  if ($(this).hasClass("primary")) {
    $(this).removeClass("primary");
    downloadCommandContainer.hide();
    return;
  }
  const language = $(".download-language-select.primary").attr("id");
  const item = data.find(
    (item) => item.language === language && item.platform === platform
  );
  if (item.isLinkAnchor) {
    downloadCommand.html(`<a href="${item.link}">${item.link}</a>`);
  } else {
    downloadCommand.html(item.link);
  }
  downloadCommandContainer.show();
  downloadPlatformSelectButtons.removeClass("primary");
  $(this).addClass("primary");
});

$("button#Python").click();
