import { Form as FormikForm, Field as FormikField } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  width: 400px;
  align-items: center;
  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  color: ${p => p.theme.colors.accent};
`;

export const Label = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  transition: transform ${p => p.theme.transition.main};
`;

export const InputName = styled.p`
  color: ${p => p.theme.colors.text};
`;

export const Field = styled(FormikField)`
  width: 100%;
  border-color: ${p => p.theme.colors.border};
  margin-bottom: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px;
`;

export const AddContactBtn = styled.button`
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
export const ErrorMessageCustom = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.red};
`;
