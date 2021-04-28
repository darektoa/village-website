import '../../styles/pages/Profile.css';
import { useLayoutEffect , useRef, createRef, forwardRef } from 'react';
import slideData from '../data/slider-data.js';
import SliderInititator from '../utils/slider-initiator.js';

const Profile = () => {
  const slideImagesRef = useRef(slideData.map(() => createRef()));
  
  useLayoutEffect(() => {
    SliderInititator.init({
      items: slideImagesRef.current.map(item => item.current),
      interval: 5000,
    });
  });

  return (
    <section id="profile-page">
      <div className="hero-box">
        <SliderBox data={slideData} ref={slideImagesRef}></SliderBox>
        <div className="darken-slider"></div>
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
        <h2>
          Sejarah Kampung Cireundeu
          <i className="background-heading"></i>
        </h2>
        <div className="text-box">
          <p>Kami sampaikan selamat datang di situs web Kampoeng Cireundeu. Kami senang Anda sudah berkunjung, semoga melalui situs web ini kami dapat memberikan segala informasi yang aktual dan terperbarui langsung dari Kampoeng kami. Situs web ini merupakan salah satu wujud dari komitmen Kepala Kampoeng Cireundeu, pada pentingnya komunikasi dan transparansi publik.</p>
          <p>Situs web ini adalah bagian dari Pelayanan Administrasi Terpadu Kampoeng Cireundeu yang mulai diimplementasikan berbasis Teknologi.</p>
          <p>Desa tradisional Cireundeu adalah sebuah desa yang terletak di lereng dari Gunung Kunci , Gunung Cimenteng dan Gunung Gajahlangu . Secara administratif terletak di Kalurahan Leuwigajah , Kecamatan Cimahi Selatan , Kota Cimahi . Tidak jauh dari Tempat Pembuangan Akhir (TPA) Leuwigajah.</p>
          <p>Istilah Cireundeu terdiri dari dua kata, yaitu ci ( air ) dan reundeu . Reundeu adalah nama daun yang ditemukan di hutan dan bisa dimakan seperti daununtukmu . Kata orang tua saya, daunnya selalu digunakan untuk menyembuhkan penyakit tangan. Saat ini daunnya sudah sulit ditemukan.</p>
          <p>Fisik, Cireundeu tidak jauh berbeda dengan desa biasa. Apalagi dalam hal membangun rumah penduduknya. Diantaranya penggunaan atap kastil , berdinding bata, jendela dari kaca , dan hampir semua penduduknya telah memiliki perangkat elektronik seperti televisi , radio , termasuk hp . Namun karena keteguhannya dalam memakai tradisi leluhur, desa ini dibuat secara de factomenjadi desa adat. Sebagian besar masyarakat Cireundeu masih menganut ajaran agama Jawa yang dibawakan oleh Pangeran Madrais dari Cigugur , Kuningan .</p>
          <p>Masyarakat Desa Adat Cireundeu memiliki kepercayaan dari nenek moyang bahwa mereka tidak boleh makan uang jajan . Ada kepercayaan bahwa mereka yang melanggar aturan akan langsung mati. Jadi jika masyarakat benar-benar ingin memakai kepercayaan dari nenek moyang itu harus benar-benar berusaha memakainya, tong dan setengahnya.</p>
        </div>
      </div>
    </section>
  );
};

const SliderBox = forwardRef((props, ref) => {
  return (
    <div className="slider-box">
      {props.data.map((item, index) => (
        <img 
          src={item} 
          key={index}
          ref={ref.current[index]} 
          alt="Village Illustration"
          height="500"
        />
      ))}
    </div>
  );
});

export default Profile;