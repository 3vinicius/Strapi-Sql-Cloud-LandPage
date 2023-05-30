import { GridContent } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';
import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
