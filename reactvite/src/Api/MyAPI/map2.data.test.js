import { mapData } from './map-data';
import mock from './mock.dados';
import { mapLink } from './map-link';

describe('test function map-data', () => {
  it('test default values map-data', () => {
    const data = mapData();
    expect(data).toEqual({
      footerHtml: '',
      menu: {
        link: '',
        links: [],
        newTab: false,
        srcImg: undefined,
        text: '',
      },
      sections: [],
      slug: '',
      title: '',
    });
  });

  it('test values map-data', () => {
    const data = mapData(mock);
    expect(data.footerHtml).toEqual(
      '<a href="https://github.com/3vinicius"><p>Criado por Vinicius Amorim</p><a\\>',
    );
  });
});

describe('test function map-link', () => {
  it('test default values map-link', () => {
    const data = mapLink();
    expect(data).toEqual({
      link: '',
      links: [],
      newTab: false,
      srcImg: undefined,
      text: '',
    });
  });

  it('test values map-data', () => {
    const data = mapLink(mock.menu);
    expect(data.link).toEqual('https://github.com/3vinicius');
    expect(data.links[0].children).toEqual('Introdução');
  });
});

describe('test function map-Section', () => {
  it('test default values map-Section', () => {
    const data = mapLink();
    expect(data).toEqual({
      link: '',
      links: [],
      newTab: false,
      srcImg: undefined,
      text: '',
    });
  });

  it('test values map-Section', () => {
    const data = mapLink(mock.menu);
    expect(data.link).toEqual('https://github.com/3vinicius');
    expect(data.links[0].children).toEqual('Introdução');
  });
});
