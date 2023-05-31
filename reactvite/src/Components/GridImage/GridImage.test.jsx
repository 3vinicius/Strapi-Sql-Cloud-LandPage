import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock.js';

describe('<Gridimage />', () => {
  it('Should render <Gridimage />', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
