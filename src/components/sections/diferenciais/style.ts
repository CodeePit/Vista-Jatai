import styled from 'styled-components';

export const DiferenciasStyle = styled.div`
  width: 100%;
  height: auto;
  padding: 5rem;
  background-color: #322939;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  h1 {
    background: var(--color-background-cobre);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    strong {
      font-size: 29px;
      font-weight: 700;
    }
  }
  .container {
    width: 70%;
    .content {
      width: 100%;
      background-color: transparent;
      .buttons {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        button {
          width: 33%;
          height: 100px;
          background-color: black;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background-color: #564151;
          transition: all 0.5s;
          span {
            color: white;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            color: #DFD8CE;
            font-family: var(--font-primary);
            transition: all 0.5s;
          }
          @media (max-width: 769px) {
            width: 100%;
          }
        }
        .active {
          background-color: #27202C;
          span {
            background: #AD986A;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
        }
        @media (max-width: 769px) {
          flex-direction: column;
        }
      }
    }
    .line {
      background: var(--color-background-cobre);
      height: 2px;
      width: 100%;
    }

    .items {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .bloco {
        width: 100%;
        height: auto;
        min-height: 300px;
        display: grid;
        grid-template-columns: 30% 30%;
        align-items: center;
        justify-content: space-evenly;
        grid-template-rows: auto;
        padding: 4rem;
        gap: 2rem;
        span {
          width: auto;
          display: flex;
          align-items: center;
          color: #DFD8CE;
          gap: 1rem;
        }
        @media (max-width: 769px) {
          grid-template-columns: 100%;
          padding: 2rem 3.5rem;
        }
      }
      .swiper-button-next {
        color: #DFD8CE !important;
      }
      .swiper-button-prev {
        color: #DFD8CE !important;
      }
    }
    @media (max-width: 1200px) {
      width: 80%;
    }
    @media (max-width: 769px) {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    padding: 2rem 0.5rem;
  }
`;
