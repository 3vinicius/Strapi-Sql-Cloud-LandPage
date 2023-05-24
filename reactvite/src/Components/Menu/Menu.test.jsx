import { Menu } from '.';
import { fireEvent, screen } from '@testing-library/react';
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
        styles={{ width: '750px' }}
        links={mocklinks}
        logoData={mockLogoData}
      />,
    );
    const child = screen.getByLabelText('Close/Open Menu');

    expect(child).toHaveStyleRule('display', 'none');
    expect(child).toHaveStyleRule('display', 'flex', {
      media: '(max-width:768px)',
    });
  });

  it('Should render correct event <Menu />', () => {
    renderTheme(<Menu links={mocklinks} logoData={mockLogoData} />);

    const child = screen.getByLabelText('Close/Open Menu');

    expect(child.nextSibling).toHaveStyleRule('visibility', 'hidden', {
      media: '(max-width:768px)',
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
    fireEvent.click(child);
    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();
    expect(child.nextSibling).toHaveStyleRule('visibility', 'visible', {
      media: '(max-width:768px)',
    });
  });

  it('Should not render links <Menu />', () => {
    renderTheme(<Menu logoData={mockLogoData} />);
    const nav = screen.getByLabelText('Main menu');
    expect(nav.firstChild).not.toBeInTheDocument();
  });

  it('Should render correct snapshot', () => {
    const { container } = renderTheme(
      <Menu links={mocklinks} logoData={mockLogoData} />,
    );

    expect(container).toMatchSnapshot();
  });
});
