import { useEffect, useState } from 'react';

import mapDate from '../../Api/map-data';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import { GridTwoColumn } from '../../Components/GridTwoColumn';
import { GridText } from '../../Components/GridText';
import { GridImage } from '../../Components/GridImage';
import { GridContent } from '../../Components/GridContent';

export const Home = () => {
  const [jsonDate, setJsonDate] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        //const data2 = await fetch('http://localhost:3020/dataJson');
        const data = await fetch(
          'http://localhost:1337/api/pages?populate=deep',
        );

        const json = await data.json();
        console.log([json.data[0].attributes]);
        // const datesJson = mapDate(json.data[1].attributes);

        await new Promise((e) =>
          setTimeout(() => {
            setJsonDate([{}]);
            e();
          }, 1000),
        );
      } catch (e) {
        setJsonDate(undefined);
      }
    };
    load();
  }, []);

  console.log(mapDate(jsonDate));

  if (jsonDate && !jsonDate.slug) {
    return <Loading />;
  }
  if (jsonDate === undefined) {
    return <PageNotFound />;
  }
  if (jsonDate.slug == 'landing-page') {
    const { menu, footerHtml, sections, slug } = jsonDate;
    const { links, text, link, srcImg } = menu;

    return (
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section, index) => {
          const key = `${slug}-${index}`;
          console.log(section);
          if (section.component === 'section.section-two-columns') {
            return (
              <GridTwoColumn
                key={key}
                {...section}
                {...section}
                id={section.sectionId}
              />
            );
          }
          if (section.component === 'section.section-content') {
            return (
              <GridContent key={key} {...section} id={section.sectionId} />
            );
          }
          if (section.component === 'section.section-grid-text') {
            return (
              <GridText
                key={key}
                {...section}
                {...section}
                id={section.sectionId}
              />
            );
          }
          if (section.component === 'section.section-grid-image') {
            return (
              <GridImage
                key={key}
                {...section}
                {...section}
                id={section.sectionId}
              />
            );
          }
        })}
      </Base>
    );
  }
};
