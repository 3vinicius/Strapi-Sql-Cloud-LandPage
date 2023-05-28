import * as Styled from './styles';
// import p from 'prop-types';
import { Menu } from '../../Components/Menu';
import mockLinks from './mock.links';
import { Heading } from '../../Components/Heading';

const logoDate = {
  text: 'Logo',
  link: '#target',
  srcImg: '',
};

export const Home = () => {
  return (
    <Styled.Container>
      <Menu links={mockLinks} logoData={logoDate} />
      <Heading>Titulo 1</Heading>
    </Styled.Container>
  );
};
