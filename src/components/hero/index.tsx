import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { HeroStyle } from './style';

const Hero = () => {
  return (
    <HeroStyle>
      <Swiper pagination modules={[Pagination]} className="hero-swiper" loop>
        <SwiperSlide>
          <Image
            alt="banner-hero"
            className="hero-image"
            src="/img/1.jpg"
            width={1920}
            height={730}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="banner-hero"
            className="hero-image"
            src="/img/2.jpg"
            width={1920}
            height={730}
          />
        </SwiperSlide>
      </Swiper>
    </HeroStyle>
  );
};

export default Hero;
