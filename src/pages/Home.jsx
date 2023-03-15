import React from 'react';

import HeaderComponent from '../components/Header';
import ServicesComponent from '../components/Services';
import GalleryComponent from '../components/Gallery';
import FooterComponent from '../components/Footer';
import ProgressComponent from '../components/Progress';
import ChartComponent from '../components/Chart';
import ScrollToTopComponent from '../components/ScrollToTop';

const labels = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
];
const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: '#ffcc21',
      borderColor: '#ffcc21',
      borderWidth: 3,
      data: [95, 90, 70, 80, 75, 55, 65, 50, 40, 60, 50, 40],
      fill: false,
      tension: 0.1,
    },

    {
      backgroundColor: '#8fe9d0',
      borderColor: '#8fe9d0',
      borderWidth: 3,
      data: [80, 70, 90, 85, 60, 40, 50, 20, 30, 50, 60, 80],
      fill: false,
      tension: 0.1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: '#777',
      },
      ticks: {
        color: '#fff',
      },
    },
    y: {
      display: false,
      min: 0,
    },
  },
};

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <section className="flex">
        <div className="w-2/5">
          <ProgressComponent />
        </div>

        <div className="w-3/5 pb-12 bg-dark-600">
          <ChartComponent data={data} options={options} />
        </div>
      </section>
      
      <ServicesComponent />

      <GalleryComponent />

      <FooterComponent />

      <ScrollToTopComponent />
    </>
  );
};

export default HomePage;
