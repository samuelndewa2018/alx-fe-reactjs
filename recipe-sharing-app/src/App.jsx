import { Routes, Route, BrowserRouter } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Recipe Sharing App</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
