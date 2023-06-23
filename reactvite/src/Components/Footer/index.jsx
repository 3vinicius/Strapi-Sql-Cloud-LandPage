import * as Styled from './styles';
import p from 'prop-types';
import styled, { css } from 'styled-components';
import darkMode from '../../Utils/stylesUtils';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';
import { Github } from '@styled-icons/bootstrap/Github';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';

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
          <div className="container-icon-footer">
            <a
              target="_blank"
              href="https://github.com/3vinicius"
              rel="noreferrer"
            >
              <Github size="30px" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vinícius-amorim-5635b0182/"
              rel="noreferrer"
            >
              <Linkedin size="30px" />
            </a>
          </div>
        </div>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: p.string,
};
