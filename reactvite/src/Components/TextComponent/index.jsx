import * as Styled from './styles';
import p from 'prop-types';

export const TextComponent = ({ children, colorDark }) => {
  return (
    <Styled.Container
      colorDark={colorDark}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

TextComponent.propTypes = {
  children: p.node.isRequired,
  colorDark: p.bool,
};
