import React, { useLayoutEffect, useState } from 'react';
import {Link, useLocation } from 'react-router-dom';
import '../../styles/pages/Gallery.css';
import defaultImg from '../../assets/images/default_img.svg';
import GalleryData from '../data/GalleryData.js';


const Gallery = (props) => {
  const [data, setData] = useState([]); 

  useLayoutEffect(() => {
    GalleryData.getAll()
    .then(data => {
      console.log(data);
      setData(data);
    });
  });

  return(
    <section id="gallery-page" className="container">
      <h2>Imajinasi Adalah Sumber Kreativitas, Hargailah Walau Terkesan Aneh</h2>
      <div className="album-box">
        <AlbumLoop data={data} />
      </div>
    </section>
  );
};


/* LOOPING ALBUM ELEMENT */
const AlbumLoop = (props) => {
  const { data } = props;

  return(
    <React.Fragment>
      {data.map((item, index) => <Album data={item} key={index} /> )}
    </React.Fragment>
  )
};


/* MEDIA ELEMENT */
const Album = (props) => {
  const { pathname } = useLocation();
  const { id, thumbnail, name } = props.data;

  return(
    <Link className="album" to={`${pathname}/${id}`}>
      <img src={thumbnail || defaultImg} alt="" />
      <h3>{name || 'Untitled'}</h3>
    </Link>
  );
};

export default Gallery;