import { Home } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';

export default {
  title: 'Home',
  component: Home,
  args: {
    children: 'text',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Home {...args} />
    </div>
  );
};
