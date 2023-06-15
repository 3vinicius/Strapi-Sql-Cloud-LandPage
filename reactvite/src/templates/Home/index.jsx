import { mockBase } from '../Base/stories';
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
        const data = await fetch('http://localhost:3020/dataJson');
        const json = await data.json();
        const datesJson = mapDate(json);
        await new Promise((e) =>
          setTimeout(() => {
            setJsonDate(datesJson[0]);
            e();
          }, 1000),
        );
      } catch (e) {
        setJsonDate(undefined);
      }
    };
    load();
  }, []);

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
        links={link}
        footerHtml={footerHtml}
        logoData={(text, links, srcImg)}
      >
        {sections.map((section, index) => {
          const key = `${slug}-${index}`;

          /* GridTwoColumn} from '../../Components/GridTwoColumn';
          import {GridSection} from '../../Components/GridSection';
          import {GridImage} from '../../Components/GridImage';
          import {GridContent} */
          if (section.component === 'section.section-two-columns') {
            return <GridTwoColumn key={key} {...section} />;
          }
          if (section.component === 'section.section-content') {
            return <GridContent key={key} {...section} />;
          }
          if (section.component === 'section.section-grid-text') {
            return <GridText key={key} {...section} />;
          }
          if (section.component === 'section.section-grid-image') {
            console.log({ ...section });
            return <GridImage key={key} {...section} />;
          }
        })}
      </Base>
    );
  }
};
