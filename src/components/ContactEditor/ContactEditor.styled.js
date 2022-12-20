import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SearchForm = styled(Form)`
  display: flex;
  flex-direction: column;
  outline: 1px solid black;
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FormInput = styled(Field)`
  width: 200px;
  margin-bottom: 20px;
  padding: 5px;
`;

export const FormBtn = styled.button`
  width: 100px;
  padding: 5px;
  cursor: pointer;
`;
