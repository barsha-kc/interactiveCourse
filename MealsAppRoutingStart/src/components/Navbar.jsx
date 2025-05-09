import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/admin" className="nav-link">Admin</NavLink>
      <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
      
    </nav>
  );
};

export default Navbar;
