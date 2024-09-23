import { useDispatch } from "react-redux";
import { addBook } from "../redux/slices/booksSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/AddBook.css"; 


const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      image: "",
      description: "",
      releaseYear: "",
      rating: "",
      pages: "",
      category: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      author: Yup.string().required("Required"),
      image: Yup.string().url("Invalid URL").required("Required"),
      description: Yup.string().required("Required"),
      releaseYear: Yup.number().required("Required"),
      rating: Yup.number().min(0).max(5).required("Required"),
      pages: Yup.number().required("Required"),
      category: Yup.string()
        .oneOf(
          ["Fiction", "Non-Fiction", "Sci-Fi", "Romance", "Mystery", "Self-help", "True-Crime"],
          "Invalid Category"
        )
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(addBook(values));
      navigate("/books");
    },
  });

  return (
    <div className="add-book-container">
      <div className="add-book-overlay"></div>
      <form className="add-book-form" onSubmit={formik.handleSubmit}>
        <h2>Add a New Book</h2>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="error">{formik.errors.title}</div>
        ) : null}

        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        {formik.touched.author && formik.errors.author ? (
          <div className="error">{formik.errors.author}</div>
        ) : null}

        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="error">{formik.errors.image}</div>
        ) : null}

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="error">{formik.errors.description}</div>
        ) : null}

        <label htmlFor="releaseYear">Release Year</label>
        <input
          id="releaseYear"
          name="releaseYear"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.releaseYear}
        />
        {formik.touched.releaseYear && formik.errors.releaseYear ? (
          <div className="error">{formik.errors.releaseYear}</div>
        ) : null}

        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          name="rating"
          type="number"
          step="0.1"
          onChange={formik.handleChange}
          value={formik.values.rating}
        />
        {formik.touched.rating && formik.errors.rating ? (
          <div className="error">{formik.errors.rating}</div>
        ) : null}

        <label htmlFor="pages">Pages</label>
        <input
          id="pages"
          name="pages"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.pages}
        />
        {formik.touched.pages && formik.errors.pages ? (
          <div className="error">{formik.errors.pages}</div>
        ) : null}

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category}
        >
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Self-help">Self-help</option>
          <option value="True-Crime">True-Crime</option>
        </select>
        {formik.touched.category && formik.errors.category ? (
          <div className="error">{formik.errors.category}</div>
        ) : null}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;