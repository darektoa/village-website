import '../../styles/pages/Citizen.css';

const Citizen = () => {
  return(
    <section id="citizen-page" className="container">
      <ul className="info-box">
        <li className="info-card">
          <div className="text-box">
            <span>700</span>
            <h2>Total Penduduk</h2>
          </div>
          <i className="icon_peoples-fff "></i>
        </li>
        <li className="info-card">
          <div className="text-box">
            <span>350</span>
            <h2>Penduduk Laki-laki</h2>
          </div>
          <i className="icon_male-fff"></i>
        </li>
        <li className="info-card">
          <div className="text-box">
            <span>350</span>
            <h2>Penduduk Perempuan</h2>
          </div>
          <i className="icon_female-fff"></i>
        </li>
      </ul>
    </section>
  );
}


// const InfoCard = (props) => {
//   const { total, heading, } = props;

//   return(
//     <li className="info-card">
//       <span>{total}</span>
//       <h2>{heading}</h2>
//     </li>
//   );
// };

export default Citizen;