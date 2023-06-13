import { Base } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';
import { GridSection } from '../../Components/GridSection';
import mocklinks from './mock.links';
import mockText from './mock.text';

export const mockBase = {
  children: (
    <>
      <GridSection {...mockText} background />
      <GridSection {...mockText} />
      <GridSection {...mockText} background />
      <GridSection {...mockText} />
      <GridSection {...mockText} background />
      <GridSection {...mockText} />
      <GridSection {...mockText} background />
      <GridSection {...mockText} />
    </>
  ),
  Links: mocklinks,
  logoData: {
    text: 'Logo',
    link: '#target',
    srcImg: '',
  },
  footerHtml: '<p>Test Footer </p>',
};

export default {
  title: 'Template/Base',
  component: Base,
  args: { ...mockBase },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
