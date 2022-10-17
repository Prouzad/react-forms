import React from 'react';
import style from '../cards.module.css';
import ICards from '../../../Interface';

const Card = (props: { cards: ICards }): JSX.Element => {
  const item = props.cards;
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={style.title}>
        <h1
          style={{
            fontSize: 25,
            margin: 0,
          }}
        >
          {item.name}
        </h1>
        <p>{item.year}</p>
      </div>
      <div className={style.plot} style={{ textOverflow: 'ellipsis' }}>
        {item.plot}
      </div>
    </div>
  );
};

export default Card;
