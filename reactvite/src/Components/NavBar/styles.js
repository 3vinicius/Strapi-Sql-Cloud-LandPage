import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    background-color: white;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    margin: 0px;
    @media ${theme.myMedias.letMedium} {
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
    }
  `}
`;
