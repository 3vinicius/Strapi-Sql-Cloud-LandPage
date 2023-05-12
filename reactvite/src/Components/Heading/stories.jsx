import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argsTypes: {
    children: { type: 'strung' },
  },
  parameters: {
    background: {
      default: 'dark',
    },
  },
};

export const Lig
