export function mapSections(sections = []) {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [{}] } = section;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
      return { ...section, text_grid, image_grid };
    }
    return section;
  });
}

const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: {
      data: {
        attributes: {
          formats: {
            medium: { url: srcImg },
          },
        },
      },
    } = '',
  } = section;

  const sectionId = section.metadata[0].section_id;
  const background = section.metadata[0].background;

  return {
    component,
    title,
    text,
    background,
    sectionId,
    srcImg,
  };
};

const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

const mapTextGrid = (section = {}) => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [{}],
  } = section;
  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};

const mapImageGrid = (section) => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  const grid = section.image_grid[0].images.data;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img) => {
      const {
        attributes: {
          formats: {
            medium: { url: srcImg },
          },
          altText = '',
        } = '',
      } = img;

      return {
        srcImg,
        altText,
      };
    }),
  };
};
