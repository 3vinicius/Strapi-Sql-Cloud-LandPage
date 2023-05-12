import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import P from 'prop-types';
import { GlobalStyles } from './global-styles';

export const MyThemeProvider = ({ children }) => {
  return (
    // ThemeProvider is a styled-components component that allows us
    //to pass a theme to all styled-components in the app.
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

MyThemeProvider.propTypes = {
  children: P.node.isRequired,
};
