import * as Styled from './styles';
import p from 'prop-types';

export const TextComponent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

TextComponent.propTypes = {
  children: p.node.isRequired,
};
