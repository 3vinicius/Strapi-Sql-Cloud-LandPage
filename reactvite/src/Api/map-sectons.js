export const mapSections = (sections = [{}]) => {
  return sections.map((section) => {
    section.__component;
    if (section.__component === 'section.section-grid') {
      mapSectionGrid(section);
    }
    if (section.__component === 'section.section-two-columns') {
      mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      mapSectionContent(section);
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section) => {
  return section;
};

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};
