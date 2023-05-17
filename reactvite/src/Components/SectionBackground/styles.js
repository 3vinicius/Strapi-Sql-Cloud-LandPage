import styled, { css } from 'styled-components';

const darkMode = (theme) => css`
  color: ${theme.colors.colorWhite};
  background: ${theme.colors.primaryColor};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.colorWhite};
    color: ${theme.colors.primaryColor};

    ${background && darkMode(theme)}

  `}
`;
