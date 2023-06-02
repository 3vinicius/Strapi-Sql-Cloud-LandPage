/* eslint-disable */
export default function mapDate(pagesDate = [{}]) {
  return {
    html: pagesDate[0].html,
    slug: pagesDate[0].slug,
    title: pagesDate[0].title,
    sections: pagesDate[0].sections,
    menu: pagesDate[0].menu,
  };
}


