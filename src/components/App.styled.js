import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 480px) {
    width: 100%;
    /* width: 480px; */
  }
  @media (min-width: 768px) {
    /* width: 100%; */
    width: 768px;
  }
  @media (min-width: 1200px) {
    /* max-width: 1200px; */
    width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }
`;
