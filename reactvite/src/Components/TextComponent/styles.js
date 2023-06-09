import styled, { css } from 'styled-components';
import darkMode from '../../Utils/stylesUtils';

export const Container = styled.p`
  ${({ theme, colorDark }) => css`
    font-size: ${theme.fonts.sizes.medium};
    ${darkMode(colorDark)}

    ;
  `}
`;
