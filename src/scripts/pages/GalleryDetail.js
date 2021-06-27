import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/pages/GalleryDetail.css';
import GalleryData from '../data/GalleryData.js';


const Gallery = (props) => {  
  const { idAlbum }     = useParams();
  const [data, setData] = useState({
    name: 'Title',
    galleries: ['', '', '', ''],
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    GalleryData.getAlbum(idAlbum)
    .then(data => {
      setData(data)
    });
  }, [idAlbum]);

  return(
    <section id="gallery-detail-page" className="container">
      <h2>{data.name}</h2>
      <div className="media-box">
        <MediaLoop data={data.galleries} />
      </div>
    </section>
  );
};


/* LOOPING MEDIA ELEMENT */
const MediaLoop = (props) => {
  const { data } = props;

  return(
    <React.Fragment>
      {data.map((item, index) => <ImageMedia data={item} key={index}/>)}
    </React.Fragment>
  )
};


/* MEDIA ELEMENT VALIDATION */
// const Media = (props) => {
//   const mimeType = props.mimeType.split('/')[0];
//   const mediaElmnt = mimeType === 'image' ? ImageMedia(props) : VideoMedia(props);

//   return mediaElmnt;
// };


/* IMAGE ELEMENT */
const ImageMedia = (props) => {
  const { image } = props.data;
  const secureImage   = image?.replace('http://', 'https://');

  return(
    <div className="media">
      <img src={secureImage} alt=" " />
    </div>
  );
};


/* VIDEO ELEMENT */
// const VideoMedia = (props) => {
//   const { id, thumbnail } = props;

//   return(
//     <div className="media" key={id}>
//       <img src={thumbnail} alt="" />
//       <div className="darken-media"></div>
//       <i className="icon_play-fff"></i>
//     </div>
//   );
// };

export default Gallery;