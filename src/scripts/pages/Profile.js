import { useEffect, createRef, forwardRef, useState } from 'react';
import '../../styles/pages/Profile.css';
import defaultImg from '../../assets/images/default_img.svg';
import SliderInititator from '../utils/slider-initiator.js';
import StringHelper from '../utils/string-helper';
import GeneralData from '../data/GeneralData';

const Profile = () => {
  const [slideImagesRef, setSlideImagesRef] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadingClassName = isLoading ? 'box-loading' : '';
  const heroBoxClassName = StringHelper.join(' ', 'hero-box', loadingClassName);
  const [data, setData] = useState({
    name: 'Village Website',
    description: '',
    address: '',
    sliders: [],
  });

  useEffect(() => {
    setSlideImagesRef(data.sliders.map(() => createRef()));
  }, [data]);

  useEffect(() => {
    SliderInititator.init({
      items: slideImagesRef.map(item => item.current),
      interval: 3000,
    });
  }, [slideImagesRef]);

  useEffect(() => {
    GeneralData.getAll()
    .then(data => {
      setData(data);
      setIsLoading(false);
    });
  });

  return (
    <section id="profile-page">
      <div className={heroBoxClassName}>
        <SliderBox data={data.sliders} ref={slideImagesRef} />
        <div className="text-box container">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <span>
            <i className="icon_location-ff0505"></i>
            {data.address}
          </span>
        </div>
      </div>
      <div className="content-box container">
        <h2>Sejarah {data.name}</h2>
        <div className="paragraph-box">
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

export default Profile;