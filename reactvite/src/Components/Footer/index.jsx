import * as Styled from './styles';
import p from 'prop-types';
import styled, { css } from 'styled-components';
import darkMode from '../../Utils/stylesUtils';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

const ContainerDiv = styled(TextComponent)`
  ${({ theme, colorDark }) => css`
    font-size: ${theme.fonts.sizes.medium};
    ${darkMode(colorDark)};
  `}
`;

export const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <div>
          <ContainerDiv>{html}</ContainerDiv>
        </div>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: p.string,
};
