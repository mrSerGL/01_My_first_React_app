// https://github.com/luxplanjay/react-18/tree/03-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F-%D0%B8-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5/src/components/Dropdown

import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className="Dropdown">
                <h2 >Dropdown</h2>
        <button
          type="button"
          className="Dropdovn__toggle"
          onClick={this.toggle}
        >
         {this.state.visible?'Hide':'Show'}
        </button>

        {/* <button type="button" className="Dropdovn__toggle" onClick={this.show}>
          Show
        </button>

        <button type="button" className="Dropdovn__toggle" onClick={this.hide}>
          Hide
        </button> */}

        {this.state.visible && (
          <div className="Dropdown__menu">Dropdown Menu</div>
        )}
      </div>
    );
  }
}
export default Dropdown;
