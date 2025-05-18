import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user, toggleAdmin } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const correctPassword = "admin123";

  if (!user.isAdmin) {
    if (!submitted) {
      return (
        <div className="page-container">
          <h2 className="page-title">Admin Access</h2>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => {
              setSubmitted(true);
              if (password === correctPassword) {
                toggleAdmin();
              }
            }}
          >
            Submit
          </button>
        </div>
      );
    } else {
      return (
        <div className="page-container">
          <h2 className="page-title">Access Denied</h2>
          <p className="page-description">Incorrect password.</p>
        </div>
      );
    }
  }

  return children;
};

export default ProtectedRoute;
