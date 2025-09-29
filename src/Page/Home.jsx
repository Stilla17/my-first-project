
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  const data = {
    labels: ['Users', 'Products', 'Images', 'Commit', 'Chartjs'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [90, 70, 60, 50, 95],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
          'rgb(500, 234, 24)'
        ],

      }
    ]
  };

  const options = {

  };

  return (

    <>
      <div className='flex justify-center ps-30'>
        <div style={{ width: '600px', height: '600px', }}>
          <Doughnut data={data} options={options} />
          <h1 data={data}></h1>
        </div>
      </div>
    </>
  );
};

export default Home;
