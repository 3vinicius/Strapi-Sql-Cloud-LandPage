import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react';
import Home from '../../Templates/App';



describe('Home', () => {
  it('renders correctly', () => {
    render(<Home />);
    expect(screen.getByText('olá')).toBeInTheDocument();
  });
});

