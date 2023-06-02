import mapDate from './map-data';

describe('Sould test mapDara() ', () => {
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

// html: '',
//     slug: '',
//     title: '',
//     sections: [],
//     menu: [],
