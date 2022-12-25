import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid;
  border-color: #1976d2;
`;

export const HeaderTitle = styled.h2`
  font-size: 28px;
  color: #1976d2;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
