import s from './News.module.scss';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { News } from '../components/news/News';
import { NotFound } from './NotFound';

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsPage() {

  let { id } = useParams();

  const [loading, setLoading] = useState(false); // eslint-disable-line
  const [error, setError] = useState(null);    // eslint-disable-line
  const [found, setFound] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      const url = apiUrl+id;

      try {
        const result = await fetch(url);

        if (!result.ok) {
          if (result.status === 404) {
            setFound(false);
          } else {
            throw new Error('result not ok');
          }
        }

      } catch (e) {
        setError('Gat ekki sótt gögn.');
        return;
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  });

  if (!found) {
    return <NotFound/>
  }

  return (
    <div className={s.news__container}>
      <News group={id}/>
    </div>
  )
}