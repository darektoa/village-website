import { useEffect, useState, createRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/Home.css';
import ElementHelper from '../utils/element-helper';
import StringHelper from '../utils/string-helper.js'
import SliderInititator from '../utils/slider-initiator.js';
import defaultImg from '../../assets/images/transparent.svg';
import errorImg from '../../assets/images/error_img.svg';
import GeneralData from '../data/GeneralData.js';
import CitizenData from '../data/CitizenData';
import ArticleLoop from '../components/blog/ArticleLoop.js';
import BlogData from '../data/BlogData';

const Home = (props) => {
  const [slideImagesRef, setSlideImagesRef] = useState([]);
  const [citizenData, setCitizenData]       = useState(['', '', '']);
  const [blogData, setBlogData]             = useState(['', '', '', '', '', '']);
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
    .then(data => {
      console.log(data)
      setCitizenData(data)
    });

    BlogData.getByPage(1)
    .then(data => {
      setBlogData(data.slice(0, 12));
    });
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
      <div className="container">
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
      </div>

      <div className="citizen-box container">
        <div className="text-box">
          <h2>Penduduk</h2>
          <p>Kampoeng Cirendeu dihuni oleh kurang lebih {citizenData[0].total} penduduk. Terdiri dari {citizenData[1].total} orang laki-laki dan {citizenData[2].total} orang perempuan. Kondisi sosial masyarakat di kampung Cireundeu memiliki keadaan sosial yang terbuka dengan masyarakat luar. Namun kebanyakan masyarakat kampung Cireundeu tidak suka merantau atau berpisah dengan orang-orang sekerabat.</p>
        </div>

        <CitizenStatistics data={citizenData} />
      </div>

      <div className="blog-box container">
        <h2>Berita</h2>
        <div className="articles">
          <ArticleLoop data={blogData}/>
        </div>
        
        <Link to="/blog" className="see-all"> Lihat Semua → </Link>

        <i className="icon_leaf-grey"></i>
        <i className="icon_paddy-grey"></i>
        <i className="icon_flower-grey"></i>
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
        <SliderBoxImg data={{...item, index}} ref={ref} key={index} />
      ))}
    </div>
  );
});


const SliderBoxImg = forwardRef((props, ref) => {
  const { imageUrl: image, index }  = props.data;
  const [imgLoading, setImgLoading] = useState(true);
  const imgRef                      = createRef();
  const secureImg                   = image?.replace('http://', 'https://');
  const imgLoadingClassName         = imgLoading ? 'box-loading' : '';
  const imgBoxClassName             = StringHelper.join(' ', 'img-box', imgLoadingClassName);

  useEffect(() => {
    const imgElmnt = imgRef.current;
    
    const successHandler = () => {
      if(image) setImgLoading(false);
    };

    const errorHandler = () => {
      setImgLoading(false);
      imgElmnt.src = errorImg;
    };

    ElementHelper.load(imgElmnt)
    .then(successHandler)
    .catch(errorHandler);
  }, [image, imgRef]);


  return (
    <div ref={ref[index]} className={imgBoxClassName}>
      <img
        ref={imgRef}
        src={secureImg || defaultImg}
        alt="Village Illustration"
        height="500"
      />
    </div>
  );
});


const CitizenStatistics = (props) => {
  const { data } = props;

  return (
    <div className="citizen-statistics">
      {data.map((item, key) => (
        <CardStatistic data={item} key={key}/>
      ))}
    </div>
  );
};


const CardStatistic = (props) => {
  console.log(props);
  const { 
    heading, iconClassName, total,
    babies=[], childrens=[], teenagers=[], 
    adults=[], seniorAdults=[]
  } = props.data;

  return (
    <div className="statistic-card">
      <div className="badge">
        <h3>{total}</h3>
        <span>Orang</span>
      </div>

      <div className="icon-box">
        <i className={iconClassName}></i>
      </div>

      <div className="text-box">
        <h3>{heading}</h3>
        <ul>
          <li>✓ Bayi {babies.length}</li>
          <li>✓ Anak-anak {childrens.length}</li>
          <li>✓ Remaja {teenagers.length}</li>
          <li>✓ Dewasa {adults.length}</li>
          <li>✓ Lansia {seniorAdults.length}</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;