import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock.grid';

describe('<GridTwoColumn />', () => {
  it('Should render <GridTwoColumn />', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
