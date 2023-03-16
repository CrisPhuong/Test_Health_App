import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-dark-500 py-14">
      <div className="container mx-auto">
        <nav>
          <ul className="flex font-noto">
            <li>
              <a href="#" className="px-6 text-white">
                会員登録
              </a>
            </li>
            <li>
              <a href="#" className="px-6 text-white">
                運営会社
              </a>
            </li>
            <li>
              <a href="#" className="px-6 text-white">
                利用規約
              </a>
            </li>
            <li>
              <a href="#" className="px-6 text-white">
                個人情報の取扱について
              </a>
            </li>
            <li>
              <a href="#" className="px-6 text-white">
                特定商取引法に基づく表記
              </a>
            </li>
            <li>
              <a href="#" className="px-6 text-white">
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default FooterComponent;
