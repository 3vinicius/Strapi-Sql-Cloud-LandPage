import { Menu } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import mocklinks from '../NavBar/mock.links';

const mockLogoData = {
  text: 'Logo',
  link: '#target',
  srcImg: '',
};

describe('<Menu />', () => {
  it('Should render <Menu />', () => {
    renderTheme(<Menu links={mocklinks} logoData={mockLogoData} />);
  });

  it('Should render correct display mobile', () => {
    renderTheme(
      <Menu
        styles={{ with: '750px' }}
        links={mocklinks}
        logoData={mockLogoData}
      />,
    );
    screen().g
  });

  it('Should render correct event <Menu />', () => {
    renderTheme(<Menu links={mocklinks} logoData={mockLogoData} />);
  });

  it('Should render correct snapshot', () => {
    const { container } = renderTheme(
      <Menu links={mocklinks} logoData={mockLogoData} />,
    );
    screen.debug(container);
  });
});
