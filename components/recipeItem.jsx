import Link from "next/link";

export default function RecipeItem({ key, thumbnail, slug, title }) {
  return (
    <>
      <li key={key}>
        {thumbnail ? (
          <img
            src={`https://images.weserv.nl/?url=https://yachtclub.recipes${thumbnail.replace(
              /\/public/,
              ""
            )}&h=100`}
            loading="lazy"
          />
        ) : (
          ""
        )}
        <Link href={slug}>
          <a>{title}</a>
        </Link>
      </li>
      <style jsx>
        {`
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            height: 200px;
            width: 200px;
            list-style: none;
            padding: 10px;
            border: 1px solid white;
            border-radius: 2rem;
          }
        `}
      </style>
    </>
  );
}
