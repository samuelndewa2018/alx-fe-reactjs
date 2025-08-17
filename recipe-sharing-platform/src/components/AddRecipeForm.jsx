import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // ✅ use "steps"
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const lines = (text) =>
    text
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = "Title is required.";
    const ing = lines(ingredients);
    if (ing.length === 0) e.ingredients = "Ingredients are required.";
    else if (ing.length < 2)
      e.ingredients = "Please provide at least 2 ingredients.";
    const stps = lines(steps);
    if (stps.length === 0) e.steps = "Preparation steps are required.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      ingredients: lines(ingredients),
      steps: lines(steps), // ✅ primary field
      instructions: lines(steps), // 🔁 compatibility with RecipeDetail expecting "instructions"
    };
    console.log("New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        ➕ Add a New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto"
      >
        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter recipe title"
            aria-invalid={Boolean(errors.title)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-medium mb-2"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            rows="4"
            placeholder="List each ingredient on a new line"
            aria-invalid={Boolean(errors.ingredients)}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation steps */}
        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-gray-700 font-medium mb-2"
          >
            Preparation steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            rows="5"
            placeholder="Write each step on a new line"
            aria-invalid={Boolean(errors.steps)}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>

        {submitted && (
          <p className="text-green-600 font-medium mt-4 text-center">
            🎉 Recipe submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default AddRecipeForm;
