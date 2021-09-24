import React, { useEffect, useState } from 'react';
import '../../../styles/pages/gallery/Gallery.css';
import Album from '../../components/gallery/Album.js'
import GalleryData from '../../data/GalleryData.js';


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

export default Gallery;