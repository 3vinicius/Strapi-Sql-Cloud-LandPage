import { GridTwoColumn } from '.';
// eslint-disable-next-line no-unused-vars

export default {
  title: 'GridTwo',
  component: GridTwoColumn,
  args: {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Cupiditateipsum corrupti esse nihil. Consequuntur eos deleniti, dolor
    velit avoluptatum consectetur nihil placeat ullam expedita saepe qui
    minima ipsum! Debitis.`,
    title: 'Grid Two Column',
    background: false,
    srcImg: '../../../assets/javascript.svg',
  },
  argTypes: {
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
