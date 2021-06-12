import React, { useEffect, useState } from 'react';
import {Link, useLocation } from 'react-router-dom';
import '../../styles/pages/Gallery.css';
import defaultImg from '../../assets/images/default_img.svg';
import GalleryData from '../data/GalleryData.js';


const Gallery = (props) => {
  const [data, setData] = useState(['', '', '', '']); 

  useEffect(() => {
    GalleryData.getAll()
    .then(data => {
      setData(data);
    });
  }, []);

  return(
    <section id="gallery-page" className="container">
      <h2>Imajinasi Adalah Sumber Kreativitas, Hargailah Walau Terkesan Aneh</h2>
      <div className="album-box">
        {data.map((item, index) => <Album data={item} key={index} /> )}
      </div>
    </section>
  );
};


/* MEDIA ELEMENT */
const Album = (props) => {
  const { pathname } = useLocation();
  const { id, thumbnail, name } = props.data;
  const secureThumbnail = thumbnail?.replace('http://', 'https://');

  return(
    <Link className="album" to={`${pathname}/${id}`}>
      <img src={ secureThumbnail || defaultImg} alt="" />
      <h3>{name || 'Untitled'}</h3>
    </Link>
  );
};

export default Gallery;