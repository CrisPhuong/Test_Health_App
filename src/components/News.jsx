import React from 'react';

import newsImage from '../assets/img/news.svg';

const data = [
  {
    id: 1,
    image: newsImage,
    text: '05.21.Morning',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 2,
    image: newsImage,
    text: '05.21.Lunch',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 3,
    image: newsImage,
    text: '05.21.Dinner',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 4,
    image: newsImage,
    text: '05.21.Snack',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 5,
    image: newsImage,
    text: '05.20.Morning',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 6,
    image: newsImage,
    text: '05.20.Lunch',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 7,
    image: newsImage,
    text: '05.20.Dinner',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 8,
    image: newsImage,
    text: '05.20.Snack',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    tags: ['魚料理', '和食', 'DHA'],
  },
];

const NewsComponent = () => {
  return (
    <section className="bg-white mb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-x-2 gap-y-5 mb-7">
          {data?.map((item) => (
            <a href="#" key={item.id}>
              <div className="relative mb-4">
                <img src={item.image} alt="" className="w-full" />

                <span className="absolute left-0 bottom-0 text-base text-white bg-primary-300 py-2 pl-2 pr-5">
                  {item.text}
                </span>
              </div>

              <h2 className="text-base text-dark-500 mb-2 font-noto">
                {item.title}
              </h2>

              {item.tags?.map((item) => (
                <span key={item} className="text-primary-400 mr-2 font-noto">
                  {item}
                </span>
              ))}
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

export default NewsComponent;
