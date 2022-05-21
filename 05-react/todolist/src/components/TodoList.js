import { useState } from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const defaultListItemsValue = [
    { name: "Tarefa1", isCompleted: false },
    { name: "Tarefa2", isCompleted: false },
    { name: "Tarefa3", isCompleted: false },
    { name: "Tarefa4", isCompleted: false },
  ];
  const [items, setItems] = useState(defaultListItemsValue);

  const [taskValue, setTaskValue] = useState("");
  const handleTaskSublimit = (event) => {
    setItems([...items, { name: taskValue, isCompleted: false }]);

    event.preventDefault();
  }

  return (
    <div className="Todo-list-Conteneir">
      <form onSubmit={handleTaskSublimit}>
        <input
          type="text"
          placeholder="Adcione um item novo"
          value={taskValue}
          onChange={(event) => setTaskValue(event.target.value)}
        />
        <button type="submit"> Adicionar Tarefa </button>
      </form>

      <ul>
        {items.map((item) => (
          <TodoListItem item={item} />
        ))}
      </ul>
    </div>
  );
}
