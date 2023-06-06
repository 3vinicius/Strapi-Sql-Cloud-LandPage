import mapDate from './map-data';
import mapLink, { mapMenuLinks } from './map-link';
import { mapSection } from './map-section';
import mockSection from './mock.section';

/* This is on filed test for import json file
import { readFile } from 'fs/promises';
async function returnJSON() {
  // eslint-disable-next-line
  const dateJson = JSON.parse(await readFile('./dados.json', 'utf8'));
  return dateJson[0].section;
}

const mySectionMock = returnJSON(); */

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

describe('Test function mapData() ', () => {
  it('Render even if there is no date', () => {
    const pages = mapDate()[0];
    expect(pages.html).toBe('');
    expect(pages.slug).toBe('');
    expect(pages.title).toBe('');
    expect(pages.sections).toEqual([]);
    expect(pages.menu).toEqual({
      link: '',
      links: [],
      newTab: false,
      srcImg: undefined,
      text: '',
    });

    expect(pages).toEqual({
      html: '',
      slug: '',
      title: '',
      sections: [],
      menu: {
        link: '',
        links: [],
        newTab: false,
        srcImg: undefined,
        text: '',
      },
    });
  });

  it('Render correct dates', () => {
    const pages = mapDate([{ html: `<p>Hello</p>` }])[0];
    expect(pages.html).toBe(`<p>Hello</p>`);
  });
});

describe('Test function mapMenu()', () => {
  it('Should reder even if there is no date ', () => {
    const dates = mapLink({});
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

describe('Test function mapSection()', () => {
  it('should return default values if array is empy is passed', () => {
    const section = mapSection([{}])[0];
    expect(section.title).toBe('');
    expect(section.background).toBe(true);
    expect(section.name).toBe('');
    expect(section.image).toEqual({
      alternativeText: '',
      height: 0,
      name: '',
      size: 0,
      url: '',
      width: 0,
    });
    expect(section.text_grid).toEqual([]);
    expect(section.image_grid).toEqual([]);
  });

  it('Should return map dates if items passed', () => {
    const section = mapSection(mockSection)[0];
    expect(section.title).toBe('January brings us Firefox 85');
    expect(section.background).toBe(true);
    expect(section.name).toBe('Home');
    expect(section.image).toEqual({
      alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
      height: 730,
      name: 'javascript.svg',
      size: 30.31,
      url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg',
      width: 1030,
    });
    expect(section.text_grid).toEqual([]);
    expect(section.image_grid).toEqual([]);
  });

  it('Should return map dates from test_grid and imagegrid if items grid passed', () => {
    const textGrid = mapSection(mockSection)[2];
    expect(textGrid.text_grid).toEqual([
      {
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        title: 'Teste 1',
      },
      {
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        title: 'Teste 2',
      },
      {
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        title: 'Teste 3',
      },
    ]);

    const imageGrid = mapSection(mockSection)[3];
    expect(imageGrid.image_grid).toEqual([
      {
        alternativeText: '',
        height: 0,
        name: '',
        size: 0,
        url: '',
        width: 0,
      },
      {
        alternativeText: '',
        height: 0,
        name: '',
        size: 0,
        url: '',
        width: 0,
      },
      {
        alternativeText: '',
        height: 0,
        name: '',
        size: 0,
        url: '',
        width: 0,
      },
      {
        alternativeText: '',
        height: 0,
        name: '',
        size: 0,
        url: '',
        width: 0,
      },
      {
        alternativeText: '',
        height: 0,
        name: '',
        size: 0,
        url: '',
        width: 0,
      },
      {
        alternativeText: '',
        height: 0,
        name: '',
        size: 0,
        url: '',
        width: 0,
      },
    ]);
  });
});

describe('Test function mapSections()', () => {
  it('Render even if there is no date', () => {});
});

// {
//   alternativeText: '',
//   height: 0,
//   name: '',
//   size: 0,
//   url: '',
//   width: 0,
// }
