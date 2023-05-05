import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import Modal from './components/Modal';
import IconButton from './components/IconButton'
import {ReactComponent as AddIcon} from '../../icons/add.svg'


//- ============== class ================

class ToDo extends Component {
  state = {
    // todos: initialTodos,
    todos: [],
    filter: '',
    showModal: false,
  };

  //- перключатель состояния открытия-закрытия мождалки
  toggleModal = () => {
    // this.setState(state=>({
    // showModal: !state.showModal
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    if (text.length === 0){
      alert('Enter text');
      return;
    }

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos() {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  }

  // ===========  componentDidMount  ===========

  componentDidMount() {
    // console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    //- === имитация запроса ====

    //   setTimeout(() => {
    //    this.setState({ todos: parsedTodos });
    //   }, 2000);

    //- проверка на наличие записей в тудус, если NULL - может все поламается

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  // ========  componentDidUpdate  ============

  //* не делать стрелочной функцией (публичное свойство), обычнй метод

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      //# console.log('todos is update');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    // console.log('App componentDidUpdate:', 'prevProps:',prevState)
    // console.log('App componentDidUpdate:', 'prevState:',this.state)
  }

  //- ============== RENDER AREA ==================

  render() {
    //# console.log('App render');

    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>

        

        <IconButton  type="button" onClick={this.toggleModal} aria-label="Add ToDo"><AddIcon width={40} fill='blue'/></IconButton>


        <button type="button" onClick={this.toggleModal}>
          Open modal window
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>

            {/* <h1> This is the content of Modal</h1>
            <p>Loroiuuuuuhoiuhgiouhoiuh[oihoihj'piojupoijpoi</p>
            <button type="button" onClick={this.toggleModal}>
              Close modal window
            </button> */}

            <TodoEditor onSubmit={this.addTodo}/>

          </Modal>
        )}

        <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default ToDo;

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
