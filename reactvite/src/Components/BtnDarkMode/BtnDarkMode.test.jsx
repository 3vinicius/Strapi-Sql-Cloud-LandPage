import { fireEvent, screen } from '@testing-library/react';
import { BtnDarkMode } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<BtnDarkMode />', () => {
  it('Should render <BtnDarkMode />', () => {
    renderTheme(<BtnDarkMode />);
    const button = screen.getByLabelText('btn-DarkMode');
    expect(button.firstChild).toBeInTheDocument();
  });

  it('Should render styles from <BtnDarkMode />', () => {
    renderTheme(<BtnDarkMode />);
    const button = screen.getByLabelText('btn-DarkMode');
    expect(button).toHaveStyle({
      'background-color': 'red',
      padding: '10px',
    });
  });

  it('Should render events from <BtnDarkMode />', () => {
    renderTheme(<BtnDarkMode />);
    const button = screen.getByLabelText('btn-DarkMode');

    // fireEvent(button, new MouseEvent('click', { bubbles: true }));

    expect(button.firstChild).toHaveAttribute('aria-label', 'offDarkMode');

    fireEvent.click(button);

    expect(button.firstChild).toHaveAttribute('aria-label', 'onDarkMode');
  });
});
