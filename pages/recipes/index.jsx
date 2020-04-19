import Layout from "../../components/layout";
import Link from "next/link";

export default function Index() {
  //   const { attributes, html } = content;
  //   console.log(attributes);
  return (
    <Layout>
      <h1>Recipes Dawg.</h1>
      <Link href="/recipes/appetizers">
          <a>Appetizers</a>
      </Link>
      <style jsx>{`
        text-align: center;
      `}</style>
    </Layout>
  );
}
