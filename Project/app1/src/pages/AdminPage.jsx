import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function AdminPage() {
  const { user, toggleAdmin } = useContext(UserContext);

  return (
    <div style={{ padding: '2rem' }}>
      {user.isAdmin ? (
        <>
          <h1>Admin Dashboard</h1>
          <p>Welcome, Admin! </p>
          <button onClick={toggleAdmin}>Switch to User</button>
        </>
      ) : (
        <>
          <p>Access denied. Admins only.</p>
          <button onClick={toggleAdmin}>I am an admin</button>
        </>
      )}
    </div>
  );
}

export default AdminPage;
