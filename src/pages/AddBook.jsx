import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addBook } from "../redux/slices/booksSlice";
import { useNavigate } from "react-router-dom";
import "../styles/AddBook.css"; 

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  image: Yup.string().url("Invalid URL").required("Image URL is required"),
  description: Yup.string().required("Description is required"),
  releaseYear: Yup.string().required("Release Year is required"),
  rating: Yup.number().min(0).max(5).required("Rating is required"),
  pages: Yup.number().required("Number of Pages is required"),
  category: Yup.string()
    .oneOf([
      "Fiction",
      "Non-Fiction",
      "Sci-Fi",
      "Romance",
      "Mystery",
      "Self-help",
      "True-Crime",
    ])
    .required("Category is required"),
});

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(addBook(values));
    navigate("/books");
  };

  return (
    <div className="add-book-container">
      <div className="overlay"></div>
      <div className="form-container">
        <h1 className="title">Add a New Book</h1>
        <Formik
          initialValues={{
            title: "",
            author: "",
            image: "",
            description: "",
            releaseYear: "",
            rating: "",
            pages: "",
            category: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="form-group">
                <label htmlFor="title" className="label">Title:</label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="input"
                />
                <ErrorMessage name="title" component="div" className="error" />
              </div>

              {/* Repeat for other fields (author, image, description, etc.) */}
              <div className="form-group">
                <label htmlFor="author" className="label">Author:</label>
                <Field
                  type="text"
                  id="author"
                  name="author"
                  className="input"
                />
                <ErrorMessage name="author" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="image" className="label">Image URL:</label>
                <Field
                  type="text"
                  id="image"
                  name="image"
                  className="input"
                />
                <ErrorMessage name="image" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="description" className="label">Description:</label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  className="input"
                />
                <ErrorMessage name="description" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="releaseYear" className="label">Release Year:</label>
                <Field
                  type="text"
                  id="releaseYear"
                  name="releaseYear"
                  className="input"
                />
                <ErrorMessage name="releaseYear" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="rating" className="label">Rating:</label>
                <Field
                  type="number"
                  id="rating"
                  name="rating"
                  className="input"
                />
                <ErrorMessage name="rating" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="pages" className="label">Page Numbers:</label>
                <Field
                  type="number"
                  id="pages"
                  name="pages"
                  className="input"
                />
                <ErrorMessage name="pages" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="category" className="label">Category:</label>
                <Field
                  as="select"
                  id="category"
                  name="category"
                  className="input"
                >
                  <option value="">Select a category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Romance">Romance</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Self-help">Self-help</option>
                  <option value="True-Crime">True-Crime</option>
                </Field>
                <ErrorMessage name="category" component="div" className="error" />
              </div>

              <button type="submit" className="submit-button">
                Add Book
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddBook;
