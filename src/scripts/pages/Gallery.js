import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import '../../styles/pages/Gallery.css';

const Gallery = () => {
  const { pathname } = useLocation();
  const params = useParams();
  console.log(pathname, params);

  return(
    <section id="gallery-page" className="container">
      <h2>Imajinasi Adalah Sumber Kreativitas, Hargailah Walau Terkesan Aneh</h2>
      <div className="category-box">
        <NavLink className="category" to={`/gallery?category=1`}>Category 1</NavLink>
        <NavLink className="category" to={`/gallery?category=2`}>Category 2</NavLink>
        <NavLink className="category" to={`/gallery?category=3`}>Category 3</NavLink>
        <NavLink className="category" to={`/gallery?category=4`}>Category 4</NavLink>
        <ParamLink>Cek</ParamLink>
      </div>
    </section>
  );
};


const ParamLink = (props) => {
  const {to , className, children} = props;
  const param = useParams();
  console.log(param);
  return(
    <Link
      to={to}
      className={className}
    > {children} </Link>
  );
};

export default Gallery;