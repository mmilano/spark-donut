// config file

const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  outputDir: "build",
  transpileDependencies: false,
  css: {
    sourceMap: true,
  },
});
