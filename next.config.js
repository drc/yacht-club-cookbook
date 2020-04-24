// module.exports = {
//   webpack: (configuration) => {
//     configuration.module.rules.push({
//       test: /\.md$/,
//       use: "frontmatter-markdown-loader",
//     });
//     return configuration;
//   },
// };
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
});