import { Home } from '.';

export default {
  title: 'App',
  component: Home,
  args: {
    children: 'Children padrão',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Home {...args} />;
