import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import "../styles/BookDetails.css"; 

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="container">
        <h2>Book Not Found</h2>
        <Link to="/books" className="back-link">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="container book-details">
      <h1>{book.title}</h1>
      <div className="details-content">
        <img src={book.image} alt={book.title} />
        <div className="details-info">
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Release Year:</strong> {book.releaseYear}</p>
          <p>
            <strong>Rating:</strong> <FaStar color="#f1c40f" /> {book.rating}
          </p>
          <p><strong>Pages:</strong> {book.pages}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <Link to="/books" className="back-link">
            Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;