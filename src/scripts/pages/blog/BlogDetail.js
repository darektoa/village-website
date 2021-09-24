import { createRef, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../../../styles/pages/blog/BlogDetail.css';
import Tags from '../../components/blog/Tags.js';
import BlogData from '../../data/BlogData';
import StringHelper from '../../utils/string-helper';
import ElementHelper from '../../utils/element-helper';
import defaultImg from '../../../assets/images/transparent.svg';
import errorImg from '../../../assets/images/error_img.svg';

const BlogDetail = () => {
  const { idBlog } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const loadingClassName = isLoading ? 'box-loading' : '';

  useEffect(() => {
    window.scrollTo(0, 0);
    BlogData.getById(idBlog)
    .then(data => {
      setData(data);
      setIsLoading(false);
    })
  }, [idBlog]);

  return(
    <section id="blog-detail-page">
      <div className="container">
        <TitleBox data={data} className={loadingClassName} />
        <ImgBox data={data} className={loadingClassName} />
        <TextBox data={data} className={loadingClassName} />
      </div>
    </section>
  );
};


/* TITLE BOX ELEMENT */
const TitleBox = (props) => {
  const { data, className } = props;
  const { tags=[], created_at } = data;
  const history = useHistory();
  const tagData = tags.map(item => StringHelper.tag(item.slug));
  const publishedClassName = StringHelper.join(' ', 'published', className);
  const publishedDate = new Date(created_at).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handlerBack = (event) => {
    history.goBack();
    event.preventDefault();
  };

  return(
    <div className="title-box">
      <a href=" " className="back" onClick={handlerBack}> ← </a>
      <span className={publishedClassName}>Published at {publishedDate}</span>
      <h2 className={className}>{data.title}</h2>
      <Tags data={tagData} className={className}/>
    </div>
  );
};


/* IMG BOX ELEMENT */
const ImgBox = (props) => {
  const { data }                    = props;
  const imgRef                      = createRef();
  const [imgLoading, setImgLoading] = useState(true);
  const imgLoadingClassName         = imgLoading ? 'box-loading': '';
  const imgBoxClassName             = StringHelper.join(' ', 'img-box', imgLoadingClassName);


  useEffect(() => {
    const imgElmnt = imgRef.current;

    const successHandler = () => {
      if(data.thumbnail) setImgLoading(false);
    };
  
    const errorHandler = (err) => {
      setImgLoading(false);
      imgElmnt.src = errorImg;
    };

    ElementHelper.load(imgElmnt)
    .then(successHandler)
    .catch(errorHandler);
  }, [imgRef, data]);

  return(
    <div className={imgBoxClassName}>
      <img ref={imgRef} src={data.thumbnail || defaultImg} alt=" " />
    </div>
  );
};


/* TEXT BOX ELEMENT */
const TextBox = (props) => {
  const { data, className='' } = props;
  const textBoxClassName = StringHelper.join(' ', 'text-box', className);

  return(
    <div className={textBoxClassName} 
      dangerouslySetInnerHTML={{__html: data.description}}>
    </div>
  );
};

export default BlogDetail;