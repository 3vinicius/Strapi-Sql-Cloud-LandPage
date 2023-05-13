import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen, render } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Home/>', () => {
  it('Should render <Home/>', () => {
    renderTheme(<Home />);
  });
});
