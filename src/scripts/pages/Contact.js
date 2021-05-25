import '../../styles/pages/Contact.css';
import { useLayoutEffect, useState } from 'react';
import StringHelper from '../utils/string-helper.js';
import GeneralData from '../data/GeneralData.js';

const Contact = (props) => {
  const [data, setData] = useState({
    email       : 'cireundeu@gmail.com',
    no_hp       : '021798365',
    start_day   : 'Monday',
    end_day     : 'Friday',
    start_time  : '',
    end_time    : '',
  });

  useLayoutEffect(() => {
    GeneralData.getAll()
    .then(data => {
      data.start_day = StringHelper.upperCaseFirst(data.start_day)
      data.end_day = StringHelper.upperCaseFirst(data.end_day)
      setData(data)
    });
  });

  return(
    <section id="contact-page" className="container">
      <i className="icon_leaf-grey"></i>

      <div className="text-box">
        <h2>Kontak</h2>
        <p className="address">Leuwigajah, Cimahi Selatan, Cimahi, Jawa Barat 40532</p>
        <p className="contact">Telepon : {data.no_hp},  {data.email}</p>
        <h3>Hari Kerja: {data.start_day} – {data.end_day}</h3>
        <p>Waktu Kerja: 07.00 – 16.00 WIT</p>
      </div>
    </section>
  );
};

export default Contact;