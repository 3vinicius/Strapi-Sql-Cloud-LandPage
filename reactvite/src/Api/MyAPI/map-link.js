export function mapLink(menuDate = {}) {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo: { url: srcImg } = '', //no have url in logo
    logo_link: link = '',
    menu_links: links = [],
  } = menuDate;
  return {
    newTab,
    text,
    srcImg,
    link,
    links: mapMenuLinks(links),
  };
}

export const mapMenuLinks = (links = []) => {
  return links.map((value) => {
    const {
      open_in_new_tab: newTab = false,
      url: link = '',
      link_text: children = '',
    } = value;
    return {
      newTab,
      children,
      link,
    };
  });
};
