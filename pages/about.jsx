import Layout from "../components/layout";
import content from "../content/about.md";

export default function Index() {
  const { attributes, html } = content;
  return (
    <Layout title={`${attributes.title} - Yacht Club Cookbook`}>
      <h1>{attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`
        text-align: center;
      `}</style>
    </Layout>
  );
}
