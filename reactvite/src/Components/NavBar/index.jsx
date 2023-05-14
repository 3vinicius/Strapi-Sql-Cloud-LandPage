import { MenuLink } from '../MenuLink';
import * as Styled from './styles';
import p from 'prop-types';

export const NavBar = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link, index) => {
        return <MenuLink key={index} {...link} />;
      })}
    </Styled.Container>
  );
};

NavBar.propTypes = {
  links: p.arrayOf(
    p.shape({
      children: p.string.isRequired,
      target: p.string.isRequired,
      href: p.string.isRequired,
    }),
  ),
};
