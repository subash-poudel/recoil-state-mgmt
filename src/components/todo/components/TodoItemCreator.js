import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import todoListState from "../atoms/todoListState";

let id = 0;
function getId() {
  return id++;
}

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const addItem = () => {
    if (inputValue.length === 0) {
      return;
    }
    setTodoList((oldTodoList) => {
      return [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ];
    });
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
