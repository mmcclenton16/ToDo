import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ''
import TodoItem from './components/TodoItem';
import todoData from './components/todoData'

function App() {
  // todoItems is a new array being created from MAPPING todoData. Make a taco, and use it to access the info you get back from MAPPING over todoDate.
  const todoItems = todoData.map(taco => <TodoItem key={taco.id} taco={taco} />)
  
  return (
    <div className='to-do-list'>
        {todoItems}
    </div>
  );
}

export default App;
