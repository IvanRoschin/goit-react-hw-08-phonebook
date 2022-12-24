import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const P = styled.p`
  @media (max-width: 480px) {
    font-size: 14px;
  }
  color: #1976d2;
  font-size: 18px;
  font-weight: 600;
`;
