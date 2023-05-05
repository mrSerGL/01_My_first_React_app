import { Component } from 'react';

import css from './Components.module.css';

import RouteApp from './components/Routing/RouteApp';
import Counter from './components/eventsStats/Counter/';
import Dropdown from './components/eventsStats/Dropdown/';
import ColorPicker from './components/eventsStats/ColorPicker/';
// import TodoList from './components/eventsStats/TodoList';
// import initislTodos from './components/eventsStats/TodoList/todos.json';
import Input from 'components/Forms/Input';
import Form from 'components/Forms/Form';
import ToDo from './components/TodoList';
import Clock from './components/lifeCycle/Clock';
import Tabs from 'components/lifeCycle/Tabs';
import tabs from './components/lifeCycle/Tabs/tabs.json';



// - ================== class area ==============================

class Components extends Component {
  state = {

  };



  // ===================== render area ========================

  render() {
    // const { todos } = this.state;

    // const totalTodoCount = todos.length;
    // const completedTodosCount = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0,
    // );

    return (
      <div className='container'>
        <RouteApp />

        <h3>Tabs - работа с активным элементом в коллекции + shouldComponentUpdate+PureComponent</h3>
        <div className={css.section}>
         <Tabs items={tabs}/>
        </div>


        <h2>Clock без утечки памяти</h2>
        <div className={css.section}>
           <Clock />
        </div>


        <h2>To Do с модалкой</h2>
        <div className={css.section}>
           <ToDo />
        </div>



        <h2>Form</h2>
        <Form onSubmit={this.formSubmitHadler}/>

        <h2>Input</h2>
        <div className={css.section}>
           <Input />
        </div>

        <>
          <h2>Color picker</h2>
          <ColorPicker />
        </>
        <>
          <h2>Dropdown menu</h2>
          <Dropdown />
        </>
        <>
          <h2>Counter</h2>
          <Counter initialValue={10} />
        </>
      </div>
    );
  }
}

export default Components;
