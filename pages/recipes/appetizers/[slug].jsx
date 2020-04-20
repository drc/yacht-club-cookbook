import Layout from "../../../components/layout";
import fs from "fs";
import path from "path";

export default function AppetizersDetail({recipe}) {
  const { html } = recipe;
  const { title, thumbnail } = recipe?.attributes;

  return (
    <Layout>
      <h1>{title}</h1>
      {thumbnail ? <img src={thumbnail.replace(/\/public/, "")}></img> : ""}
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <style jsx>{`
        text-align: center;
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content", "appetizers"));
  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const obj = await import(`../../../content/appetizers/${slug}.md`).catch(
    (error) => null
  );

  const recipe = JSON.parse(JSON.stringify(obj));

  return {
    props: {recipe},
  };
}
