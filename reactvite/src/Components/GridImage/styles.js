import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
  padding: 200px
  ${TextComponent}{
    margin-bottom: ${theme.spacings.xhuge};
    ;
  }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large}
  `}
`;

export const GridElement = styled.div`
  ${() => css`
  overflow: hidden;
  `}
`;

export const Imagem = styled.img`
  ${() => css`
    width:100%;
    height: 100%;
    transition: all 300ms ease-in-out;

    &:hover{
      transform: scale(1.2)
    }
  `}
`;
