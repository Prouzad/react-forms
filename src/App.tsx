import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import MainPage from 'pages/main/main';
import HeaderApp from './components/header/header';
import PageNotFound from 'pages/pageNotFound/pageNoutFound';
import AboutUs from 'pages/about/about';

import CardDate from './Date';
import ICards from 'Interface';
import Forms from 'pages/forms/Forms';

class App extends Component<unknown, { data: ICards[] }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: CardDate,
    };
    this.addNewCard = this.addNewCard.bind(this);
  }

  addNewCard = (obj: ICards) => {
    const data = this.state.data;
    this.setState({
      data: [...data, obj],
    });
  };

  render() {
    return (
      <div className="App">
        <HeaderApp />

        <Routes>
          <Route path="/" element={<MainPage dataArr={this.state.data} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/forms" element={<Forms callback={this.addNewCard} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
