import styled from 'styled-components';

export const HeroStyle = styled.div`
  width: 100%;
  height: 85vh;
  background-color: black;
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  .hero {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left bottom;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .hero-mobile {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
    object-position: bottom;

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    height: 95vh;
  }
`;
