import { useNavigate } from "react-router-dom";
import "../styles/BookCard.css"; 

const BookCard = ({ id, title, image }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <div className="book-info">
        <h3>{title}</h3>
        <button onClick={handleViewDetails}>View Details</button>
      </div>
    </div>
  );
};

export default BookCard;