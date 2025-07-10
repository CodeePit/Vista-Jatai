import styled from 'styled-components';

export const LegalStyle = styled.footer`
  width: 100%;
  padding: 2rem;
  height: auto;
  background-color:#322939;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #CCC0A6;
  gap: 2rem;
  font-family: var(--font-primary);
  font-size: 10px;
  .box {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
    .logos {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      img {
        width: 150px;
        height: 50px;
        object-fit: contain;
      }
    }
  }
`;
