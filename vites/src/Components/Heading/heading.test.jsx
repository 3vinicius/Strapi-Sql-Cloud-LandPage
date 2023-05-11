/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react';
import App from '../../App';



describe('Home', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('olá')).toBeInTheDocument();
  });
});

