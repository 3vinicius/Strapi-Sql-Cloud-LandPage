import * as Styled from './styles';
import p from 'prop-types';
import { Menu } from '../../Components/Menu';
import { Footer } from '../../Components/Footer';
import { GoTop } from '../../Components/GoTop';

export const Base = ({ links = [], logoData, footerHtml = '', children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: p.node.isRequired,
  ...Menu.propTypes,
  ...Footer.propTypes,
};
