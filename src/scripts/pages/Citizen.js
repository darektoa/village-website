import '../../styles/pages/Citizen.css';
import React, { useEffect, useState } from 'react';
import CitizenData from '../data/CitizenData.js';

const Citizen = () => {
  const [data, setData] = useState(['', '', '']);

  useEffect(() => {
    CitizenData.getInfoCard()
    .then(res => {
      setData(res)
    });
  }, []);
  
  return(
    <section id="citizen-page" className="container">
      <ul className="info-box">
        {data.map((item, index)=> <InfoCard data={item} key={index}/>)}
      </ul>
    </section>
  );
}


const InfoCard = (props) => {
  const { total, heading, iconClassName} = props.data;

  return(
    <li className="info-card">
      <div className="text-box">
        <span>{total}</span>
        <h2>{heading}</h2>
      </div>
      <i className={iconClassName}></i>
    </li>
  );
};

export default Citizen;