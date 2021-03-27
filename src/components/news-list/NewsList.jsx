import s from './NewsList.module.scss';

import { News } from '../news/News';

export function NewsList() {

  return (
    <div className={s.newslist__container}>
      <div className={s.newslist__group}>
        <News group="allar" length={5}/>
      </div>
      <div className={s.newslist__group}>
        <News group="innlent" length={5}/>
      </div>
      <div className={s.newslist__group}>
        <News group="erlent" length={5}/>
      </div>
      <div className={s.newslist__group}>
        <News group="ithrottir" length={5}/>
      </div>
      <div className={s.newslist__group}>
        <News group="menning" length={5}/>
      </div>
    </div>
  );
}