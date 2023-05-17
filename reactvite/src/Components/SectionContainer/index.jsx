import * as Styled from './styles';
import p from 'prop-types';

export const SectionContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: p.node.isRequired,
};
