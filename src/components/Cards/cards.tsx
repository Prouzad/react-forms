import React, { Component } from 'react';
import ICards from '../../Interface';
import Card from './Card/Card';

class Cards extends Component<{ dataArr: ICards[] }> {
  constructor(props: { dataArr: ICards[] }) {
    super(props);
  }

  render(): React.ReactNode {
    const { dataArr } = this.props;
    const arr = dataArr.map((card: ICards) => {
      return <Card key={card.id} cards={card} />;
    });
    return arr.length !== 0 ? arr : <h1>Cards not found </h1>;
  }
}

export default Cards;
