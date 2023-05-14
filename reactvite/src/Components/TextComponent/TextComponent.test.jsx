import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('Should render <TextComponent />', () => {
    renderTheme(<TextComponent>Hello</TextComponent>);
    const div = screen.getByText('Hello');
    expect(div).toBeInTheDocument();
    expect(div).toMatchSnapshot();
  });

  it('Should correct text, how 24px', () => {
    renderTheme(<TextComponent>Hello</TextComponent>);
    const div = screen.getByText('Hello');
    expect(div).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
      color: theme.colors.colorWhite,
    });
  });
});
