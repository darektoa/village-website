import '../../styles/pages/Home.css';
import thumbnail_1 from '../../assets/images/home/thumbnail_1.jpeg';
import hero_video from '../../assets/videos/home/hero_video.mp4';
import illustration_1 from '../../assets/images/home/illustration_1.jpeg';
import illustration_2 from '../../assets/images/home/illustration_2.jpeg';

const Home = (props) => {
  return (
    <section id="home-page">
      <div className="hero-box container">
        <video 
          className="video-box" 
          src={hero_video}
          poster={thumbnail_1}
          autoPlay  
          loop
        ></video>
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

export default Home;