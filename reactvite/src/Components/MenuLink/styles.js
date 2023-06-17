import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.primaryColor};
    font-size: ${theme.fonts.sizes.lsmall};
    padding: 0 ${theme.spacings.lsmall};
    position: relative;



    &::after{
      content: '';
      position: absolute;
      background-color: ${theme.colors.secondaryColor};
      height: 0.2rem;
      width: 0%;
      bottom: -5px;
      left: 50%;
      transition: all 300ms ease-in-out;
    }

    &:hover:after{
      left: 25%;
      width: 50%;
    }
  `}
`;
