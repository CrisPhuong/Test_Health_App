import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ data, options, title }) => {
  return (
    <div className="px-12 pt-12 bg-dark-600">
      {!!title && title}
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
