import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "24px", marginBottom: "10px" }}>
        {userData.name}
      </h2>
      <p style={{ fontSize: "16px" }}>
        Age: <span style={{ fontWeight: "bold" }}>{userData.age}</span>
      </p>
      <p style={{ fontStyle: "italic", fontSize: "14px" }}>
        Bio: {userData.bio}
      </p>
    </div>
  );
};

export default UserProfile;
