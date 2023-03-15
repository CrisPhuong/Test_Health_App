import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 75;

const ProgressComponent = () => {
  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="bg-gradient-to-b from-primary-300 to-primary-400 absolute top-0 left-0 w-full h-full mix-blend-soft-light"></div>

      <div
        style={{ width: 180, height: 180 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={2}
          styles={buildStyles({
            pathColor: '#fff',
            trailColor: 'transparent',
          })}
        >
          <div className="flex items-end">
            <div className=" text-lg text-white mr-2">05/21</div>
            <div className="text-2xl text-white">{percentage}%</div>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default ProgressComponent;
