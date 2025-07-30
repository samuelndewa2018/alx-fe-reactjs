import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      if (username && !location && !minRepos) {
        const user = await fetchUserData(username);
        setResults([user]);
      } else {
        const users = await searchUsers({ username, location, minRepos });
        setResults(users);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        GitHub Advanced User Search
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4"
      >
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-4 py-2 rounded w-full mb-2 md:mb-0"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border px-4 py-2 rounded w-full mb-2 md:mb-0"
          />
          <input
            type="number"
            placeholder="Min Repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full md:w-auto"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">
          Looks like we cant find the user
        </p>
      )}

      <div className="grid gap-4 mt-6">
        {results.map((user) => (
          <div
            key={user.id || user.login}
            className="bg-white p-4 shadow-md rounded flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg">
                {user.name || user.login}
              </h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
              {user.location && (
                <p className="text-sm text-gray-500">📍 {user.location}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
