import { screen } from '@testing-library/react';
import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock.grid';

describe('<GridTwoColumn />', () => {
  it('Should render <GridTwoColumn />', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render default values <GridTwoColumn />', () => {
    renderTheme(
      <GridTwoColumn title="TEST" text="test" srcImg="https://Test" />,
    );
    const header = screen.queryByRole('heading', { name: 'TEST' });
    expect(header).toBeInTheDocument();
  });
});
