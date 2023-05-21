import { MyThemeProvider } from '../src/styles/MyThemeProvider';
import { GlobalStyles } from '../src/styles/global-styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MyThemeProvider>
      <GlobalStyles />
      <Story />
    </MyThemeProvider>
  ),
];
