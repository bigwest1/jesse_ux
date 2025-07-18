'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import Image, { StaticImageData } from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';

import sldier_img_1 from '@/assets/img/home-07/slider-2-1.jpg';
import slider_img_2 from '@/assets/img/home-07/slider-2-2.jpg';
import slider_img_3 from '@/assets/img/home-07/slider-2-5.jpg';
import slider_img_4 from '@/assets/img/home-07/slider-2-4.jpg';
import slider_img_5 from '@/assets/img/home-07/slider-2-3.jpg';
import slider_img_6 from '@/assets/img/home-07/slider-2-6.jpg';
import { AppContext } from "@/context/app-context";


interface DataType {
  id: number;
  img: StaticImageData;
  subtitle: string;
  title: string;
}

const slider_data: DataType[] = [
  {
    id: 1,
    img: sldier_img_1,
    subtitle: 'Modelling - 2012',
    title: 'Siyantika Glory',
  },
  {
    id: 2,
    img: slider_img_2,
    subtitle: 'Modelling - 2012',
    title: 'Hannah & John',
  },
  {
    id: 3,
    img: slider_img_3,
    subtitle: 'Modelling - 2012',
    title: 'Out of this world',
  },
  {
    id: 4,
    img: slider_img_4,
    subtitle: 'Modelling - 2012',
    title: 'The Smiths',
  },
  {
    id: 5,
    img: slider_img_5,
    subtitle: 'Modelling - 2012',
    title: 'Digital Paintings',
  },
  {
    id: 6,
    img: slider_img_6,
    subtitle: 'Modelling - 2012',
    title: 'Album cover',
  },
  // for loop
  {
    id: 1,
    img: sldier_img_1,
    subtitle: 'Modelling - 2012',
    title: 'Siyantika Glory',
  },
  {
    id: 2,
    img: slider_img_2,
    subtitle: 'Modelling - 2012',
    title: 'Hannah & John',
  },
  {
    id: 3,
    img: slider_img_3,
    subtitle: 'Modelling - 2012',
    title: 'Out of this world',
  },
  {
    id: 4,
    img: slider_img_4,
    subtitle: 'Modelling - 2012',
    title: 'The Smiths',
  },
  {
    id: 5,
    img: slider_img_5,
    subtitle: 'Modelling - 2012',
    title: 'Digital Paintings',
  },
  {
    id: 6,
    img: slider_img_6,
    subtitle: 'Modelling - 2012',
    title: 'Album cover',
  },

]

const PortfolioSlider = () => {
  const {handleMouseEnter,handleMouseLeave} = useContext(AppContext);

  return (
    <>
      <div className="portfolio-slider-2-area black-bg-5 portfolio-slider-3-style fix">
        <div className="portfolio-slider-2-wrap p-relative">
          <div className="portfolio-slider-2-wrap-box">
            <Swiper
              loop={true}
              speed={700}
              spaceBetween={30}
              slidesPerView={4}
              keyboard={{ enabled: true }}
              mousewheel={true}
              modules={[Scrollbar, Mousewheel]}
              scrollbar={{
                el: '.tp-scrollbar',
                draggable: true,
              }}
              breakpoints={{
                '1400': {
                  slidesPerView: 4,
                },
                '1200': {
                  slidesPerView: 4,
                },
                '992': {
                  slidesPerView: 3,
                },
                '768': {
                  slidesPerView: 2,
                },
                '576': {
                  slidesPerView: 1,
                },
                '0': {
                  slidesPerView: 1,
                },
              }}
              className="swiper-container portfolio-slider-3-active">
              {slider_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <Link className="cursor-hide" href="/portfolio-details-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="portfolio-slider-2-item p-relative not-hide-cursor"> 

                      <div className="portfolio-slider-2-thumb">
                        <Image src={item.img} alt="image-here" />
                      </div>
                      <div className="portfolio-slider-3-content">
                        <span className="portfolio-slider-3-meta">{item.subtitle}</span>
                        <h4 className="portfolio-slider-3-title">{item.title}</h4>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="tp-scrollbar"></div>
          <div className="port-showcase-slider-link d-none d-sm-block">
            <Link href="/portfolio-details-2">
              <span>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5L5 0L0 5" fill="white" />
                  <path d="M10 7L5 12L0 7" fill="white" />
                </svg>
              </span>
              <span>All Projects</span>
            </Link>
          </div>
          <div className="port-showcase-slider-social d-flex align-items-center d-none d-sm-flex">
            <a className="tp-hover-btn-item tp-hover-btn tp-magnetic-item not-hide-cursor" target="_blank" href="https://facebook.com">Fb</a>
            <a className="tp-hover-btn-item tp-hover-btn tp-magnetic-item not-hide-cursor" target="_blank" href="https://instagram.com">In</a>
            <a className="tp-hover-btn-item tp-hover-btn tp-magnetic-item not-hide-cursor" target="_blank" href="https://www.behance.net">Be</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSlider;