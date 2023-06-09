import { screen } from '@testing-library/react';
import { NavBar } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock.links';
import { theme } from '../../styles/theme';

describe('<NavBar />', () => {
  it('Should render <NavBar />', () => {
    const { container } = renderTheme(<NavBar links={mock} />);
    const child = screen.getByText(mock[1].children);
    expect(container).toBeInTheDocument();
    expect(child).toBeInTheDocument();

    const tagName = container.querySelectorAll('a');
    expect(tagName[1]).toBeVisible();
  });

  it('Should render defautl mode', () => {
    renderTheme(<NavBar />);
    const container = screen.queryByAltText('Main menu');
    expect(container).toBeNull();
  });

  it('Should render correct styles from <NavBar />', () => {
    const { container } = renderTheme(<NavBar links={mock} />);

    const child = container.querySelector('ul');
    expect(child).toHaveStyle({
      'background-color': 'white',
      display: 'flex',
      'flex-direction': 'row',
      'flex-wrap': 'wrap',
    });
  });

  it('Should render correct styles from <NavBar /> media screen', () => {
    renderTheme(<NavBar links={mock} />);
    // const child = container.querySelector('ul');
    expect(screen.getByText(/link2/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.myMedias.letMedium,
      },
    );
  });
  it('Should render correct snapshot', () => {
    const { container } = renderTheme(<NavBar links={mock} />);
    expect(container.querySelector('ul')).toMatchSnapshot();
  });
});
