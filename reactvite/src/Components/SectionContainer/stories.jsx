import { SectionContainer } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Oi</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          illo, aliquid quam id magnam quibusdam quasi laboriosam possimus
          assumenda animi fugiat unde quae dignissimos nisi provident explicabo
          nostrum tenetur a.
        </p>
      </div>
    ),
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
