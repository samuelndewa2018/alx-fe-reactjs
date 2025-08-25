import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav style={{ marginBottom: 12 }}>
        <Link to="details" style={{ marginRight: 10 }}>
          Profile Details
        </Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
