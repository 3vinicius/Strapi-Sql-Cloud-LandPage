import { BtnDarkMode } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';

export default {
  title: 'BtnDarkMode',
  component: BtnDarkMode,
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
      <BtnDarkMode {...args} />
    </div>
  );
};
