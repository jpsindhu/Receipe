import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Pagination from "./Paginate";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    let ignore = false;
    let apiUrl = `https://dummyjson.com/recipes?limit=10&skip=${skip}`;
    if (query.length > 1) {
      apiUrl = `https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}&limit=10&skip=${skip}`;
    }
    async function fetchRecipes() {
      try {
        setLoading(true);
        setError(false);
        const recipesResponse = await fetch(apiUrl);
        if (!recipesResponse.ok) throw new Error(recipesResponse.statusText);
        const recipesJson = await recipesResponse.json();
        if (ignore) return;
        setRecipes(recipesJson.recipes);
        setPageCount(Math.ceil(recipesJson.total / 10));
        setLoading(false);
      } catch (error) {
        if (ignore) return;
        setLoading(false);
        setError(true);
        console.log(error);
      }
    }
    fetchRecipes();
    return () => {
      ignore = true;
    };
  }, [skip, query]);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const searchSubmit = () => {
    setSkip(0);
    setQuery(searchText);
  };
  const handlePageClick = (event) => {
    setSkip(event.selected * 10);
  };

  return (
    <>
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {error && <div>Something went wrong...</div>}
      <div className="search-section">
        <input
          type="text"
          value={searchText}
          placeholder="search recipes"
          name="search"
          onChange={handleSearchTextChange}
        />
        <button className="searchBtn" onClick={searchSubmit}>
          Search
        </button>
      </div>
      <div className="card-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            imageUrl={recipe.image}
            name={recipe.name}
            prepTimeMinutes={recipe.prepTimeMinutes}
            cookTimeMinutes={recipe.cookTimeMinutes}
            servings={recipe.servings}
            difficulty={recipe.difficulty}
            caloriesPerServing={recipe.caloriesPerServing}
          />
        ))}
      </div>
      {pageCount > 1 && (
        <Pagination
          pageCount={pageCount}
          forcePage={skip / 10}
          handlePageChange={(event) => handlePageClick(event)}
        />
      )}
    </>
  );
};
export default RecipeList;