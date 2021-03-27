import s from './Layout.module.scss';

export function Layout({children }) {
  return (
    <div className={s.layout}>
        <h1>RÚV fréttir</h1>
      <main className={s.layout__main}>
        {children}

        <hr/>
        <span>
           {'Fréttir frá '}
           <a href="https://www.ruv.is/frettir">RÚV</a>
        </span>

      </main>
    </div>
  )
}