import React, { useEffect, useState, createRef, forwardRef, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import '../../styles/pages/Citizen.css';
import CitizenData from '../data/CitizenData.js';

const Citizen = () => {
  const [data, setData] = useState(['', '', '']);
  const citizenChartRef = createRef();

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

      <CitizenChart ref={citizenChartRef} data={data} />
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


const CitizenChart = forwardRef((props, ref) => {
  const { data }          = props;
  const citizenChart      = useRef({});
  const chart             = citizenChart.current;
  const citizenChartData  = data.map(item => item.total);
  
  useEffect(() => {
    if('destroy' in citizenChart.current) chart.destroy();
    citizenChart.current = citizenChartInit(citizenChartData, ref);
  }, [chart, citizenChartData, ref]);

  return(
    <canvas id="citizen-chart" ref={ref} ></canvas>
  )
});


const citizenChartInit = (data, ref) => {
  const context = ref.current.getContext('2d');
  Chart.register(...registerables);

  return new Chart(context, {
    type: "bar",
    data: {
      labels: ['Total', 'Male', 'Female'],
      datasets: [
        {
          data,
          label: "Citizen Info",
          fill: true,
          barPercentage: 0.3,
          borderWidth: 2,
          backgroundColor: [
            'rgba(202, 106, 82, 0.4)',
            'rgba(41, 128, 185, 0.4)',
            'rgba(255, 99, 132, 0.4)',
          ],
          borderColor: [
            'rgb(202, 106, 82)',
            'rgb(41, 128, 185)',
            'rgb(255, 99, 132)',
          ],
        }
      ],
    },
  });
};

export default Citizen;