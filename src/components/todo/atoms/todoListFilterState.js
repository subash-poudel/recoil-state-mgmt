import { atom, selector } from "recoil";
import todoListState from "./todoListState";

export const FILTER_STATES = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_INCOMPLETE: "SHOW_INCOMPLETE",
};

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: FILTER_STATES.SHOW_ALL,
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case FILTER_STATES.SHOW_COMPLETED:
        return list.filter((item) => item.isComplete);
      case FILTER_STATES.SHOW_INCOMPLETE:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
