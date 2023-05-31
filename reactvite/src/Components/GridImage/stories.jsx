import { GridImage } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';
import mock from './mock.js';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
