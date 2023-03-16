import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '../assets/img/logo.svg';
import hamburgerIcon from '../assets/img/hamburger.svg';
import memoIcon from '../assets/img/memo.svg';
import challengeIcon from '../assets/img/challenge.svg';
import infoIcon from '../assets/img/info.svg';

const routes = [
  {
    id: 1,
    text: '自分の記録',
    url: '/record',
  },
  {
    id: 2,
    text: '体重グラフ',
    url: '',
  },
  {
    id: 3,
    text: '目標',
    url: '',
  },
  {
    id: 4,
    text: '選択中のコース',
    url: '',
  },
  {
    id: 5,
    text: 'コラム一覧',
    url: '/column',
  },
  {
    id: 6,
    text: '設定',
    url: '',
  },
];

const NavigationComponent = () => {
  return (
    <div
      className="absolute top-12 right-0 bg-gray-400 text-lg z-10"
      style={{ width: 280 }}
    >
      <nav>
        <ul>
          {routes?.map((route) => (
            <li key={route.id}>
              <Link
                to={route.url}
                className="text-white block py-5 px-8 border-t border-solid border-t-white border-b-dark-600 border-opacity-20 font-noto"
              >
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const HeaderComponent = () => {
  const [showNav, setToShowNav] = useState(false);

  return (
    <header className="bg-dark-500 pt-4 pb-2">
      <div className="container mx-auto">
        <div className="flex">
          <div>
            <Link to="/">
              <img src={logoIcon} alt="" style={{ maxWidth: 110 }} />
            </Link>
          </div>

          <div className="flex-1 font-noto">
            <nav>
              <ul className="flex justify-end">
                <li>
                  <Link to="/record" className="text-white px-6 flex">
                    <img src={memoIcon} alt="" className="mr-2" />
                    <span className="mt-1">自分の記録</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-white px-6 flex">
                    <img src={challengeIcon} alt="" className="mr-2" />
                    <span className="mt-1">チャレンジ</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-white px-6 flex">
                    <div className="relative">
                      <img src={infoIcon} alt="" className="mr-2" />

                      <span
                        className="rounded-full text-xs text-white absolute top-0 right-0 h-4 w-4 text-center"
                        style={{ background: '#ea6c00' }}
                      >
                        1
                      </span>
                    </div>
                    <span className="mt-1">お知らせ</span>
                  </Link>
                </li>
                <li className="ml-10 relative">
                  <button onClick={() => setToShowNav(!showNav)}>
                    <img src={hamburgerIcon} alt="" style={{ maxWidth: 32 }} />
                  </button>

                  {showNav && <NavigationComponent />}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
