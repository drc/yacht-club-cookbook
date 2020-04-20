import Layout from "../../../components/layout";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Appetizers({ recipes = [], category }) {
  
  return (
    <Layout>
      <h1>{category}</h1>
      <ul>
        {recipes
          .sort((a, b) => {
            return b.attributes.title < a.attributes.title;
          })
          .map((r, i) => (
            <li key={i}>
              <Link href={r.slug}>
                <a>
                  {r.attributes.title}
                </a>
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

// Appetizers.getInitialProps = async function () {
//   const recipes = await importRecipes();
//   return { recipes };
// };

const importRecipes = async (category) => {
  const markdownFiles = require
    .context("../../../content", true, /\.md$/)
    .keys()
    .map((fileName) => fileName.substring(2));

  return Promise.all(
    markdownFiles
      .filter((path) => {
        return path.startsWith(category);
      })
      .map(async (path) => {
        const markdown = await import(`../../../content/${path}`);
        return {
          ...markdown,
          slug: path.substring(0, path.length - 3),
          category: category,
        };
      })
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content"));
  const paths = files
    .filter((file) => !file.endsWith(".md"))
    .map((file) => ({
      params: {
        category: file,
      },
    }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }) {
  const categoryLabel = {
    appetizers: "Appetizers",
    beer: "Beer",
    drinks: "Drinks",
    desserts: "Desserts",
    entrees: "Entrées",
    sides: "Sides",
    soups_stews: "Soups / Stews",
  };
  const recipes = await importRecipes(category);
  return { props: { recipes, category: categoryLabel[category] } };
}
