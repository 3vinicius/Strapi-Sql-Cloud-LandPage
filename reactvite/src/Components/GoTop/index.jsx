import * as Styled from './styles';

import { KeyboardArrowUp } from '@styled-icons/material/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="Go To Top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
