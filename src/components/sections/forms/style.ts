import styled from 'styled-components';

export const SectionFormStyle = styled.div`
  width: 100%;
  height: auto;
  background: var(--color-background-darkVinho);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  gap: 3rem;
  .text {
    max-width: 55rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
      gap: 1rem;
      .location {
        color: #322939;
        font-weight: 400;
        font-size: 18px;
        strong {
          font-weight: 700;
        }
      }
      a {
        color: #322939;
        font-weight: 700;
        font-size: 16px;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 7px;
        background: transparent;
        border: 1px solid #322939;
      }
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
      }
  }
  .title {
    color: #322939;
    font-weight: 500;
    font-size: 28px;
    strong {
      font-weight: 700;
      font-size: 32px;
    }
    @media (max-width: 920px) {
      text-align: center;
    }
  }
  @media (max-width: 920px) {
    padding: 3rem 1rem;
  }
`;
