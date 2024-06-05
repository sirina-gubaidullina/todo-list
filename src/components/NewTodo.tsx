import React from "react";
import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const ctx = useContext(TodosContext);

  const formRef = useRef<any>(null);

  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) return;

    ctx.addTodo(enteredText);

    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={classes.form} onSubmit={submitHandler}>
      <h1>TODO</h1>
      <input
        type="text"
        ref={todoTextInput}
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default NewTodo;
