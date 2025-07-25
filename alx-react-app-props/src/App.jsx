import UserContext from "./components/UserContext";
import ProfilePage from "./ProfilePage";

function App() {
  const userData = { name: "Jane Does", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
