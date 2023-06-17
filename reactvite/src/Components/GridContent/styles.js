import styled, { css } from 'styled-components';
import darkMode from '../../Utils/stylesUtils';

export const Container = styled.div`
  ${({ theme, colorDark }) => css`
    text-align: center;
    max-width: 58rem;
    margin: auto;
    font-size: ${theme.fonts.sizes.medium};
    ${darkMode(colorDark)}
    ;
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge}
  `}
`;
