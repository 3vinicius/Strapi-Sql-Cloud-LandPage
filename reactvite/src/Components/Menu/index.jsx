import * as Styled from './styles';
import p from 'prop-types';
import { useState } from 'react';

import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavBar } from '../NavBar';
import { Menu as MenuSvg } from '@styled-icons/material/Menu';
import { Close } from '@styled-icons/evil/Close';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        onClick={() => setVisible(!visible)}
        aria-label="Close/Open Menu"
      >
        {visible ? (
          <Close aria-label="Close Menu" />
        ) : (
          <MenuSvg aria-label="Open Menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible}>
        <SectionContainer>
          <Styled.MenuContainer onClick={() => setVisible(!visible)}>
            <LogoLink {...logoData} />
            <NavBar links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavBar.propTypes,
  logoData: p.shape(LogoLink.propTypes),
};
