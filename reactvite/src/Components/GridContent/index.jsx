import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';
import p from 'prop-types';

export const GridContent = ({ title, background, html }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading uppercase colorDark={background}>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent colorDark={background}>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: p.string.isRequired,
  html: p.string.isRequired,
  background: p.bool,
};
