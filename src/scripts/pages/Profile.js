import '../../styles/pages/Profile.css';
import ProfileImage from '../../assets/images/profile/profile-img.png';

const Profile = () => {
  return (
    <div className="prflMsContainer">
      <div className="container">
          <img src={ProfileImage} alt="kampoeng cireundeu"/>

          <div className="prfl-header">
            <h1>Kampoeng Cireundeu</h1>
            <div className="prfl-rectangle"></div>
          </div>

          <p>Kami sampaikan selamat datang di situs web Kampoeng Cireundeu. Kami senang Anda sudah berkunjung, semoga melalui situs web ini kami dapat memberikan segala informasi yang aktual dan terperbarui langsung dari Kampoeng kami. Situs web ini merupakan salah satu wujud dari komitmen Kepala Kampoeng Cireundeu, pada pentingnya komunikasi dan transparansi publik.

          Situs web ini adalah bagian dari Pelayanan Administrasi Terpadu Kampoeng Cireundeu yang mulai diimplementasikan berbasis Teknologi.</p>

          <p>Desa tradisional Cireundeu adalah sebuah desa yang terletak di lereng dari Gunung Kunci , Gunung Cimenteng dan Gunung Gajahlangu . Secara administratif terletak di Kalurahan Leuwigajah , Kecamatan Cimahi Selatan , Kota Cimahi . Tidak jauh dari Tempat Pembuangan Akhir (TPA) Leuwigajah .

          Istilah Cireundeu terdiri dari dua kata, yaitu ci ( air ) dan reundeu . Reundeu adalah nama daun yang ditemukan di hutan dan bisa dimakan seperti daununtukmu . Kata orang tua saya, daunnya selalu digunakan untuk menyembuhkan penyakit tangan. Saat ini daunnya sudah sulit ditemukan.

          Fisik, Cireundeu tidak jauh berbeda dengan desa biasa. Apalagi dalam hal membangun rumah penduduknya. Diantaranya penggunaan atap kastil , berdinding bata, jendela dari kaca , dan hampir semua penduduknya telah memiliki perangkat elektronik seperti televisi , radio , termasuk hp . Namun karena keteguhannya dalam memakai tradisi leluhur, desa ini dibuat secara de factomenjadi desa adat. Sebagian besar masyarakat Cireundeu masih menganut ajaran agama Jawa yang dibawakan oleh Pangeran Madrais dari Cigugur , Kuningan .

          Masyarakat Desa Adat Cireundeu memiliki kepercayaan dari nenek moyang bahwa mereka tidak boleh makan uang jajan . Ada kepercayaan bahwa mereka yang melanggar aturan akan langsung mati. Jadi jika masyarakat benar-benar ingin memakai kepercayaan dari nenek moyang itu harus benar-benar berusaha memakainya, tong dan setengahnya. 
          </p>
      </div>
    </div>
  );
}

export default Profile;