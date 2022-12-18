import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  padding: 24px;
  background-color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: center;
`;

export const ModalCloseBtn = styled.button`
 display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;

    width: 20px;
    height: 20px;
   
    border-radius: 50%;
    box-shadow: 0px 6px 6px 0px var(--button-bg-cl);
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: var(--main-bg-cl);

    font-size: 16px;
    color: var(--main-text-cl);

    transition: all 250ms linear;

    &:focus,
    &:hover {
        background-color: var(--button-bg-cl);
        border: 1px solid transparent;
        fill: var(--main-bg-cl);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)`;

//     //  export const modalClosIcon.styled {
//     // width: 12px;
//     // height: 12px;
// }
