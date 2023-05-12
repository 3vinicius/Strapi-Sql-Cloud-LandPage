import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

it('should test', () => {
  const { debug } = renderTheme(<Home />);
  debug();
  const headerContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;

  expect(headerContainer).toHaveStyleRule(
    'background',
    `${theme.colors.secondaryBg}`,
  );
  expect(headerContainer).toMatchSnapshot();
});
