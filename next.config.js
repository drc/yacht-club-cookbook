const fs = require("fs");
const appetizersFolder = "./content/appetizers";

const getPathForAppetizers = (category) => {
  return fs
    .readdirSync(`./content/${category}`)
    .map((app) => {
      const trimmedName = app.substring(0, app.length - 3);
      return {
        [`/recipes/${category}/${trimmedName}`]: {
          page: `/recipes/${category}/[slug]`,
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
      ...getPathForAppetizers("appetizers"),
    };
  },
};
// console.log(module.exports.exportPathMap);
