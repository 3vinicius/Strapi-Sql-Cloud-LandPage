import { css } from 'styled-components';
import { theme } from '../styles/theme';
// export default function darkMode(back){
//
// }

function darkMode(back) {
  return css`
      color: ${back ? theme.colors.colorWhite : theme.colors.primaryColor};
    `;
}

export default darkMode;
