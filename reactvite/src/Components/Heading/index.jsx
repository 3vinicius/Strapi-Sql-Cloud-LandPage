import * as Styled from './styles';
import p from 'prop-types';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      uppercase={uppercase}
      as={as}
      colorDark={colorDark}
      size={size}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: p.node.isRequired,
  colorDark: p.bool,
  as: p.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: p.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: p.bool,
};
