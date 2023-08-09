import { css } from 'style/css';

export default function Home() {
  return (
    <main>
      <div
        className={css({
          display: 'flex',
        })}
      >
        <div>item</div>
        <div>item2</div>
      </div>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gridColumnGap: '0px',
          gridRowGap: '0px',
        })}
      >
        <div
          className={css({
            gridArea: '1 / 1 / 2 / 3',
          })}
        >
          a
        </div>
        <div
          className={css({
            gridArea: '1 / 3 / 2 / 4',
          })}
        >
          b
        </div>
        <div
          className={css({
            gridArea: '2 / 1 / 3 / 4',
          })}
        >
          c
        </div>
      </div>
    </main>
  );
}
