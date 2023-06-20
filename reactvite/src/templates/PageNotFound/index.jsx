import p from 'prop-types';
import { GridContent } from '../../Components/GridContent';

import styled, { css } from 'styled-components';

const Container = styled.div`
  ${() => css`
    a{
      color: #DC143C
    }
  `}
`;

export const PageNotFound = () => {
  return (
    <Container>
      <GridContent
        background={true}
        title="Error 404 !"
        html="<p>A página não foi encontrada <a href='/'>Clique para voltar</a> </p>"
      />
    </Container>
  );
};
