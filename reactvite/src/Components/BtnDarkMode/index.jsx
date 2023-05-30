import * as Styled from './styles';

import { Sun } from '@styled-icons/boxicons-regular/Sun';
import { Moon } from '@styled-icons/boxicons-regular/Moon';
import { useState } from 'react';

export const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Styled.Container
      onClick={() => setDarkMode((s) => !s)}
      darkMode={darkMode}
    >
      {darkMode ? <Moon /> : <Sun />}
    </Styled.Container>
  );
};
