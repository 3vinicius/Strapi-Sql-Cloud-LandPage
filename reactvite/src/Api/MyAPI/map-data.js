import { mapSections } from './map-sections';
import { mapLink } from './map-link';
export function mapData(data = {}) {
  const {
    menu = {},
    sections = [],
    title = '',
    slug = '',
    footer: footerHtml = '',
  } = data;

  return {
    footerHtml,
    slug,
    title,
    sections: mapSections(sections),
    menu: mapLink(menu),
  };
}
//mapLink(menu)
//mapSections(sections)
