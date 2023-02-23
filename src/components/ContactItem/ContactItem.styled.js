import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  list-style: disc;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const FavoriteBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const Btn = styled.button`
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  box-shadow: 0 0 20px ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.primary};
  background-size: 200% auto;
  cursor: pointer;
  transition: ${p => p.theme.transition.main};
  &:hover {
    color: ${p => p.theme.colors.primary};
    text-decoration: none;
    background: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.primary};
  }
`;
