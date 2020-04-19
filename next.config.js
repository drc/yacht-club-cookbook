module.exports = {
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
//   async exportPathMap(defaultPathMap) {
//     return {
//       ...defaultPathMap,
//       ...getPathsForRecipes(),
//     };
//   },
};
// console.log(module.exports.exportPathMap);