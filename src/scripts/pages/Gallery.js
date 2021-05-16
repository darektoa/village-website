import React from 'react';
import {NavLink, useParams } from 'react-router-dom';
import '../../styles/pages/Gallery.css';
import galleryData from '../data/gallery-data.js';


const Gallery = () => {
  const params          = useParams();
  const { idCategory }  = params;
  const dataFiltered    = galleryData.filter((item) => {
    if (idCategory) return item.category === idCategory;
    return true;
  });

  return(
    <section id="gallery-page" className="container">
      <h2>Imajinasi Adalah Sumber Kreativitas, Hargailah Walau Terkesan Aneh</h2>
      <div className="category-box">
        <NavLink className="category" to={`/gallery/`} exact>Semua</NavLink>
        <NavLink className="category" to={`/gallery/category-1`}>Category 1</NavLink>
        <NavLink className="category" to={`/gallery/category-2`}>Category 2</NavLink>
        <NavLink className="category" to={`/gallery/category-3`}>Category 3</NavLink>
        <NavLink className="category" to={`/gallery/category-4`}>Category 4</NavLink>
      </div>
      <div className="media-box">
        <MediaLoop data={dataFiltered} />
      </div>
    </section>
  );
};


/* LOOPING MEDIA ELEMENT */
const MediaLoop = (props) => {
  const { data } = props;

  return(
    <React.Fragment>
      {data.map((item) => Media(item))}
    </React.Fragment>
  )
};


/* MEDIA ELEMENT VALIDATION */
const Media = (props) => {
  const mimeType = props.mimeType.split('/')[0];
  const mediaElmnt = mimeType === 'image' ? ImageMedia(props) : VideoMedia(props);

  return mediaElmnt;
};


/* IMAGE ELEMENT */
const ImageMedia = (props) => {
  const { id, src } = props

  return(
    <div className="media" key={id}>
      <img src={src} alt="" />
    </div>
  );
};


/* VIDEO ELEMENT */
const VideoMedia = (props) => {
  const { id, thumbnail } = props;

  return(
    <div className="media" key={id}>
      <img src={thumbnail} alt="" />
      <div className="darken-media"></div>
      <i className="icon_play-fff"></i>
    </div>
  );
};

export default Gallery;