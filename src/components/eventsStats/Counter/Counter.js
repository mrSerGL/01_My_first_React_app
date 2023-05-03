// https://github.com/luxplanjay/react-18/tree/03-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F-%D0%B8-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5/src/components/Counter

import React from 'react';
// import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';  //   импорт  <span className="Counter__value">>
import './Counter.css';

class Counter extends React.Component {

//* значения по умолчанию
static defaultProps ={
  initialValue: 5,
}

static propTypes = {
  // .............
}

  //* === Old School State ===
  // constructor(){
  //   super();

  //   this.state={
  //     value: 5,
  //   };
  // }

  //* публічна властивість State
  state = {
    // value: 5,
    value: this.props.initialValue,
  };

  //* публічна властивість method
  handlerIncrement = event => {
    // this.setState({value: 10,})

    this.setState(prevState=>({
         value: prevState.value+1,
      }
    ));
  };

  //* SyntheticEvent Object
  handlerDecrement = event => {
   
    // console.log(event.target);

    //* сохраняем свойство временного Event
    // const target = event.target;
    // const { target } = event;

    this.setState((prevState)=>{
      return {
        value: prevState.value-1,
      }
    });
    // console.log('Click "-"');
  };

  render() {
    return (
      <div className="Counter">

        <Value value={this.state.value}/>
        {/* <span className="Counter__value">{this.state.value}</span> */}

        <Controls 
           onIncrement={this.handlerIncrement}
           onDecrement={this.handlerDecrement} 
        />

          {/* <div className="Counter__controls">
          <button tupe="button" onClick={this.handlerDecrement}>
            Уменьшить на 1
          </button>
          <button type="button" onClick={this.handlerIncrement}>
            Увеличить на 1
          </button>
        </div> */}

      </div>
    );
  }
}

export default Counter;
