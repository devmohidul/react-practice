import { recipes } from "./Data";

function Recipe({ name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Recipelist() {
  const recipelist = recipes.map((recipe) => (
    <div key={recipe.id}>
      <Recipe {...recipe} key={recipe.id} />
    </div>
  ));
  //   const ingredients = recipelist.ingredients.map((ingredient) => (
  //     <h3>{ingredient.iname}</h3>
  //   ));
  return (
    <div>
      <h2>{recipelist}</h2>
    </div>
  );
}
