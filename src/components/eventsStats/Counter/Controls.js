import React from 'react';

 //*  поднятие состояния - передаем методы как аргумент

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">

    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
    <button type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
  </div>
);

export default Controls;