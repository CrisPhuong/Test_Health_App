import React from 'react';

const data = [
  {
    id: 1,
    title: 'RECOMMENDED COLUMN',
    text: 'オススメ',
  },
  {
    id: 2,
    title: 'RECOMMENDED DIET',
    text: 'ダイエット',
  },
  {
    id: 3,
    title: 'RECOMMENDED BEAUTY',
    text: '美容',
  },
  {
    id: 4,
    title: 'RECOMMENDED HEALTH',
    text: '健康',
  },
];

const RecommendComponent = () => {
  return (
    <section>
      <div className="container mx-auto my-14">
        <div className="grid grid-cols-4 gap-8">
          {data?.map((item) => (
            <div key={item.id} className="bg-dark-600 p-8 text-center">
              <h2 className="text-2xl text-primary-300 mb-2">{item.title}</h2>

              <span className="bg-white h-px w-14 mx-auto inline-block mb-2"></span>

              <p className="text-white text-lg font-noto">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendComponent;
