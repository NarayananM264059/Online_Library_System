import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../styles/BrowseBooks.css";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Romance",
    "Mystery",
    "Self-help",
    "True-Crime",
  ];

  useEffect(() => {
    if (category && category !== "All") {
      setFilteredBooks(books.filter((book) => book.category === category));
    } else {
      setFilteredBooks(books);
    }
  }, [category, books]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const displayedBooks = filteredBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Browse Books</h1>
      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="categories">
        {categories.map((cat, index) => (
          <Link
            to={`/books/${cat}`}
            key={index}
            className={`category-link ${cat === (category || "All") ? "active" : ""}`}
          >
            {cat}
          </Link>
        ))}
      </div>
      <div className="book-list">
        {displayedBooks.length > 0 ? (
          displayedBooks.map((book) => (
            <BookCard key={book.id} id={book.id} title={book.title} image={book.image} />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;