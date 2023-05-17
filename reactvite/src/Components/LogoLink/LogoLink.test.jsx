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
    renderTheme(<LogoLink {...mock} />);
  });

  it('Should render correct props mock', () => {
    const { container } = renderTheme(<LogoLink {...mock} />);
    const child = container.querySelector('a');

    expect(child).toHaveAttribute('href', mock.link);
    expect(screen.getByRole('img')).toHaveAttribute('alt', mock.text);
    expect(screen.getByRole('img')).toHaveAttribute('src', mock.scrImg);
  });

  it('Should render correct props mock from text', () => {
    const { container } = renderTheme(
      <LogoLink text={mock.text} link={mock.link} />,
    );
    const child = container.querySelector('a');

    expect(child).toHaveAttribute('href', mock.link);
    expect(screen.getByRole('link')).toBeInTheDocument();

    expect(screen.queryByAltText(mock.text)).not.toBeInTheDocument();
    expect(screen.queryByText(mock.text)).toBeInTheDocument();
  });

  it('Should render correct styles from text', () => {
    const { container } = renderTheme(
      <LogoLink text={mock.text} link={mock.link} />,
    );
    const child = container.querySelector('a');

    expect(child).toHaveStyle({
      display: 'flex',
      'align-items': 'center',
    });
  });

  it('Should render correct styles from img', () => {
    const { container } = renderTheme(<LogoLink {...mock} />);
    const child = container.querySelector('img');

    expect(child).toHaveStyle({
      'max-width': '8rem',
      'max-height': '8rem',
    });
  });

  it('Should render correct styles from heading', () => {
    renderTheme(<LogoLink text={mock.text} link={mock.link} />);
    const child = screen.queryByRole('heading');

    expect(child).toHaveStyle({
      'text-transform': 'uppercase',
      'font-size': '2.4rem',
    });
  });
});

// `}
//   display: flex;
//   align-items: center;
//   > img {
//     max-width: 8rem;
//     max-height: 8rem;
//   }
