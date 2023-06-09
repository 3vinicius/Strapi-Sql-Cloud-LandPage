import { GridSection } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridSection />', () => {
  it('Should render <GridSection />', () => {
    const { container } = renderTheme(
      <GridSection {...mock} background={false} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render deaul others propries <GridSection />', () => {
    const { container } = renderTheme(<GridSection {...mock} />);
    expect(container).toBeInTheDocument();
  });
});
