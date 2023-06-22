import { mapData } from './map-data';
import mock from './mock.dados';

describe('test function map-data', () => {
  it('test default values map-data', () => {
    const data = mapData();
    expect(data).toEqual({
      footerHtml: '',
      menu: {},
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
