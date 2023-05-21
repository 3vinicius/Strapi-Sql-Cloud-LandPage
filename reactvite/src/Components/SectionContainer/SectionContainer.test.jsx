import { screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from '../../styles/render-theme';

export const MockElemet = () => {
  return (
    <div>
      <h1>Test</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sequi
        neque incidunt illo officiis quidem placeat! Ut, eligendi hic rerum sit
        beatae molestias optio nostrum. Unde odio earum fugit perspiciatis.
      </p>
    </div>
  );
};

describe('<SectionContainer />', () => {
  it('Should render <SectionContainer />', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <MockElemet />
      </SectionContainer>,
    );

    expect(container).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument();
    expect(container.children).toMatchSnapshot();
  });
});
