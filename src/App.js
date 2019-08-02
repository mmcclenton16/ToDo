import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import todoData from './components/todoData'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange(id) {
    console.log('yo', id)
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
}

  render() {
    // todoItems is a new array being created from MAPPING the array in todoData. Make a taco, and use it to access the info you get back from MAPPING over todoDate. 
    const todoItems = todoData.map(taco =>
      <TodoItem
        key={taco.id}
        taco={taco}
        handleChange={this.handleChange} />)
    // taco = todoData.map

    // Feed the taco to TodoItem
    return (
      <div className='to-do-list'>
        {todoItems}
      </div>
    );

  }
}

;
