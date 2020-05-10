import Link from "next/link";

export default function RecipeList(props) {
  const { recipes, filePath } = props;

  return (
    <ul>
      {recipes.length > 0 ? (
        recipes
          .sort((a, b) => {
            return b.attributes.title < a.attributes.title;
          })
          .map((r, i) => (
            <li key={i}>
              {r.attributes.thumbnail ? (
                <img
                  src={`https://images.weserv.nl/?url=https://yachtclub.recipes${r.attributes.thumbnail.replace(
                    /\/public/,
                    ""
                  )}&h=100`}
                  loading="lazy"
                />
              ) : (
                ""
              )}
              <Link href={r.slug}>
                <a>{r.attributes.title}</a>
              </Link>
            </li>
          ))
      ) : (
        <li>No Recipes Yet</li>
      )}
      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-between;
          padding-right: 40px;
        }
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
        @media (max-width: 500px) {
          ul {
            display: block;
          }
          li {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </ul>
  );
}

// export default RecipeList;
