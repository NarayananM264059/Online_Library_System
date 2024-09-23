import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import ErrorPage from "./pages/ErrorPage";




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
