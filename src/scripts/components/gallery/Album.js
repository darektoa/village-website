import React, { createRef, useEffect, useState } from 'react';
import {Link, useLocation } from 'react-router-dom';
import '../../../styles/components/gallery/Album.css';
import defaultImg from '../../../assets/images/transparent.svg';
import errorImg from '../../../assets/images/error_img.svg';
import StringHelper from '../../utils/string-helper.js';
import ElementHelper from '../../utils/element-helper';


const Album = (props) => {
  const { pathname }                = useLocation();
  const { data }                    = props;
  const { id, thumbnail, name }     = data;
  const [imgLoading, setImgLoading] = useState(true);
  const imgRef                      = createRef();
  const albumPath                   = id ? `${pathname}/${id}` : '#';
  const secureThumbnail             = thumbnail?.replace('http://', 'https://');
  const imgLoadingClassName         = imgLoading ? 'box-loading' : '';
  const albumClassName              = StringHelper.join(' ', 'album', imgLoadingClassName);

  useEffect(() => {
    const imgElmnt = imgRef.current;

    const successHandler = () => {
      if(thumbnail) setImgLoading(false);
    };

    const errorHandler = () => {
      setImgLoading(false);
      imgElmnt.src = errorImg;
    };

    ElementHelper.load(imgElmnt)
    .then(successHandler)
    .catch(errorHandler);
  }, [imgRef, thumbnail]);

  return(
    <Link className={albumClassName} to={albumPath}>
      <img ref={imgRef} src={ secureThumbnail || defaultImg } alt=" " />
      <h3>{name || 'Untitled'}</h3>
    </Link>
  );
};


export default Album;