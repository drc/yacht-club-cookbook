import Layout from "../../components/layout";
import Link from "next/link"

const importRecipes = async () => {
  const markdownFiles = require
    .context("../../content/appetizers", false, /\.md$/)
    .keys()
    .map((fileName) => fileName.substring(2));
  console.log(markdownFiles);
  // return { markdownFiles };
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/appetizers/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default function Appetizers(props) {
  return (
    <Layout>
      <h1>Appetizers</h1>
      <ul>
        {props.recipes.map((r, i) => (
          <li key={i}>
            <Link href={r.slug}>
              <a>{r.attributes.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        text-align: center;
      `}</style>
    </Layout>
  );
}

Appetizers.getInitialProps = async function () {
  const recipes = await importRecipes();
  return { recipes };
};
