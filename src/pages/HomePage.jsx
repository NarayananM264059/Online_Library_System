import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { books } from "../utils/bookData";
import "../styles/HomePage.css"; 

const HomePage = () => {
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning,";
    if (hour < 18) return "Good Afternoon,";
    return "Good Evening,";
  };

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Romance",
    "Mystery",
    "Self-help",
    "True-Crime",
  ];

  const popularBooks = books.filter((book) => book.rating >= 4).slice(0, 8);

  return (
    <div className="container">
      <h1>{greeting()} Welcome to Book Haven!</h1>
      <section>
        <h2>Explore Categories</h2>
        <div className="categories">
          {categories.map((category, index) => (
            <Link to={`/books/${category}`} key={index} className="category-link">
              {category}
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2>Popular Books</h2>
        <div className="book-list">
          {popularBooks.length > 0 ? (
            popularBooks.map((book) => (
              <BookCard key={book.id} id={book.id} title={book.title} image={book.image} />
            ))
          ) : (
            <p>No popular books available at the moment.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
