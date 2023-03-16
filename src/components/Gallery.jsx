import React from 'react';

import galleryImage from '../assets/img/gallery.svg';

const data = [
  {
    id: 1,
    image: galleryImage,
    text: '05.21.Morning',
  },
  {
    id: 2,
    image: galleryImage,
    text: '05.21.Lunch',
  },
  {
    id: 3,
    image: galleryImage,
    text: '05.21.Dinner',
  },
  {
    id: 4,
    image: galleryImage,
    text: '05.21.Snack',
  },
  {
    id: 5,
    image: galleryImage,
    text: '05.20.Morning',
  },
  {
    id: 6,
    image: galleryImage,
    text: '05.20.Lunch',
  },
  {
    id: 7,
    image: galleryImage,
    text: '05.20.Dinner',
  },
  {
    id: 8,
    image: galleryImage,
    text: '05.20.Snack',
  },
];

const GalleryComponent = () => {
  return (
    <section>
      <div className="container mx-auto mb-16">
        <div className="grid grid-cols-4 gap-2 mb-7">
          {data?.map((item) => (
            <a href="#" key={item.id} className="relative">
              <img src={item.image} alt="" className="w-full" />

              <span className="absolute left-0 bottom-0 text-base text-white bg-primary-300 py-2 pl-2 pr-5">
                {item.text}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-b from-primary-300 to-primary-400 text-lg text-white rounded-lg p-4 w-72 font-noto">
            記録をもっと見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryComponent;
