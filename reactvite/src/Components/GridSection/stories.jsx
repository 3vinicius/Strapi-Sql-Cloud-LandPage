import { GridSection } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';
import mock from './mock';

export default {
  title: 'GridSection',
  component: GridSection,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};
