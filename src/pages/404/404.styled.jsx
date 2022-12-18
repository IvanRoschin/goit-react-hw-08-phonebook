import styled from 'styled-components';

export const ErrorContainer = styled.div`
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[6]}px;
  text-align: center;
`;

export const ErrorImg = styled.img`
  display: block;
`;

export const ErrorTitle = styled.h2`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: center;
`;

export const ErrorBtn = styled.a`
  width: 190px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};
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
