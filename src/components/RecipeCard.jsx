import { Link } from "react-router-dom";
const RecipeCard = ({
  imageUrl,
  name,
  prepTimeMinutes,
  cookTimeMinutes,
  servings,
  difficulty,
  caloriesPerServing,
  id,
}) => {
  return (
    <div className="card" key={id}>
      <img src={imageUrl} alt="recipe_img" />
      <div className="card-body">
        <Link to={`/recipedetail/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>
          <strong>Prep:</strong> {prepTimeMinutes} mins
        </p>
        <p>
          <strong>Cook:</strong> {cookTimeMinutes} mins
        </p>
        <p>
          <strong>Servings:</strong> {servings}
        </p>
        <p>
          <strong>Difficulty:</strong> {difficulty}
        </p>
        <p>
          <strong>Calories:</strong> {caloriesPerServing} kcal
        </p>
      </div>
    </div>
  );
};
export default RecipeCard;