import React, { useContext } from "react";
import classes from "./Todos.module.css";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);
  const hasItems = ctx.items.length > 0;

  return (
    <ul className={classes.ul}>
      {hasItems && (
        <div>
          {ctx.items.map((item) => (
            <TodoItem
              key={item.id}
              text={item.text}
              onRemoveTodo={ctx.removeTodo.bind(null, item.id)}
            />
          ))}
        </div>
      )}
      {!hasItems && <p>No todos were added yet.</p>}
      {hasItems && (
        <p>
          {ctx.items.length} {ctx.items.length === 1 ? "item" : "items"}
        </p>
      )}
    </ul>
  );
};

export default Todos;
