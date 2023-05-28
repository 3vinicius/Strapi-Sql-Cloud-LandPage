import * as Styled from './styles';

import { Sun } from '@styled-icons/boxicons-regular/Sun';
import { Moon } from '@styled-icons/boxicons-regular/Moon';
import { useState } from 'react';

export const BtnDarkMode = () => {
  const{} = useState
  return (
    <Styled.Container onClick={() => }>
      <Sun />
      <Moon />
    </Styled.Container>
  );
};
