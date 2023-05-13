import { Heading } from '.';
import { theme } from '../../styles/theme';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: theme.colors.mainBg,
        },
        {
          name: 'dark',
          value: theme.colors.secondaryBg,
        },
      ],
    },
  },
};
export const Dark = (args) => <Heading {...args} />;
export const Light = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
    colorDark: false,
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: true,
};
