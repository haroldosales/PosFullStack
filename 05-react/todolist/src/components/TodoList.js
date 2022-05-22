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
    if (items.find((i) => i.name === taskValue)) {
      event.preventDefault();

      return;
    }
    setItems([...items, { name: taskValue, isCompleted: false }]);
    setTaskValue("");
    event.preventDefault();
  };

  const handleOnTaskChanged = (event, item) => {
    setItems(items.map(i => {
      if (i.name  === item.name) {
        return {
            ...i,
            isCompleted: event.target.checked
        }
      }
      return i;
    }))
    console.log(event);
  };

  return (
    <div className="Todo-list-Conteneir">
      <p> Você conclui um total de {items.filter(i => i.isCompleted).length}</p>
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
          <TodoListItem handleOnTaskChanged={handleOnTaskChanged} item={item} />
        ))}
      </ul>
    </div>
  );
};
