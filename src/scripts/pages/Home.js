import '../../styles/pages/Home.css';
import { useLayoutEffect, useState } from 'react';
import StringHelper from '../utils/string-helper.js'
import thumbnail_1 from '../../assets/images/home/thumbnail_1.jpeg';
import hero_video from '../../assets/videos/home/hero_video.mp4';
import illustration_1 from '../../assets/images/home/illustration_1.jpeg';
import illustration_2 from '../../assets/images/home/illustration_2.jpeg';
import GeneralData from '../data/GeneralData.js';

const Home = (props) => {
  const [data, setData]           = useState({name: 'Village Website'});
  const [heroMuted, setHeroMuted] = useState(true);
  const heroVideoMuted            = heroMuted ? 'muted': '';
  const iconVolumeClassName       = StringHelper.join(' ', 'icon-volume', heroVideoMuted);

  useLayoutEffect(() => {
    GeneralData.getAll()
    .then(data => setData(data));
  });

  return (
    <section id="home-page">
      <div className="hero-box container">
        <div className="video-box" onClick={()=> setHeroMuted(!heroVideoMuted)}>
          <video
            src={hero_video}
            poster={thumbnail_1}
            muted={heroMuted}
            autoPlay
            preload="true"
            loop
          ></video>
          <div className={iconVolumeClassName}>
            <i className="icon_custom"></i>
          </div>
        </div>
      </div>

      <div className="content-box container">
        <i className="icon_leaf-grey"></i>

        <div className="text-box">
          <h2>Daya Tarik Adat {data.name}</h2>
          <div className="paragraph-box">
            <p>Kampung Adat Cireundeu ini berada di kawasan Leuwigajah, Kota Cimahi Jawa Barat, dan beroperasi setiap hari selama 24 jam. Destinasi ini merupakan salah satu kampung wisata di Jawa Barat yang menghadirkan seni serta budaya lokal khas tradisional. Daya tarik utamanya yaitu adanya Hutan Larangan dan Hutan Tutupan, yang menjadi kawasan hutan lindung di Bandung.</p>
            <p>Selain hutan, Kampung Cireundeu juga dikelilingi oleh pegunungan yang indah, dan membuat kawasan kampung tersebut menjadi sangat asri dan alami. Menghirup udara di Puncak Salam, salah satu gunung yang ada di sana, rasanya akan puas sekali. Lantunan suara dari karinding yang seringkali dimainkan warga setempat akan menambah syahdu suasana saat berada di puncak gunung.</p>
          </div>
        </div>

        <div className="img-box">
          <img src={illustration_1} alt="Village Illustration" width="370" height="460" />
          <img src={illustration_2} alt="Village Illustration" width="370" height="460" />
          <i className="icon_paddy-grey"></i>
          <i className="icon_flower-grey"></i>
        </div>
      </div>
    </section>
  );
};

export default Home;