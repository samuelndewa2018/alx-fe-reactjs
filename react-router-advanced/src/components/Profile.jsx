import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>User Profile</h2>
      <nav style={{ marginBottom: 12 }}>
        <Link to="details" style={{ marginRight: 10 }}>
          Profile Details
        </Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <button onClick={handleLogout} style={{ marginBottom: 12 }}>
        Logout
      </button>
      <Outlet />
    </div>
  );
}
