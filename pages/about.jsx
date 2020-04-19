import Layout from "../components/layout";
import content from "../content/about.md";

export default function Index() {
  const { attributes, html } = content;
  console.log(attributes);
  return (
    <Layout>
      <h1>{attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`
        text-align: center;
      `}</style>
    </Layout>
  );
}
