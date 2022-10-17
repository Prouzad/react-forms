import Cards from 'components/Cards/cards';
import Search from 'components/SearchBar/search';
import React, { Component } from 'react';
import ICards from 'Interface';

class MainPage extends Component<
  {
    dataArr: ICards[];
  },
  { data: ICards[]; term: string }
> {
  constructor(props: { dataArr: ICards[] }) {
    super(props);
    this.state = {
      data: this.props.dataArr,
      term: '',
    };
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    const formData = JSON.parse(localStorage.getItem('term')!);
    if (formData) {
      this.setState({
        term: formData,
      });
    }
  }

  componentWillUnmount(): void {
    const result = this.state.term;
    localStorage.setItem('term', JSON.stringify(result));
  }

  onChangeInput = (e: { target: { value: string } }) => {
    const res = e.target.value;
    this.setState({
      term: res,
    });
  };

  render() {
    const { data, term } = this.state;
    const dataFilterResult = data.filter((item) => {
      if (term?.length === 0) {
        return item;
      }

      return item.name!.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });

    return (
      <>
        <Search callback={this.onChangeInput} term={term} />
        <Cards dataArr={dataFilterResult} />;
      </>
    );
  }
}

export default MainPage;
