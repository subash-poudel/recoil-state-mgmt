import React from "react";
import { useRecoilState } from "recoil";

import {
  todoListFilterState,
  FILTER_STATES,
} from "../atoms/todoListFilterState";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      <p>Filter:</p>
      <select value={filter} onChange={updateFilter}>
        <option value={FILTER_STATES.SHOW_ALL}>All</option>
        <option value={FILTER_STATES.SHOW_COMPLETED}>Complete</option>
        <option value={FILTER_STATES.SHOW_INCOMPLETE}>Incomplete</option>
      </select>
    </div>
  );
}

export default TodoListFilters;
