import React from "react";
import { Outlet, Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <h1>My Profile</h1>
      <nav>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default ProfilePage;
