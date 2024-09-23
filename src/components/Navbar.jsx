import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <Link to="/" className="logo">
        Book Haven
      </Link>
      <button className="toggle-button" onClick={toggleNavbar}>
        ☰
      </button>
      <div className="nav-links">
        <Link to="/" onClick={toggleNavbar}>Home</Link>
        <Link to="/books" onClick={toggleNavbar}>Browse</Link>
        <Link to="/add-book" onClick={toggleNavbar}>Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;