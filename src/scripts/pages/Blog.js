import '../../styles/pages/Blog.css';
import { Link } from 'react-router-dom';

const Blog = (props) => {
  return (
    <section id="blog-section">
      <h1>Ini Blog</h1>
      <Link to="/">Back To Home</Link>
    </section>
  );
};

export default Blog;