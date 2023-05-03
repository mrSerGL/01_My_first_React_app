import React, { Component } from 'react';
// import css from './Input.module.css';

class Input extends Component {
state ={
    inputValue: "",
};

handlerInputChange = event => {
    console.log(event.currentTarget.value);
    this.setState({inputValue: event.currentTarget.value})
  };

render() {
return (
<>
<input
          type="text"
          value={this.state.inputValue}
          onChange={this.handlerInputChange}
        />
 </>
)
  }
}
export default Input;