import Header from "./header";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
