import * as Styled from './styles';
import p from 'prop-types';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Loading = () => {
  return (
    <Styled.Container />
  );
};
