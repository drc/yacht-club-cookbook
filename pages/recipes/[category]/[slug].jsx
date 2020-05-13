import Layout from "../../../components/layout";
import path from "path";
import Head from "next/head";

export default function AppetizersDetail({ recipe }) {
  const { html } = recipe;
  const { title, thumbnail } = recipe?.attributes;
  const metaTitle = `${title} - The Yacht Club Cookbook`;
  const craftedImage = thumbnail
    ? `https://images.weserv.nl/?url=https://yachtclub.recipes${thumbnail.replace(
        /\/public/,
        ""
      )}&h=300`
    : "";

  return (
    <Layout title={metaTitle}>
      <Head>
        <meta property="og:image" content={craftedImage} />
      </Head>
      <h1>{title}</h1>
      {thumbnail ? <img src={craftedImage} loading="lazy"></img> : ""}
      <div className="recipe" dangerouslySetInnerHTML={{ __html: html }}></div>
      <style jsx>{`
        margin: auto 100px;

        .recipe {
          line-height: 1.5rem;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  //const files = fs.readdirSync(path.join("content", "appetizers"));
  const files = require
    .context("../../../content", true, /\.md$/)
    .keys()
    .map((fileName) => fileName.substring(2));
  const paths = files
    .map((file) => ({
      params: {
        slug: path.parse(file).name,
        category: path.parse(file).dir,
      },
    }))
    .filter((file) => file.params.category !== "");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug, category } }) {
  const obj = await import(`../../../content/${category}/${slug}.md`).catch(
    (error) => null
  );

  const recipe = JSON.parse(JSON.stringify(obj));

  return {
    props: { recipe },
  };
}
