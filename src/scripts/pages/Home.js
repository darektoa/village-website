import { useEffect, useState, createRef, forwardRef } from 'react';
import '../../styles/pages/Home.css';
import StringHelper from '../utils/string-helper.js'
import SliderInititator from '../utils/slider-initiator.js';
import defaultImg from '../../assets/images/default_img.svg';
import illustration_1 from '../../assets/images/home/illustration_1.jpeg';
import illustration_2 from '../../assets/images/home/illustration_2.jpeg';
import GeneralData from '../data/GeneralData.js';
import CitizenData from '../data/CitizenData';

const Home = (props) => {
  const [slideImagesRef, setSlideImagesRef] = useState([]);
  const [citizenData, setCitizenData]       = useState(['', '', '']);
  const [isLoading, setIsLoading]           = useState(true);
  const loadingClassName                    = isLoading ? 'box-loading' : '';
  const heroBoxClassName                    = StringHelper.join(' ', 'hero-box', loadingClassName);
  const [generalData, setGeneralData]       = useState({
    name: 'Village Website',
    description: '',
    address: '',
    sliders: [],
  });

  useEffect(() => {
    GeneralData.getAll()
    .then(data => {
      setGeneralData(data);
      setIsLoading(false);
    });

    CitizenData.getStatistics()
    .then(data => setCitizenData(data));
  }, []);


  useEffect(() => {
    setSlideImagesRef(generalData.sliders.map(() => createRef()));
  }, [generalData]);

  
  useEffect(() => {
    SliderInititator.init({
      items: slideImagesRef.map(item => item.current),
      interval: 3000,
    });
  }, [slideImagesRef]);


  return (
    <section id="home-page">
      <div className={heroBoxClassName}>
        <SliderBox data={generalData.sliders} ref={slideImagesRef} />
        <div className="text-box container">
          <h2>{generalData.name}</h2>
          <p>{generalData.description}</p>
          <span>
            <i className="icon_location-ff0505"></i>
            {generalData.address}
          </span>
        </div>
      </div>

      <div className="citizen-box container">
        <div className="text-box">
          <h2>Penduduk</h2>
          <p>Kampoeng Cirendeu dihuni oleh kurang lebih {citizenData[0].total} penduduk. Terdiri dari {citizenData[1].total} orang laki-laki dan {citizenData[2].total} orang perempuan. Kondisi sosial masyarakat di kampung Cireundeu memiliki keadaan sosial yang terbuka dengan masyarakat luar. Namun kebanyakan masyarakat kampung Cireundeu tidak suka merantau atau berpisah dengan orang-orang sekerabat.</p>
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


const SliderBox = forwardRef((props, ref) => {
  const {data, className} = props;
  const sliderBoxClassName = StringHelper.join(' ', 'slider-box', className);

  return (
    <div className={sliderBoxClassName}>
      {data.map((item, index) => (
        <img 
          src={item.imageUrl || defaultImg} 
          key={index}
          ref={ref[index]} 
          alt="Village Illustration"
          height="500"
        />
      ))}
    </div>
  );
});


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