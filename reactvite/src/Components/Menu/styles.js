import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const navVisible = () => css`
  visibility: visible;
  opacity:1;
`;
export const Container = styled.div`
  ${({ theme, visible }) => css`
  position: fixed;
  z-index: 5;
  top:0;
  left:0;
  right: 0;
  width:100%;
  border-bottom: ${theme.colors.mediumGray} ;
  background: ${theme.colors.colorWhite} ;
  transition: all 300ms ease-in-out;
  box-shadow: 0px 1px 5px #00000070;
  & > ${SectionContainer}{
    padding-top:0;
    padding-bottom:0;
  }

  & ${Heading}{
    margin-top: 0;
    margin-bottom:0;
  }


  @media ${theme.myMedias.letMedium} {
    visibility: hidden;
    opacity: 0;
    ${visible && navVisible()}
    & > ${SectionContainer}{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:1fr;
    height: 100vh;
    align-items: start;
    overflow-y: auto;

    body{
      overflow: hidden;
    }

  }

  & ${Heading}{
    padding: ${theme.spacings.large};
    display: flex;
    justify-content: center;
  }
  }
  `}


`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${theme.myMedias.letMedium}{
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width:4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color:${theme.colors.colorWhite};
    border: 1px solid #060a18;
    box-shadow: 0px 0px 5px 2px #00000054;
    display: none;



    @media ${theme.myMedias.letMedium}{

      display: flex;
      align-items: center;
      justify-content:center;
    }

    > svg {
      width:2.5rem;
      height:2.5rem;
    }
  `}
`;
