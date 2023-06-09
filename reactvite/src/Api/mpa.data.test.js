import mapDate from './map-data';
import mapLink, { mapMenuLinks } from './map-link';
import { mapSection, mapGridImags, mapImage, mapGrid } from './map-section';
import {
  mapSectionTwoColumns,
  mapSections,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid,
} from './map-sectons';
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

    const datesDefault = mapLink();
    expect(datesDefault.newTab).toBe(false);
    expect(datesDefault.text).toBe('');
    expect(datesDefault.link).toBe('');
    expect(datesDefault.links).toEqual([]);
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

    const sectionDefault = mapSection()[0];
    expect(sectionDefault.title).toBe('');
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

describe('Test function mapGridImags(), mapImage(), mapGrid()', () => {
  it('should render default values mapGridImags()', () => {
    const gridImg = mapGridImags();
    expect(gridImg).toEqual([]);
  });

  it('should render default values mapImage()', () => {
    expect(mapImage().name).toBe('');
  });

  it('should render default values mapGrid()', () => {
    expect(mapGrid()[0].title).toBe('');
    expect(mapGrid()[0].description).toBe('');
  });
});

describe('Test function mapSections()', () => {
  it('Render even if there is no date', () => {
    const dateTwoColumns = mapSections();
    expect(dateTwoColumns).toEqual([]);
  });

  it('Return section if no defined __component ', () => {
    const dateTwoColumns = mapSections([{ __component: test }]);
    expect(dateTwoColumns[0]).toEqual({ __component: test });
  });

  it('Render dates if there is dates', () => {
    const dateTwoColumns = mapSections(mockSection);
    expect(dateTwoColumns).toEqual([
      {
        background: true,
        component: 'section.section-two-columns',
        sectionId: 'home',
        srcImg:
          'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg',
        text: 'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
        title: 'January brings us Firefox 85',
      },
      {
        background: false,
        component: 'section.section-content',
        html: '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
        sectionId: 'intro',
        title: 'news coverage and some surprises',
      },
      {
        background: true,
        component: 'section.section-grid-text',
        description:
          'Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut',
        grid: [
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
        ],
        sectionId: 'grid-one',
        title: 'My Grid',
      },
      {
        background: false,
        component: 'section.section-grid-image',
        description:
          'Distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        grid: [
          {
            altText: 'Uma paisagem com céu claro e montanhas bonitas',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_6a2049d13a.jpg',
          },
          {
            altText: 'Um livro grande aberto',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg',
          },
          {
            altText: 'Imagem do topo de uma cidade grande',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg',
          },
          {
            altText: 'Filme para câmeras antigas',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_9d32ada1f9.jpg',
          },
          {
            altText: 'Tela de notebook com Webull',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_a1_973b2a68c9.jpg',
          },
          {
            altText: 'Filme Kodak para câmeras antigas',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_b3fcbf1d93.jpg',
          },
        ],
        sectionId: 'gallery',
        title: 'Gallery',
      },
      {
        background: true,
        component: 'section.section-grid-text',
        description:
          ' Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio',
        grid: [
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
        ],
        sectionId: 'grid-two',
        title: 'Outra grid',
      },
      {
        background: false,
        component: 'section.section-content',
        html: '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><figure class="table"><table><thead><tr><th>Title 1</th><th>Title 2</th><th>Title 3</th><th>Title 4</th><th>Title 5</th></tr></thead><tbody><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr><tr><td>Content 1</td><td>Content 2</td><td>Content 3</td><td>Content 3</td><td>Content 3</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Testando</td></tr></tbody></table></figure>',
        sectionId: 'pricing',
        title: 'Pricing',
      },
      {
        background: true,
        component: 'section.section-two-columns',
        sectionId: 'contact',
        srcImg:
          'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg',
        text: 'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
        title: 'January brings us Firefox 85',
      },
    ]);
  });
});

describe('Test function mapSectionTwoColumns()', () => {
  it('Render even if there is no date', () => {
    const dateTwoColumns = mapSectionTwoColumns({});
    expect(dateTwoColumns).toEqual({
      component: '',
      title: '',
      text: '',
      background: false,
      sectionId: '',
      srcImg: '',
    });
  });

  it('Render dates if there is dates', () => {
    const dateTwoColumns = mapSectionTwoColumns(mockSection[0]);
    expect(dateTwoColumns).toEqual({
      background: true,
      component: 'section.section-two-columns',
      sectionId: 'home',
      srcImg:
        'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg',
      text: 'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
      title: 'January brings us Firefox 85',
    });
  });
});

describe('Test function mapSectionContent()', () => {
  it('Render even if there is no date', () => {
    const dateContent = mapSectionContent({});
    expect(dateContent).toEqual({
      background: false,
      component: '',
      html: '',
      sectionId: '',
      title: '',
    });
  });

  it('Render dates if there is dates', () => {
    const dateContent = mapSectionContent(mockSection[1]);
    expect(dateContent).toEqual({
      background: false,
      component: 'section.section-content',
      html: '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
      sectionId: 'intro',
      title: 'news coverage and some surprises',
    });
  });
});

describe('Test function mapTextGrid()', () => {
  it('Render even if there is no date', () => {
    const dateContent = mapTextGrid({});
    expect(dateContent).toEqual({
      component: 'section.section-grid-text',
      title: '',
      description: '',
      background: false,
      sectionId: '',
      grid: [],
    });
  });

  it('Render dates if there is dates', () => {
    const dateContent = mapTextGrid(mockSection[2]);
    expect(dateContent).toEqual({
      background: true,
      component: 'section.section-grid-text',
      description:
        'Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut',
      grid: [
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
      ],
      sectionId: 'grid-one',
      title: 'My Grid',
    });
  });
});

describe('Test function mapImageGrid()', () => {
  it('Render even if there is no date', () => {
    const dateContent = mapImageGrid({});
    expect(dateContent).toEqual({
      background: false,
      component: 'section.section-grid-image',
      description: '',
      grid: [],
      sectionId: '',
      title: '',
    });
  });

  it('Render dates if there is dates', () => {
    const dateContent = mapImageGrid(mockSection[3]);
    expect(dateContent).toEqual({
      background: false,
      component: 'section.section-grid-image',
      description:
        'Distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
      grid: [
        {
          altText: 'Uma paisagem com céu claro e montanhas bonitas',
          srcImg:
            'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_6a2049d13a.jpg',
        },
        {
          altText: 'Um livro grande aberto',
          srcImg:
            'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg',
        },
        {
          altText: 'Imagem do topo de uma cidade grande',
          srcImg:
            'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg',
        },
        {
          altText: 'Filme para câmeras antigas',
          srcImg:
            'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_9d32ada1f9.jpg',
        },
        {
          altText: 'Tela de notebook com Webull',
          srcImg:
            'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_a1_973b2a68c9.jpg',
        },
        {
          altText: 'Filme Kodak para câmeras antigas',
          srcImg:
            'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_b3fcbf1d93.jpg',
        },
      ],
      sectionId: 'gallery',
      title: 'Gallery',
    });
  });
});
