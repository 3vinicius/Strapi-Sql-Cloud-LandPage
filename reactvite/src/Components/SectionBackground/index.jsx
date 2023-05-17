import * as Styled from './styles';
import p from 'prop-types';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>{children}</Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: p.node.isRequired,
  background: p.bool,
};
