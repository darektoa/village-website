import React, { useEffect, useState } from 'react';
import {Link, useLocation } from 'react-router-dom';
import '../../styles/pages/Gallery.css';
import defaultImg from '../../assets/images/transparent.svg';
import GalleryData from '../data/GalleryData.js';
import StringHelper from '../utils/string-helper.js';


const Gallery = (props) => {
  const [data, setData] = useState(['', '', '', '']); 
  const [isLoading, setIsLoading] = useState(true);
  const loadingClassName = isLoading ? 'box-loading' : '';

  useEffect(() => {
    GalleryData.getAll()
    .then(data => {
      setData(data);
      setIsLoading(false);
    });
  }, []);

  return(
    <section id="gallery-page" className="container">
      <h2>Galleries</h2>
      <div className="album-box">
        {data.map((item, index) => <Album data={item} key={index} className={loadingClassName} /> )}
      </div>  
    </section>
  );
};


/* MEDIA ELEMENT */
const Album = (props) => {
  const { pathname } = useLocation();
  const { data, className='' } = props;
  const { id, thumbnail, name } = data;
  const albumPath = id ? `${pathname}/${id}` : '#';
  const secureThumbnail = thumbnail?.replace('http://', 'https://');
  const albumClassName = StringHelper.join(' ', 'album', className);

  return(
    <Link className={albumClassName} to={albumPath}>
      <img src={ secureThumbnail || defaultImg } alt=" " />
      <h3>{name || 'Untitled'}</h3>
    </Link>
  );
};

export default Gallery;