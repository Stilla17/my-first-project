
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const Foiz = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [250, 100, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],

      }
    ]
  };

  const options = {
 
  };

  return (

    <>
    <div className='flex justify-center'>
    <div style={{ width: '700px', height: '700px',   }}>
      <Doughnut data={data} options={options} />
      <h1 data={data}></h1>
    </div>
    </div>
    </>
  );
};

export default Foiz;
