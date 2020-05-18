import Layout from "../components/layout";
import content from "../content/home.md";

export default function Index() {
  const { attributes, html } = content;

  return (
    <Layout title={attributes.title}>
      <h1 className="tracking-in-expand">{attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`
        text-align: center;
        .tracking-in-expand {
          -webkit-animation: tracking-in-expand 0.7s
            cubic-bezier(0.215, 0.61, 0.355, 1) both;
          animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
            both;
        }

        @-webkit-keyframes tracking-in-expand {
          0% {
            letter-spacing: -0.5em;
            opacity: 0;
          }
          40% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes tracking-in-expand {
          0% {
            letter-spacing: -0.5em;
            opacity: 0;
          }
          40% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </Layout>
  );
}


