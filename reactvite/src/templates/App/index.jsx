import * as Styled from './styles';
import P from 'prop-types';

export const Home = () => {
  return (
    <div>
      <Styled.Wrapper background="">
        <h1>Hello</h1>
      </Styled.Wrapper>
    </div>
  );
};

Home.propTypes = {
  children: P.node.isRequired,
};
