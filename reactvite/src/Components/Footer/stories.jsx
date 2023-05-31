import { Footer } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: "<p><a href='https://localhost'>Feito por Vincius Amorim</a></p>",
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
