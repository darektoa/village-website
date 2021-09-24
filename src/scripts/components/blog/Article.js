import { useState, useEffect, createRef } from "react";
import { Link } from 'react-router-dom';
import '../../../styles/components/blog/Article.css'
import Tags from './Tags.js'
import StringHelper from '../../utils/string-helper.js';
import ElementHelper from '../../utils/element-helper.js';
import defaultImg from '../../../assets/images/transparent.svg';
import errorImg from '../../../assets/images/error_img.svg';


/* ARTICLE ELEMENT */
const Article = (props) => {
  const { data, listedTags, className='' }  = props;
  const { id, thumbnail, tags=[], title }   = data;
  const list                                = listedTags === true ? true : false;
  const imgRef                              = createRef();
  const tagData                             = tags.map(item => StringHelper.tag(item.slug));
  const [imgLoading, setImgLoading]         = useState(true);
  const imgLoadingClassName                 = imgLoading ? 'box-loading' : '';
  const imgBoxClassName                     = StringHelper.join(' ', 'img-box', imgLoadingClassName);
  
  useEffect(() => {
    const imgElmnt = imgRef.current;
    const successHandler = () => {
      if(thumbnail) setImgLoading(false);
    };

    const errorHandler = (err) => {
      if(thumbnail) setImgLoading(false);
      imgElmnt.src = errorImg;
    };

    ElementHelper.load(imgElmnt)
    .then(successHandler)
    .catch(errorHandler)
  }, [imgRef, thumbnail]);

  return(
    <Link className="article" to={`/blog/${id}`}>
      <div className={imgBoxClassName}>
        <img src={thumbnail || defaultImg} alt=" " ref={imgRef} />
      </div>
      <div className="text-box">
        <Tags data={tagData} list={list} className={className}/>
        <h4 className={className}>{title}</h4>
      </div>
    </Link>
  );
};

export default Article;