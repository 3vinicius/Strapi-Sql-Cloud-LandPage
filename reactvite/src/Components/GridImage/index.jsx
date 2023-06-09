import * as Styled from './styles';
import p from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ background, title, description, grid, id }) => {
  return (
    <div id={id}>
      <SectionBackground background={background}>
        <Styled.Container colorDark={background}>
          <Heading uppercase size="big" as="h2" colorDark={background}>
            {title}
          </Heading>
          <TextComponent colorDark={background}>{description}</TextComponent>
          <Styled.Grid>
            {grid.map((element) => (
              <Styled.GridElement key={element.id}>
                <Styled.Imagem src={element.srcImg} alt={element.altText} />
              </Styled.GridElement>
            ))}
          </Styled.Grid>
        </Styled.Container>
      </SectionBackground>
    </div>
  );
};

GridImage.propTypes = {
  background: p.bool.isRequired,
  title: p.string.isRequired,
  description: p.string.isRequired,
  grid: p.arrayOf(
    p.shape({
      id: p.number,
      title: p.string,
      url: p.string,
    }),
  ).isRequired,
  id: p.string,
};
