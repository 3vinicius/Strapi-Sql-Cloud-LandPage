import { mockBase } from '../Base/stories';
import { Base } from '../Base';
import { useEffect, useState } from 'react';
import mapDate from '../../Api/map-data';
import { PageNotFound } from '../PageNotFound';

export const Home = () => {
  const [jsonDate, setJsonDate] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch('http://localhost:3020/dataJson');
        const json = await data.json();
        console.log(json);
        const datesJson = mapDate(json);
        await new Promise((e) =>
          setTimeout(() => {
            setJsonDate(datesJson[0]);
            e();
          }, 10000),
        );
      } catch (e) {
        setJsonDate(undefined);
      }
    };
    load();
  }, []);

  if (jsonDate && !jsonDate.slug) {
    console.log('oi');
    return <h1>Carregando.....</h1>;
  }
  if (jsonDate === undefined) {
    return <PageNotFound />;
  }
  if (jsonDate.slug == 'landing-page') {
    console.log(jsonDate);
    return <Base {...mockBase} />;
  }
};
