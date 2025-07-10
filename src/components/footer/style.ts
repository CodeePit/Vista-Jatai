import styled from 'styled-components';

export const FooterStyle = styled.footer`
  width: 100%;
  padding: 2rem;
  height: auto;
  background-color: #ccc0a6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #322939;
  gap: 2rem;
  font-family: var(--font-primary);
  .values {
    width: 62%;
    font-size: 10px;
    text-align: center;
    opacity: 0.8;
    @media (max-width: 767px) {
      width: 90%;
    }
  }
  .line {
    width: 10rem;
    height: 1px;
    background: var(--color-background-cobre);
  }
  a {
    font-size: 18px;
    text-decoration: none;
    color: #322939;
    font-weight: 700;
  }
`;
