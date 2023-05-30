import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridContent />', () => {
  it('Should render <GridContent />', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
