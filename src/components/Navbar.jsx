import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Book Haven
      </Link>
      <div className="nav-links"> {/* Added className here */}
        <Link to="/">Home</Link>
        <Link to="/books">Browse</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;