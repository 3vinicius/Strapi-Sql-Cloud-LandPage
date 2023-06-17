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
  border: 1px solid #060a18;
  box-shadow: 0px 0px 5px 2px #00000054;


  &:hover{
    opacity: 1;
  }
`;
