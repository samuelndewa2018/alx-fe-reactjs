import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = { name: "Jane Does", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
