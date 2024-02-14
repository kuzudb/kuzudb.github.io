const VERSION = "0.2.0";
const DOWNLOAD_LINKS_PREFIX =
  "https://github.com/kuzudb/kuzu/releases/download/v" + VERSION + "/";

const PLATFORMS = {
  mac: "macOS",
  linux_x64: "Linux (x86-64)",
  linux_arm64: "Linux (aarch64)",
  windows: "Windows",
  unknown: "Unknown",
};

const uaParser = new UAParser();
const os = uaParser.getOS();
const cpu = uaParser.getCPU();

let platform = PLATFORMS.unknown;
if (os.name.includes("Mac OS")) {
  platform = PLATFORMS.mac;
} else if (os.name.includes("Windows")) {
  platform = PLATFORMS.windows;
} else if (os.name.includes("Linux")) {
  if (cpu.architecture === "amd64") {
    platform = PLATFORMS.linux_x64;
  } else if (cpu.architecture === "arm64") {
    platform = PLATFORMS.linux_arm64;
  }
} else {
  platform = os.name;
}

const detectedPlatformSpan = $("#detected-platform-span");
if (!Object.values(PLATFORMS).includes(platform)) {
  detectedPlatformSpan.text(`${platform} (Unsupported)`);
} else {
  detectedPlatformSpan.text(platform);
}

const versionSpan = $("#version-span");
versionSpan.text(VERSION);

const data = [
  { language: "Python", link: "pip install kuzu", isLinkAnchor: false },
  { language: "Node.js", link: "npm i kuzu", isLinkAnchor: false },
  {
    language: "CLI",
    platform: PLATFORMS.mac,
    link: DOWNLOAD_LINKS_PREFIX + "kuzu_cli-osx-universal.tar.gz",
    isLinkAnchor: true,
  },
  {
    language: "CLI",
    platform: PLATFORMS.linux_x64,
    link: DOWNLOAD_LINKS_PREFIX + "kuzu_cli-linux-x86_64.tar.gz",
    isLinkAnchor: true,
  },
  {
    language: "CLI",
    platform: PLATFORMS.linux_arm64,
    link: DOWNLOAD_LINKS_PREFIX + "kuzu_cli-linux-aarch64.tar.gz",
    isLinkAnchor: true,
  },
  {
    language: "CLI",
    platform: PLATFORMS.windows,
    link: DOWNLOAD_LINKS_PREFIX + "kuzu_cli-windows-x86_64.zip",
    isLinkAnchor: true,
  },
  {
    language: "C/C++",
    platform: PLATFORMS.mac,
    link: DOWNLOAD_LINKS_PREFIX + "libkuzu-osx-universal.tar.gz",
    isLinkAnchor: true,
  },
  {
    language: "C/C++",
    platform: PLATFORMS.linux_x64,
    link: DOWNLOAD_LINKS_PREFIX + "libkuzu-linux-x86_64.tar.gz",
    isLinkAnchor: true,
  },
  {
    language: "C/C++",
    platform: PLATFORMS.linux_arm64,
    link: DOWNLOAD_LINKS_PREFIX + "libkuzu-linux-aarch64.tar.gz",
    isLinkAnchor: true,
  },
  {
    language: "C/C++",
    platform: PLATFORMS.windows,
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

  if (platform !== PLATFORMS.unknown) {
    downloadPlatformSelectButtons.filter(`#${platform}`).click();
  }
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

$("button#CLI").click();
