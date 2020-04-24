import Layout from "../components/layout";
import content from "../content/home.md";
import Head from "next/head";

export default function Index() {
  const { attributes, html } = content;

  return (
    <Layout>
      <Head>
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>

        <title>{attributes.title}</title>
        <meta property="og:title" content={attributes.title} />
        <meta property="og:type" content="website" />
      </Head>
      <h1>{attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`
        text-align: center;
      `}</style>
    </Layout>
  );
}
