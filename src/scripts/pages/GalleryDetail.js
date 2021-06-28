import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/pages/GalleryDetail.css';
import defaultImg from '../../assets/images/transparent.svg';
import StringHelper from '../utils/string-helper';
import GalleryData from '../data/GalleryData.js';


const Gallery = (props) => {  
  const { idAlbum }     = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const loadingClassName = isLoading ? 'box-loading' : '';
  const [data, setData] = useState({
    name: 'Title',
    galleries: ['', '', '', ''],
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    GalleryData.getAlbum(idAlbum)
    .then(data => {
      setData(data)
      setIsLoading(false);
    });
  }, [idAlbum]);

  return(
    <section id="gallery-detail-page" className="container">
      <h2>{data.name}</h2>
      <div className="media-box">
        <MediaLoop data={data.galleries} className={loadingClassName} />
      </div>
    </section>
  );
};


/* LOOPING MEDIA ELEMENT */
const MediaLoop = (props) => {
  const { data, className } = props;

  return(
    <React.Fragment>
      {data.map((item, index) => <ImageMedia data={item} key={index} className={className} />)}
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
  const { data, className='' } = props;
  const { image } = data;
  const secureImage   = image?.replace('http://', 'https://');
  const mediaClassName = StringHelper.join(' ', 'media', className);

  return(
    <div className={mediaClassName}>
      <img src={secureImage || defaultImg } alt=" " />
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