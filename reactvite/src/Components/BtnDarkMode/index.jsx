import * as Styled from './styles';

import { Sun } from '@styled-icons/boxicons-regular/Sun';
import { Moon } from '@styled-icons/boxicons-regular/Moon';
import { useState } from 'react';

export const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Styled.Container
      aria-label="btn-DarkMode"
      onClick={() => setDarkMode((s) => !s)}
      darkMode={darkMode}
    >
      {darkMode ? (
        <Moon aria-label="onDarkMode" />
      ) : (
        <Sun aria-label="offDarkMode" />
      )}
    </Styled.Container>
  );
};
