import React from 'react';

import HeaderComponent from '../components/Header';
import RecommendComponent from '../components/Recommend';
import FooterComponent from '../components/Footer';
import NewsComponent from '../components/News';
import ScrollToTopComponent from '../components/ScrollToTop';

const ColumnPage = () => {
  return (
    <>
      <HeaderComponent />

      <RecommendComponent />

      <NewsComponent />

      <FooterComponent />

      <ScrollToTopComponent />
    </>
  );
};

export default ColumnPage;
