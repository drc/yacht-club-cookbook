module.exports = {
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      "/recipes/appetizers/2020-04-18_pizza": {
        page: "/recipes/appetizers/[slug]",
      },
    };
  },
};
// console.log(module.exports.exportPathMap);
