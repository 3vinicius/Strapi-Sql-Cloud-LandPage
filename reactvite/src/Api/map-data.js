import mapLink from './map-link';
import { mapSections } from './map-sectons';

/* eslint-disable */
export default function mapDate(pagesDate = [{}]) {

  return pagesDate.map((key) => {
    const {html= '',
    slug= '',
    title= '',
    sections= [],
    menu = {},} = key

  return {
    html,
    slug,
    title,
    sections: mapSections(sections),
    menu: mapLink(menu),
  };
  })
};


// const {inspect} = require('util');

// const dadosD = require('./dados.json');

// const dates = mapDate(dadosD)[0].title

// console.log(inspect(dates,null,null,true))
