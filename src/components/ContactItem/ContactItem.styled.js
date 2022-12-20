import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  width: 450px;
  justify-content: space-between;
  font-size: 20px;
  list-style: disc;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const DeleteBtn = styled.button`
  margin-left: 20px;
`;

export const EditBtn = styled.button`
  margin-left: 20px;
`;
