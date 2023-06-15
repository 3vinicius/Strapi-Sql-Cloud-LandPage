import styled, { css } from 'styled-components';

// sizes: {
//   xsmall: '0.8rem',
//   lsmall: '1.6rem',
//   medium: '2.4rem',
//   large: '3.2rem',
//   xlarge: '4.0rem',
//   xxlarge: '4.8rem',
//   huge: '5.6rem',
//   xhuge: '6.4rem',
// },
const titleSize = {
  small: (theme) => css`
  font-size: ${theme.fonts.sizes.medium} ;
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large} ;
  `,
  big: (theme) => css`
  font-size: ${theme.fonts.sizes.xhuge} ;
  ${mediaFonte(theme)}

`,
};

const mediaFonte = (theme) => css`@media ${theme.myMedias.letMedium} {
  font-size: ${theme.fonts.sizes.large};
}`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.colorWhite : theme.colors.primaryColor};
    ${titleSize[size](theme)}
    text-transform: ${uppercase ? 'uppercase' : 'none'};
  `}
`;
