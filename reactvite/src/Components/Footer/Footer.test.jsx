import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

const html = `<h1>Create by Vinicus Amorim</h1>`;

describe('<Footer />', () => {
  it('Should render <Footer />', () => {
    const { container } = renderTheme(<Footer html={html} />);
    expect(screen.getAllByRole('heading', { name: 'Create by Vinicus Amorim' }))
      .toBeInTheDocument;
    expect(container).toMatchSnapshot();
  });
});
