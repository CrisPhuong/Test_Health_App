import React from 'react';

const data = [
  {
    id: 1,
    title: 'BODY RECORD',
    text: '自分のカラダの記録',
    image:
      'https://images.pexels.com/photos/4170628/pexels-photo-4170628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'MY EXERCISE',
    text: '自分の運動の記録',
    image:
      'https://images.pexels.com/photos/8374522/pexels-photo-8374522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'MY DIARY',
    text: '自分の日記',
    image:
      'https://images.pexels.com/photos/6240845/pexels-photo-6240845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const RecordOptionComponent = () => {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-12">
          {data?.map((item) => (
            <div
              key={item.id}
              className="relative border-solid border-primary-300"
              style={{ borderWidth: 24 }}
            >
              <div className="relative">
                <div className="bg-black absolute w-full h-full top-0 left-0 mix-blend-luminosity"></div>

                <img
                  src={item.image}
                  alt=""
                  className="mix-blend-luminosity opacity-50"
                />
              </div>

              <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 text-center">
                <h2 className="text-primary-300 text-2xl mb-4">{item.title}</h2>

                <p className="bg-primary-400 text-white px-6 py-1 inline-block">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecordOptionComponent;
