import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    height: 80px;
    width: 50px;
    background-color: red;
    padding: 10px;
    border-radius: 25px;
    margin: 10px;
    cursor: pointer;
  `}
`;
