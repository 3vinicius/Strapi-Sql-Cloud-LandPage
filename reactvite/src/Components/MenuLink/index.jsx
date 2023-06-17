import { theme } from '../../styles/theme';
import * as Styled from './styles';
import p from 'prop-types';

export const MenuLink = ({
  children,
  href = `${theme.links.myGithub}`,
  target = '_blank',
}) => {
  console.log(children);
  return (
    <Styled.Container href={href} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: p.node.isRequired,
  href: p.string,
  target: p.oneOf(['_blank', '_self']),
};
