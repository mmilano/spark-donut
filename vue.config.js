// module.exports = {
//   outputDir: 'build',

//   css: {
//     sourceMap: true
//   },

//   runtimeCompiler: true,
//   // lintOnSave: true
// }

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    outputDir: "build",
    transpileDependencies: false,
    css: {
        sourceMap: true,
    },
});

