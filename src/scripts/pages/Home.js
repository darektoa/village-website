import { useEffect, useState } from 'react';
import '../../styles/pages/Home.css';
import StringHelper from '../utils/string-helper.js'
import thumbnail_1 from '../../assets/images/home/thumbnail_1.jpeg';
import hero_video from '../../assets/videos/home/hero_video.mp4';
import illustration_1 from '../../assets/images/home/illustration_1.jpeg';
import illustration_2 from '../../assets/images/home/illustration_2.jpeg';
import GeneralData from '../data/GeneralData.js';
import CitizenData from '../data/CitizenData';

const Home = (props) => {
  const [generalData, setGeneralData] = useState({name: 'Village Website'});
  const [citizenData, setCitizenData] = useState(['', '', '']);
  const [heroMuted, setHeroMuted]     = useState(true);
  const heroVideoMuted                = heroMuted ? 'muted': '';
  const iconVolumeClassName           = StringHelper.join(' ', 'icon-volume', heroVideoMuted);

  useEffect(() => {
    GeneralData.getAll()
    .then(data => setGeneralData(data));

    CitizenData.getStatistics()
    .then(data => setCitizenData(data));
  }, []);

  return (
    <section id="home-page">
      <div className="hero-box container">
        <div className="video-box" onClick={()=> setHeroMuted(!heroVideoMuted)}>
          <video
            src={hero_video}
            poster={thumbnail_1}
            muted={heroMuted}
            autoPlay
            preload="metadata"
            loop
          ></video>
          <div className={iconVolumeClassName}>
            <i className="icon_custom"></i>
          </div>
        </div>
      </div>

      <div className="citizen-box container">
        <div className="text-box">
          <h2>Penduduk</h2>
          <p>Kampung Cirendeu dihuni oleh 367 kepala keluarga atau kurang lebih 1.200 jiwa. Terdiri dari 550 orang perempuan dan 650 orang laki-laki. Kondisi sosial masyarakat di kampung Cireundeu memiliki keadaan sosial yang terbuka dengan masyarakat luar. Namun kebanyakan masyarakat kampung Cireundeu tidak suka merantau atau berpisah dengan orang-orang sekerabat.</p>
        </div>

        <CitizenStatistics data={citizenData} />
      </div>

      <div className="content-box container">
        <i className="icon_leaf-grey"></i>

        <div className="text-box">
          <h2>Daya Tarik Adat {generalData.name}</h2>
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


const CitizenStatistics = (props) => {
  const { data } = props;

  return (
    <div className="citizen-statistics">
      {data.map((item, index) => (
        <CitizenInfo data={{...item, unit: 'Orang'}} key={index} />
      ))}
    </div>
  );
};


const CitizenInfo = (props) => {
  const { heading, total, unit, iconClassName } = props.data;

  return (
    <div className="data">
      <div className="icon-box">
        <i className={iconClassName}></i>
      </div>

      <div className="text-box">
        <h3>{heading}</h3>
        <span className="total">{total}</span>
        <span className="unit">{unit}</span>
      </div>
    </div>
  );
};

export default Home;