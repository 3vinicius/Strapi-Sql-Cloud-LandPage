import { render, screen } from '@testing-library/react';
import Home from '.';


test('renders learn react link', () => {
  render(<Home />);
  screen.debug();
  // const linkElement = screen.getByText(/olá/i);
  // expect(linkElement).toBeInTheDocument();
});
