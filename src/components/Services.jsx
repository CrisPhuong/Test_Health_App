import React from 'react';

import hexagonIcon from '../assets/img/hexagon.svg';
import knifeIcon from '../assets/img/knife.svg';
import cupIcon from '../assets/img/cup.svg';

const data = [
  {
    id: 1,
    text: 'Morning',
    icon: knifeIcon,
  },
  {
    id: 2,
    text: 'Lunch',
    icon: knifeIcon,
  },
  {
    id: 3,
    text: 'Dinner',
    icon: knifeIcon,
  },
  {
    id: 4,
    text: 'Snack',
    icon: cupIcon,
  },
];

const ServicesComponent = () => {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto">
        <div className="flex px-52">
          {data?.map((item) => (
            <div
              className="flex-1 flex justify-center cursor-pointer"
              key={item.id}
            >
              <div
                style={{
                  backgroundImage: `url(${hexagonIcon})`,
                  height: 134,
                  width: 114,
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
                  <img src={item.icon} alt="" className="inline-block" />

                  <span className="text-white text-xl">{item.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
