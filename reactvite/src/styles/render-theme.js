import { render } from '@testing-library/react';
import { MyThemeProvider } from './MyThemeProvider';

// renderTheme is a warpper to render the component with the theme
export const renderTheme = (children) => {
  return render(<MyThemeProvider>{children}</MyThemeProvider>);
};
