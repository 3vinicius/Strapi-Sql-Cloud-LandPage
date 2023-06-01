import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.div`
  ${({ theme }) => css`
  text-align:center;
  border: 0.1rem solid ${theme.colors.mediumGray};
  a{color: inherit;
  text-decoration: none;
  }

  & ${TextComponent} {
    font-size: ${theme.fonts.sizes.small}
  }

  & ${SectionContainer}{
    padding-top: 0px ;
    padding-bottom: 0px;
  }
  `}
`;
