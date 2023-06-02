import mapDate from './map-data';

const mock = [
  {
    html: '',
    slug: '',
    title: '',
    sections: [],
    menu: {},
  },
];

describe('Sould test mapDara() ', () => {
  it('Render even if there is no date', () => {
    const pages = mapDate(mock);
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
    const pages = mapDate([{ html: `<p>Hello</p>` }]);
    expect(pages.html).toBe(`<p>Hello</p>`);
  });
});

// html: '',
//     slug: '',
//     title: '',
//     sections: [],
//     menu: [],
