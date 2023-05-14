import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    background-color: white;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    @media(${theme.myMedias.letMedium}){
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`;
