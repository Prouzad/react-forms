import ICards, { ICallback } from 'Interface';
import React, { Component } from 'react';

import styleClass from './AddCards.module.css';

class AddCards extends Component<{
  callback: (obj: ICards) => void;
  changeDisabled: (num: number) => void;
  changeShowState: () => void;
  dis: boolean;
}> {
  name: React.RefObject<HTMLInputElement>;
  year: React.RefObject<HTMLInputElement>;
  plot: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;
  constructor(props: ICallback) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.name = React.createRef();
    this.year = React.createRef();
    this.plot = React.createRef();
    this.file = React.createRef();
  }
  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const obj = {
      name: this.name.current?.value,
      year: this.year.current?.value,
      plot: this.plot.current?.value,
      image: URL.createObjectURL(this.file.current!.files![0]),
    };
    this.props.changeShowState();
    setTimeout(() => {
      this.name.current!.value = '';
      this.year.current!.value = '';
      this.plot.current!.value = '';
      this.props.callback(obj);
    }, 1500);
  }

  handleChange(event: { preventDefault: () => void }) {
    event.preventDefault();
    const obj = {
      name: this.name.current?.value,
      year: this.year.current?.value,
      plot: this.plot.current?.value,
    };

    const resultArr = Object.values(obj).filter((item) => item!.length > 0);
    resultArr.length > 0 ? this.props.changeDisabled(1) : this.props.changeDisabled(0);
  }
  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { dis } = this.props;
    return (
      <form
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label>
          Name:
          <input
            placeholder="Write name cinema"
            type="text"
            ref={this.name}
            className={styleClass.myInput}
            required
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            placeholder="Write year cinema"
            min="1900"
            max="2099"
            step="1"
            ref={this.year}
            className={styleClass.myInput}
            required
          />
        </label>
        <label>
          Plot:
          <input
            placeholder="Write plot cinema"
            type="text"
            ref={this.plot}
            size={50}
            className={styleClass.myInput}
            required
          />
        </label>
        <label>
          image:
          <input placeholder="Write plot cinema" type="file" ref={this.file} required />
        </label>
        <input type="submit" value="Submit" disabled={dis} className={styleClass.myBtn} />
      </form>
    );
  }
}

export default AddCards;
