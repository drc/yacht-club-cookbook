import Layout from "../../../components/layout";
import Link from "next/link";

export default function AppetizersDetail(props) {
  const { recipe } = props;
  const { html } = recipe || "";
  const { title, thumbnail } = recipe?.attributes || {
    title: "",
    thumbnail: "",
  };

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

AppetizersDetail.getInitialProps = async function ({ query }) {
  const { slug } = query;
  console.log(slug);
  const recipe = await import(`../../../content/appetizers/${slug}.md`).catch(
    (error) => null
  );
  return { recipe };
};
