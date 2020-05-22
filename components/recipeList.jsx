import Link from "next/link";
import RecipeItem from "./recipeItem";

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
            <RecipeItem
              thumbnail={r.attributes.thumbnail}
              slug={r.slug}
              title={r.attributes.title}
            />
          ))
      ) : (
        <li>No Recipes Yet</li>
      )}
      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-around;
          padding-right: 40px;
          flex-wrap: wrap;
          margin: 0px 50px;
        }
      `}</style>
    </ul>
  );
}

// export default RecipeList;
