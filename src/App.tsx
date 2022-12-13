import React from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { todoAPI } from './services';
import { todoSlice } from './features/todo/todoSlice';
import './App.css';
import { TodoState } from './types';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ListTodo />
        <AddTodo />
      </header>
    </div>
  );
}

export default App;

