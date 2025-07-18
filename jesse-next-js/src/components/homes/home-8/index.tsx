
import HeaderNine from '@/layouts/headers/HeaderNine';
import React from 'react';
import PortfolioSlider from './PortfolioSlider';

const HomeEight = () => {
  return (
    <>
      <HeaderNine />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioSlider />
          </main>
        </div>
      </div>

    </>
  );
};

export default HomeEight;