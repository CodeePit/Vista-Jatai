import styled from 'styled-components';

export const AptosSectionStyle = styled.div`
  width: 100%;
  height: auto;
  padding: 8rem 8rem 10rem 8rem;
  background-image: url('/img/aptbg.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  color: black;
  position: relative;
  .text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .title {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;
      h1 {
        font-size: 64px;
        font-weight: 400;
        color: #3B2E38;
        font-family: var(--font-secondary);
        @media (max-width: 768px) {
          font-size: 32px;
          margin-top: 2rem;
        }
      }
      .line {
        height: 1px;
        width: 100px;
        background: #AD986A;
      }
      @media (max-width: 1200px) {
        align-items: center;
      }
    }
    a {
      white-space: nowrap;
      text-decoration: none;
      padding: 1rem 1.5rem;
      background:#AD986A;
      border-radius: 7px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s;
      font-family: var(--font-primary);
      :hover {
        transform: scale(1.02);
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      span {
        color: #322939;
        font-size: 20px;
        font-weight: 400;
      }
      @media (max-width: 1200px) {
        text-align: center;
      }
    }
    .diferenciais {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      width: 215px;
      .diferencial {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 20px;
        color: #AD986A;
        font-weight: 700;
        svg {
          width: 70px;
        }
      }
      @media (max-width: 1200px) {
        text-align: center;
        width: 80%;
      }
      @media (max-width: 600px) {
        width: 70%;
        .diferencial {
          gap: 0;
        }
      }
    }
    @media (max-width: 1200px) {
      align-items: center;
    }
  }
  .aptos {
    img {
      object-fit: contain;
    }
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
  .buttons {
    position: absolute;
    display: flex;
    gap: 2rem;
    padding: 1rem;
    justify-content: center;
    bottom: 4rem;
    right: 50%;
    transform: translateX(75%);
    button {
      padding: 1rem 3rem;
      background-color: #CCC0A6;
      border-radius: 6px;
      color: white;
      line-height: 24px;
      font-weight: 700;
      transition: all 0.5s;
      font-size: 15px;
    }
    .active {
      background: var(--color-background-cobre);
    }
    @media (max-width: 1200px) {
      width: 100%;
      left: 0;
      right: 0;
      gap: 0.5rem;
      bottom: 3rem;
      transform: translateX(0);
      button {
        padding: 1rem 2rem;
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 350px) {
      flex-direction: column;
    }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 1rem 1rem 10rem 1rem;
    gap: 2rem;
    .aptos {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 600px) {
    gap: 0rem;
  }
`;
