import { NavBar } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';
import links from './mock.links';

export default {
  title: 'NavBar',
  component: NavBar,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: theme.colors.secondaryBg,
        },
      ],
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavBar {...args} />
    </div>
  );
};
