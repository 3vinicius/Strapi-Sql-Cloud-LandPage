import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<SectionBackground />', () => {
  it('Should render <SectionBackground />', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <div>oi</div>
      </SectionBackground>,
    );
    const child = screen.getByText('oi');
    expect(container).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });

  it('Should render correct styles', () => {
    renderTheme(<SectionBackground>oi</SectionBackground>);
    const child = screen.getByText('oi');
    expect(child).toHaveStyle({
      background: theme.colors.colorWhite,
      color: theme.colors.primaryColor,
      'min-height': '100vh',
      display: 'flex',
      'align-items': 'center',
    });
  });
  it('Should render correct styles background true', () => {
    renderTheme(<SectionBackground background={true}>oi</SectionBackground>);
    const child = screen.queryByText('oi');
    expect(child).toHaveStyle({
      'min-height': '100vh',
      display: 'flex',
      'align-items': 'center',
      color: theme.colors.colorWhite,
      background: theme.colors.primaryColor,
    });
  });

  it('Should render snapshot', () => {
    renderTheme(<SectionBackground>oi</SectionBackground>);

    expect(screen.getByText('oi')).toMatchSnapshot();
  });
});
