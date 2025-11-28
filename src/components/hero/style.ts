import styled from 'styled-components';

export const HeroStyle = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #ccc0a6;
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow-y: hidden;
  .hero-swiper,
  .hero-swiper .swiper-wrapper,
  .hero-swiper .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    margin-top: 0 !important;
    position: absolute !important;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left bottom;
  }

  /* @media (max-width: 768px) {
    height: 95vh;
  } */
`;
