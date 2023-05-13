import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading/>', () => {
  it('Should render default values', () => {
    renderTheme(<Heading>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.colorWhite,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('Should render how color white', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('Should render correct size', () => {
    const { rerender } = renderTheme(
      <Heading size="small" colorDark={false}>
        texto
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  it('should render medium font-size when using mobile', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.large, {
      media: theme.myMedias.letMedium,
    });
  });

  it('Should render how UpperCase', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.colorWhite,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'uppercase',
    });
  });

  it('Should render correct as in style component h1', () => {
    const h = 'h1';
    const { container } = renderTheme(<Heading as={h}>texto</Heading>);

    const heading = container.querySelector(h);
    expect(heading.tagName.toLowerCase()).toBe(h);
  });

  it('Should render correct as in style component h2', () => {
    const h = 'h2';
    const { container } = renderTheme(<Heading as={h}>texto</Heading>);

    const heading = container.querySelector(h);
    expect(heading.tagName.toLowerCase()).toBe(h);
  });

  it('Should render correct as in style component h3', () => {
    const h = 'h3';
    const { container } = renderTheme(<Heading as={h}>texto</Heading>);

    const heading = container.querySelector(h);
    expect(heading.tagName.toLowerCase()).toBe(h);
  });
  it('Should render correct as in style component h4', () => {
    const h = 'h4';
    const { container } = renderTheme(<Heading as={h}>texto</Heading>);

    const heading = container.querySelector(h);
    expect(heading.tagName.toLowerCase()).toBe(h);
  });

  it('Should render correct as in style component h5', () => {
    const h = 'h5';
    const { container } = renderTheme(<Heading as={h}>texto</Heading>);

    const heading = container.querySelector(h);
    expect(heading.tagName.toLowerCase()).toBe(h);
  });

  it('Should render correct as in style component h6', () => {
    const h = 'h6';
    const { container } = renderTheme(<Heading as={h}>texto</Heading>);

    const heading = container.querySelector(h);
    expect(heading.tagName.toLowerCase()).toBe(h);
  });
});

// const titleSize = {
//   small: (theme) => css`
//   font-size: ${theme.fonts.sizes.medium} ;
//   `,
//   medium: (theme) => css`
//     font-size: ${theme.fonts.sizes.large} ;
//   `,
//   big: (theme) => css`
//   font-size: ${theme.fonts.sizes.xhuge} ;
//   ${mediaFonte(theme)}
// `,
// };
