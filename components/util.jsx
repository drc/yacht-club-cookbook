export default async function (category) {
  const markdownFiles = require
    .context(`../content/${category}`, false, /\.md$/)
    .keys()
    .map((fileName) => fileName.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/${category}/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};
