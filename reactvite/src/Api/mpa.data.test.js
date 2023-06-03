import mapDate from './map-data';
import mapLink, { mapMenuLinks } from './map-link';

const mock = {
  open_in_new_tab: false,
  logo_text: 'test',
  logo_link: '#home',
  menu: [
    {
      open_in_new_tab: false,
      link_text: 'intro',
      url: '#intro',
    },
    {
      open_in_new_tab: false,
      link_text: 'grid-one',
      url: '#grid-one',
    },
    {
      open_in_new_tab: false,
      url: '#gallery',
      link_text: 'gallery',
    },
    {
      open_in_new_tab: false,
      link_text: 'grid-two',
      url: '#grid-two',
    },
  ],
  logo: {
    url: 'myTest.svg',
  },
};

describe('Test function mapDara() ', () => {
  it('Render even if there is no date', () => {
    const pages = mapDate()[0];
    expect(pages.html).toBe('');
    expect(pages.slug).toBe('');
    expect(pages.title).toBe('');
    expect(pages.sections).toEqual([]);
    expect(pages.menu).toEqual({});

    expect(pages).toEqual({
      html: '',
      slug: '',
      title: '',
      sections: [],
      menu: {},
    });
  });

  it('Render correct dates', () => {
    const pages = mapDate([{ html: `<p>Hello</p>` }])[0];
    expect(pages.html).toBe(`<p>Hello</p>`);
  });
});

describe('Test function mapMenu()', () => {
  it('Should reder even if there is no date ', () => {
    const dates = mapLink();
    expect(dates.newTab).toBe(false);
    expect(dates.text).toBe('');
    expect(dates.link).toBe('');
    expect(dates.links).toEqual([]);
  });

  it('Should reder date if there has date ', () => {
    const dates = mapLink(mock);
    expect(dates.newTab).toBe(false);
    expect(dates.text).toBe('test');
    expect(dates.srcImg).toBe('myTest.svg');
    expect(dates.link).toBe('#home');
    expect(dates.links[0].newTab).toBe(false);
    expect(dates.links[0].children).toBe('intro');
    expect(dates.links[0].link).toBe('#intro');
  });
});

describe('Test function mapLinks()', () => {
  it('Should return even if anythings items passed ', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });
  it('Should return default values if array empy is passed ', () => {
    const links = mapMenuLinks([{}])[0];
    expect(links.children).toBe('');
    expect(links.link).toBe('');
    expect(links.newTab).toBe(false);
  });

  it('Should return map dates if items passed ', () => {
    const links = mapMenuLinks(mock.menu)[3];
    expect(links.children).toBe('grid-two');
    expect(links.link).toBe('#grid-two');
    expect(links.newTab).toBe(false);
  });
});

// { newTab: '', text: '', srcImg: '', link: '', links: [] }

// html: '',
//     slug: '',
//     title: '',
//     sections: [],
//     menu: [],
