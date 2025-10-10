const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  pages: {
    index: {
      entry: "src/main.js",
      title: "Kuzu - Embedded, scalable, blazing fast graph database",
    },
  },
  outputDir: "_site",
  css: {
    loaderOptions: {
      sass: {
        // Globally load bootstrap variables and functions
        additionalData: `
          @import "~/node_modules/bootstrap/scss/_functions.scss";
          @import "~/node_modules/bootstrap/scss/_variables.scss";
          `,
      },
    },
  }
});
