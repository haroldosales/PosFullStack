import './App.css';
import { TodoList } from './Components/TodoList';
import { useState} from 'react';


function App() {
  

  return (
       <section>
            <h1>Custom Todo-list</h1>
          <TodoList  />
       </section>
  );
}

export default App;
