import * as Styled from './styles';
import p from 'prop-types';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ children }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{children}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  children: p.node.isRequired,
};
