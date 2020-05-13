import Header from "./header";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <script
        type="text/javascript"
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      ></script>

      <title>{props.title}</title>
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
