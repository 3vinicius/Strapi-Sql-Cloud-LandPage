import { theme } from '../../styles/theme';
import * as Styled from './styles';
import p from 'prop-types';

export const MenuLink = ({
  children,
  link = `${theme.links.myGithub}`,
  target = '_self',
}) => {
  const href = link;
  return (
    <Styled.Container href={href} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: p.node.isRequired,
  link: p.string,
  target: p.oneOf(['_blank', '_self']),
};
