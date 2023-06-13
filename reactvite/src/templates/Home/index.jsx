import { mockBase } from '../Base/stories';
import { Base } from '../Base';
import { useEffect, useState } from 'react';
import mapDate from '../../Api/map-data';
import { PageNotFound } from '../PageNotFound';

export const Home = () => {
  const [jsonDate, setJsonDate] = useState();

  useEffect(() => {
    try {
      const load = async () => {
        const data = await fetch('http://localhost:320/dataJson');
        const json = await data.json();
        console.log(json);
        const datesJson = mapDate(json);
        setJsonDate(datesJson[0]);
      };
      load();
    } catch (e) {
      setJsonDate(undefined);
    }
  }, []);

  if (jsonDate == undefined) {
    return <PageNotFound />;
  }
  if (jsonDate.slug == null) {
    return <h1>Carregando.....</h1>;
  }
  if (jsonDate.slug == 'landing-page') {
    console.log(jsonDate);
    return <Base {...mockBase} />;
  }
};
