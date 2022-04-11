import { useState } from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const defaultListItems = [
    {
      name: "Tarefa 1 ",
      isCompletd: false,
    },
    {
      name: "Tarefa 2 ",
      isCompletd: false,
    },
    {
      name: "Tarefa 3 ",
      isCompletd: false,
    },
    {
      name: "Tarefa 4 ",
      isCompletd: false,
    },
  ];

  const [items, setItems] = useState(defaultListItems);
  const [taskValue, setTaskValue] = useState("");

  const handleTaskSubmit = (event) => {
      setItems([... items,{ name: taskValue, isCompletd: false}])
      setTaskValue('');
      event.preventDefault();
  }

  const handOnTaskChange =  event => {
    console.log(event)
  };

  return (
    <div>
        <form onSubmit={handleTaskSubmit}>
            <input type="text"  placeholder="Adicone nova tarefa" value={taskValue}
            onChange={(event) => setTaskValue(event.target.value)}
             />
            <button type="submit">Adicionar Tarefa</button>
        </form>
      <ul>  
        {items.map((item) => (
          <TodoListItem handOnTaskChange={handOnTaskChange} item={item} />
        ))}
      </ul>
    </div>
  );
        
    }