import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.a`
  ${() => css``}
  position: fixed;
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.colorWhite};
  display:flex;
  align-items: center;
  justify-content: center;
  height:4rem;
  width: 4rem;
  bottom: 2rem;
  right: 2rem;
  z-index: 6;
  opacity: 0.7;
  transition: all 0.5s ease-out  ;

  &:hover{
    opacity: 1;
  }
`;
