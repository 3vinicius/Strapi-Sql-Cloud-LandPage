import * as Styled from './styles.js';
import p from 'prop-types';
import { SectionBackground } from '../SectionBackground/index.jsx';
import { Heading } from '../Heading/index.jsx';
import { TextComponent } from '../TextComponent/index.jsx';

export const GridTwoColumn = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background} id="grid-two">
        <Styled.TextContainer>
          <Heading uppercase as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImgContainer>
          <Styled.Img src={srcImg} alt={title} />
        </Styled.ImgContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: p.string.isRequired,
  text: p.string.isRequired,
  srcImg: p.string,
  background: p.bool,
};
