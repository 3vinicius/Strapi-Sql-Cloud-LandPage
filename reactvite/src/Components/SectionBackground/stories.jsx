import { SectionBackground } from '.';
// eslint-disable-next-line no-unused-vars
import { theme } from '../../styles/theme';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <h1>Oi</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          illo, aliquid quam id magnam quibusdam quasi laboriosam possimus
          assumenda animi fugiat unde quae dignissimos nisi provident explicabo
          nostrum tenetur a.
        </p>
      </SectionContainer>
    ),
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
