import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

const mock = {
  text: 'Mylogo',
  scrImg: '../../../assets/logo.svg',
  link: 'http://template.com',
};

describe('<LogoLink />', () => {
  it('Should render <LogoLink />', () => {
    const { debug } = renderTheme(<LogoLink {...mock} />);
    debug();
  });

  it('Should render correct props mock', () => {
    const { container } = renderTheme(<LogoLink {...mock} />);
    const child = container.querySelector('h1');
    expect(child).toMatchInlineSnapshot();
  });
});
