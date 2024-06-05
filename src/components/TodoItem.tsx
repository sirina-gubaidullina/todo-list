import React from "react";
import classes from "./TodoItem.module.css";
import Icon from "../assets/icon-cross.svg";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <div className={classes["item-container"]}>
      <li className={classes.li}>{props.text}</li>
      <button onClick={props.onRemoveTodo}>
        <img src={Icon} />
      </button>
    </div>
  );
};

export default TodoItem;
