import * as Styled from './styles';
import p from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavBar } from '../NavBar';

export const Menu = ({ links = [], logoData }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...logoData} />
          <NavBar links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavBar.propTypes,
  logoData: p.shape(LogoLink.propTypes),
};
