import styled from 'styled-components';

export const FilterContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Filterlabel = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const FilterInput = styled.input`
  width: 230px;
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.normal};
  outline: none;
`;
