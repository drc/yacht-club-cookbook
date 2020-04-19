const fs = require("fs");
const appetizersFolder = "./content/appetizers";

const getPathForAppetizers = () => {
  return fs
    .readdirSync(appetizersFolder)
    .map((app) => {
      const trimmedName = app.substring(0, app.length - 3);
      return {
        [`/recipes/appetizers/${trimmedName}`]: {
          page: "/recipes/appetizers/[slug]",
          query: {
            slug: trimmedName,
          },
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

module.exports = {
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    console.log(defaultPathMap);
    return {
      ...defaultPathMap,
      ...getPathForAppetizers(),
    };
  },
};
// console.log(module.exports.exportPathMap);
