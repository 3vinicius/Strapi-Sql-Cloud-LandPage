import * as Styled from './styles';
import p from 'prop-types';
import { Heading } from '../Heading/index';

export const LogoLink = ({ scrImg, text, link }) => {
  console.log('chegou date in logoLink');
  console.log({ scrImg, text, link });
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {scrImg ? <img src={scrImg} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  scrImg: p.node,
  text: p.node.isRequired,
  link: p.node.isRequired,
};
