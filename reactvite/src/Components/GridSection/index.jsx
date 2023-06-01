import * as Styled from './styles';
import p from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridSection = ({
  title,
  background = false,
  grid,
  description,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container colorDark={background}>
        <Heading uppercase colorDark={background} size="big" as="h2">
          {title}
        </Heading>
        <TextComponent colorDark={background}>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={element.title}>
              <Heading uppercase size="medium" colorDark={background} as="h3">
                {element.title}
              </Heading>
              <TextComponent colorDark={background}>
                {element.description}
              </TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridSection.propTypes = {
  title: p.string.isRequired,
  background: p.bool,
  grid: p.arrayOf(
    p.shape({
      title: p.string.isRequired,
      description: p.string.isRequired,
    }),
  ).isRequired,
  description: p.string.isRequired,
};
