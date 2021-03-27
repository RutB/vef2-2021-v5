import React, { useEffect, useState } from 'react';
import s from './News.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;


export function News({group = '', length = -1}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;


      try {
        const result = await fetch(apiUrl+group);

        if (!result.ok) {
          throw new Error('result not ok');
        }

        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt gögn.');
        return;
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    fetchData();
  }, [group]);


  if (error) {
    return (
      <p className={s.news__error}>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p className={s.news__loading}>Sæki gögn...</p>
    );
  }

  const items = data.items;
  console.log('items', items);
  const fiveItems = []
  if (length !== -1 && items) {
    for (let i = 0; i < length; i++) {
      fiveItems.push(items[i]);
    }
  }

  return (
    <div className={s.news__container}>
      <h3 className={s.news__title}>{data.title}</h3>

      <div className={s.news__groupslinks}>

        {length === -1 && items &&
        items.map((article) => {
          return <a key={article.title} className={s.news__link} href={article.link}>{article.title}</a>
        })}

        {length !== -1 && fiveItems &&
        fiveItems.map((article) => {
          return <a key={article.title} className={s.news__link} href={article.link}>{article.title}</a>
        })}

        {length === -1 &&
        <a className={s.news__grouplink} href={'/'}>Til baka</a>
        }

        {length !== -1 &&
        <a className={s.news__grouplink} href={`/${group}`}>{data.title}</a>
        }
      </div>
    </div>
  );
}