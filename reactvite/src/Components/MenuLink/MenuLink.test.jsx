import { fireEvent, screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<MenuLink />', () => {
  it('Should render <MenuLink />', () => {
    const { container } = renderTheme(<MenuLink>children</MenuLink>);
    expect(container).toBeInTheDocument();
  });

  it('Should render correct children how tagname', () => {
    const { container } = renderTheme(<MenuLink>children</MenuLink>);
    const child = container.querySelector('a');
    expect(child).toBeInTheDocument();
  });

  it('Should render correct styles', () => {
    const { container } = renderTheme(<MenuLink>children</MenuLink>);
    const child = container.querySelector('a');
    expect(child).toHaveStyle({
      display: 'block',
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.lsmall,
      padding: theme.spacings.lsmall,
      position: 'relative',
    });
  });

  it('Should render correct houver', () => {
    const { container } = renderTheme(<MenuLink>children</MenuLink>);
    const child = container.querySelector('a');
    expect(child).toHaveStyle({
      display: 'block',
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.lsmall,
      padding: theme.spacings.lsmall,
      position: 'relative',
    });
  });

  it('Should render correct props', () => {
    const { container } = renderTheme(
      <MenuLink target="_blank" href={theme.links.myGithub}>
        children
      </MenuLink>,
    );
    const child = container.querySelector('a');
    expect(child).toHaveProperty('href', theme.links.myGithub);
    expect(child).toHaveProperty('target', '_blank');
  });

  it('Should render correct props', () => {
    const { container } = renderTheme(<MenuLink>children</MenuLink>);
    const child = container.querySelector('a');
    expect(child).toHaveProperty('href', theme.links.myGithub);
    expect(child).toHaveProperty('target', '_blank');
  });

  it('Should render correct snapshot', () => {
    const { debug } = renderTheme(<MenuLink>children</MenuLink>);
    screen.getByText('children');
    debug();
  });

  it('should not apply animation, off hover', () => {
    const { getByText } = renderTheme(<MenuLink>children</MenuLink>);
    const container = getByText('children');

    setTimeout(() => {
      const after = window.getComputedStyle(container, '::after');

      expect(after.left).not('25%');
      expect(after.width).not('50%');
    }, 300);
  });

  it('should apply animation on hover', () => {
    const { getByText } = renderTheme(<MenuLink>children</MenuLink>);
    const container = getByText('children');

    // simulate the hover event
    fireEvent.mouseEnter(container);

    // wait for the animation to complete
    setTimeout(() => {
      // get the computed style of the ::after element
      const after = window.getComputedStyle(container, '::after');

      // check if the animation is being applied
      expect(after.left).toBe('25%');
      expect(after.width).toBe('50%');
    }, 300);
  });

  it('Should render correct snapshot', () => {
    renderTheme(<MenuLink>children</MenuLink>);
    const child = screen.getByText('children');
    expect(child).toMatchSnapshot();
  });
});
