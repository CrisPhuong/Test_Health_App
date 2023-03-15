import React, { useState } from 'react';

import HeaderComponent from '../components/Header';
import RecordOptionComponent from '../components/RecordOption';
import ExerciseComponent from '../components/Exercise';
import DiaryComponent from '../components/Diary';
import FooterComponent from '../components/Footer';
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
  aspectRatio: 4,
};

const data = [
  {
    id: 1,
    text: '日',
    data: {
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
    },
  },
  {
    id: 2,
    text: '週',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#ffcc21',
          borderColor: '#ffcc21',
          borderWidth: 3,
          data: [80, 70, 90, 85, 60, 40, 50, 20, 30, 50, 60, 80],
          fill: false,
          tension: 0.1,
        },

        {
          backgroundColor: '#8fe9d0',
          borderColor: '#8fe9d0',
          borderWidth: 3,
          data: [95, 90, 70, 80, 75, 55, 65, 50, 40, 60, 50, 40],
          fill: false,
          tension: 0.1,
        },
      ],
    },
  },
  {
    id: 3,
    text: '月',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#ffcc21',
          borderColor: '#ffcc21',
          borderWidth: 3,
          data: [40, 50, 20, 30, 50, 60, 80, 40, 70, 90, 85, 60],
          fill: false,
          tension: 0.1,
        },

        {
          backgroundColor: '#8fe9d0',
          borderColor: '#8fe9d0',
          borderWidth: 3,
          data: [60, 50, 40, 95, 90, 70, 80, 75, 55, 65, 50, 40],
          fill: false,
          tension: 0.1,
        },
      ],
    },
  },
  {
    id: 4,
    text: '年',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#8fe9d0',
          borderColor: '#8fe9d0',
          borderWidth: 3,
          data: [40, 80, 40, 70, 90, 85, 60, 50, 20, 30, 50, 60],
          fill: false,
          tension: 0.1,
        },

        {
          backgroundColor: '#ffcc21',
          borderColor: '#ffcc21',
          borderWidth: 3,
          data: [60, 50, 40, 95, 90, 55, 65, 50, 40, 70, 80, 75],
          fill: false,
          tension: 0.1,
        },
      ],
    },
  },
];

const ChartTitleComponent = () => {
  return (
    <div className="flex items-center mb-8">
      <span className="text-white text-base mr-6">
        BODY <br /> RECORD
      </span>

      <span className="text-white text-xl">2021.05.21</span>
    </div>
  );
};

const FilterChartComponent = ({ setDataChart, activeData }) => {
  return (
    <div className="px-12 py-4 bg-dark-600">
      {data.map((item) => {
        return (
          <button
            key={item.id}
            className={`rounded-2xl px-6 py-1 text-base mr-4 ${
              activeData.id === item.id
                ? 'bg-primary-300 text-white'
                : 'bg-white text-primary-300'
            }`}
            onClick={() => setDataChart(item)}
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
};

const RecordPage = () => {
  const [dataChart, setDataChart] = useState(data[0]);
  return (
    <>
      <HeaderComponent />

      <RecordOptionComponent />

      <section className="mb-14">
        <div className="container mx-auto">
          <ChartComponent
            data={dataChart.data}
            options={options}
            title={<ChartTitleComponent />}
          />

          <FilterChartComponent
            setDataChart={setDataChart}
            activeData={dataChart}
          />
        </div>
      </section>

      <ExerciseComponent />

      <DiaryComponent />

      <FooterComponent />

      <ScrollToTopComponent />
    </>
  );
};

export default RecordPage;
