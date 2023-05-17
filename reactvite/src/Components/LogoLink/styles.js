/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`;
  `}
  display: flex;
  align-items: center;
  > img {
    max-width: 8rem;
    max-height: 8rem;
  }
`;
