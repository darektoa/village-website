import '../../styles/pages/Home.css';
import { createRef, forwardRef, useLayoutEffect } from 'react';
import SliderInititator from '../utils/slider-initiator.js';
import heroData from '../data/hero-data.js';
import illustration_1 from '../../assets/images/home/illustration_1.png';
import illustration_2 from '../../assets/images/home/illustration_2.png';

const Home = (props) => {
  const sliderBox = createRef();

  useLayoutEffect(() => {
    SliderInititator.init({
      items: sliderBox.current.childNodes,
      interval: 3000,
    });
  });


  return (
    <section id="home-page">
      <div className="hero-box">
        <SliderBox data={heroData} ref={sliderBox}></SliderBox>
        <div className="text-box container">
          <h2>Kampoeng Cireundeu</h2>
          <p>Kita bertekad, tahun 2021 menjadi tahun untuk meletakkan dasar-dasar yang kokoh untuk membangun ekonomi desa, sekaligus menjadi tonggak penting untuk memulai mewujudkan Kampoeng Cireundeu sebagai kampoeng wisata. Untuk itu, semua pihak harus semakin optimis, siap bekerja lebih keras, bersama-sama, bergotong royong dan berkolaborasi, karena inilah yang menjadi modal utama kita</p>
          <span>
            <i className="icon_location-ff0505"></i>
            Leuwigajah, Cimahi Selatan, Cimahi, Jawa Barat 40532
          </span>
        </div>
      </div>

      <div className="content-box container">
        <i className="icon_leaf-grey"></i>

        <div className="text-box">
          <h2>Daya Tarik Kampung Adat Cireundeu</h2>
          <p>Kampung Adat Cireundeu ini berada di kawasan Leuwigajah, Kota Cimahi Jawa Barat, dan beroperasi setiap hari selama 24 jam. Destinasi ini merupakan salah satu kampung wisata di Jawa Barat yang menghadirkan seni serta budaya lokal khas tradisional. Daya tarik utamanya yaitu adanya Hutan Larangan dan Hutan Tutupan, yang menjadi kawasan hutan lindung di Bandung.Selain hutan, Kampung Cireundeu juga dikelilingi oleh pegunungan yang indah, dan membuat kawasan kampung tersebut menjadi sangat asri dan alami. Menghirup udara di Puncak Salam, salah satu gunung yang ada di sana, rasanya akan puas sekali. Lantunan suara dari karinding yang seringkali dimainkan warga setempat akan menambah syahdu suasana saat berada di puncak gunung.</p>
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
  return (
    <div className="slider-box" ref={ref}>
      {props.data.map((item, index) => (
        <img src={item} key={index} alt="Village Illustration" height="500"/>
      ))}
    </div>
  );
});

export default Home;