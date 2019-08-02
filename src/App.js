import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import todoData from './components/todoData';
// import navBar from './components/Navbar'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
    this.onChange = this.onChange.bind(this)

  }
  onChange(id) {
    console.log('yo', id)
    this.setState(prevState => {
      const updateTodo = prevState.todos.map(taco => {
        if (taco.id === id) {
          taco.completed = taco.completed

        }
        return taco
      })
        return updateTodo
      
    })
  }

  render() {
    // todoItems is a new array being created from MAPPING the array in todoData. Make a taco, and use it to access the info you get back from MAPPING over todoDate. 
    const todoItems = todoData.map(taco =>
      <TodoItem
        key={taco.id}
        taco={taco}
        onChange={this.onChange} />)
    // taco = todoData.map

    // Feed the taco to TodoItem
    return (
      <div className='to-do-list'>
        {todoItems}
      </div>
    );
    // <navBar />

  }
}

;
