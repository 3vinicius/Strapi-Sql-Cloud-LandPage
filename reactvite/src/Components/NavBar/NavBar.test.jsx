import { NavBar } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<NavBar />', () => {
  it('Should render <NavBar />', () => {
    renderTheme(<NavBar />);
  });
});
