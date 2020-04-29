import Layout from "../../components/layout";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Index({ dirs }) {
  return (
    <Layout>
      <h1>Recipes Dawg.</h1>
      <ul>
        {dirs.map((directory) => (
          <li>
            <Link href={`/recipes/${directory.link}`}>
              <a>{directory.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        text-align: center;
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content"));
  const dirs = files
    .filter((file) => !file.endsWith(".md"))
    .map((dir) => ({
      link: dir,
      title: dir.charAt(0).toUpperCase() + dir.slice(1).replace("_", " "),
    }));
  return { props: { dirs } };
}
