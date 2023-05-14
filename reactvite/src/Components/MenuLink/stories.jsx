import { MenuLink } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'text',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const MenuLinkTemplate = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};
