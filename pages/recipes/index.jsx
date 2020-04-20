import Layout from "../../components/layout";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <h1>Recipes Dawg.</h1>
      <Link href="/recipes/appetizers">
          <a>Appetizers</a>
      </Link>
      <Link href="/recipes/beer">
          <a>Beer</a>
      </Link>
      <Link href="/recipes/drinks">
          <a>Drinks</a>
      </Link>
      <style jsx>{`
        text-align: center;
      `}</style>
    </Layout>
  );
}
