import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../atoms/todoListFilterState";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

import "./TodoList.css";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div className="container">
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => {
        return <TodoItem key={todoItem.id} item={todoItem} />;
      })}
    </div>
  );
};

export default TodoList;
