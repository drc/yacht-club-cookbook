import Link from "next/link";

export default function RecipeList(props) {
  const { recipes, filePath } = props;
  return (
    <ul>
      {recipes
        .sort((a, b) => {
          return b.attributes.title < a.attributes.title;
        })
        .map((r, i) => (
          <li key={i}>
            <Link href={`${filePath}/${r.slug}`}>
              <a>
                {r.attributes.title} - {r.slug}
              </a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

// export default RecipeList;
