import React from 'react';

import arrowRounded from '../assets/img/arrow_rounded.svg';

const ScrollToTopComponent = () => {
  return (
    <button
      className="fixed right-4 bottom-4 bg-white rounded-full"
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
    >
      <img src={arrowRounded} alt="" />
    </button>
  );
};

export default ScrollToTopComponent;
