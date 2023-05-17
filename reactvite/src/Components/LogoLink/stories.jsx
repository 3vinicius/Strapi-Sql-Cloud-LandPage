import { LogoLink } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Mylogo',
    scrImg: '../../../assets/logo.svg',
    link: 'http://template.com',
  },
};

export const Template = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TemplateText = (args) => {
  return (
    <div>
      <LogoLink {...args} scrImg="" />
    </div>
  );
};
