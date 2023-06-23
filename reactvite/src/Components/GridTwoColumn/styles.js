import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Container as Texts } from '../TextComponent/styles';
import darkMode from '../../Utils/stylesUtils.js';

// primaryColor: string;
//         secondaryColor: string;
//         colorWhite: string;

export const Container = styled.div`
  ${({ theme, background }) => css`

    display:grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    @media(max-width: 850px){
      grid-template-columns: 1fr;
      text-align: center;
    }


    ${Texts}{
      ${darkMode(background)}
    }
    ${Title}{
      margin-bottom: ${theme.spacings.large};
      ${darkMode(background)}
    }

  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
  @media ${theme.myMedias.letMedium}{
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImgContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Img = styled.img`
  ${({ theme }) => css`
  width: 100%;
  min-width: 200px;
  overflow: hidden;
  @media(max-width: 850px){
      width: 400px;
    }
  @media ${theme.myMedias.letMedium}{
    width:300px;
  }
  `}
`;
