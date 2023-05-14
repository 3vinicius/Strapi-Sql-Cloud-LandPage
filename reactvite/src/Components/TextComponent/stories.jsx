import { TextComponent } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde a minus non quas sed, nobis perferendis? Corrupti doloribus, fuga, inventore reprehenderit quaerat odit ipsum quas possimus quos eligendi eum!',
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

export const Templete = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
