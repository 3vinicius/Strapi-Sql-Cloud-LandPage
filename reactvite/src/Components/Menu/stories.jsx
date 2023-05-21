import { Menu } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';
import mocklinks from '../NavBar/mock.links';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mocklinks,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray', right: '0' }}>
      <Menu {...args} />
    </div>
  );
};
