import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme, colorDark }) => css`
  ${TextComponent}{
    margin-bottom: ${theme.spacings.xhuge};
    background: ${
      colorDark ? theme.colors.primaryColor : theme.colors.colorWhite
    };
  }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large}
  `}
`;

export const GridElement = styled.div`
  ${() => css`
  ${Title}{
    position: relative;
    left: 5rem;
  }
  ${Title}::before{
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;
    top: -2rem;
    left: -5rem;
    transform: rotate(5deg);
  }
  `}
`;
