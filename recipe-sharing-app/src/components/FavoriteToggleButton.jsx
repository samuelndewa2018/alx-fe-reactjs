import { useRecipeStore } from "./recipeStore";

const FavoriteToggleButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId);
  };

  return (
    <button onClick={toggleFavorite} style={{ marginTop: "8px" }}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default FavoriteToggleButton;
