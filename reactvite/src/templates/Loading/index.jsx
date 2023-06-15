// import * as Styled from './styles';
// import p from 'prop-types';

import styled, { css } from 'styled-components';
import { Loader as Load } from '@styled-icons/remix-fill/Loader';

//import { GridContent } from '../../Components/GridContent';

export const Container = styled.div`
  ${() => css`
    background-color: #0A1128;
  width: 100vw;
  height: 100vh;

    @keyframes rotation {
      0%{
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
  }

  `}
`;

const RedLoad = styled(Load)`
  color: #DC143C;
  display:block;
    position: absolute;
    width: 100px;
    height: 100px;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    animation: rotation infinite 2s linear;

`;

export const Loading = () => {
  return (
    <Container>
      <RedLoad size="100" />
    </Container>
  );
};
