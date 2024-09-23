import { Link } from "react-router-dom";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="container error-page">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="back-link">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;