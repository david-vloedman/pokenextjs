import { createStore } from "redux";
import { useMemo } from "react";
import {search} from "../Pokenextjs/actions"

const initialState = {
  searchForm: {
    searchGroup: "berries",
    keyword: "",
  },
  results: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        results: search(state.searchForm)
      };
    default:
      return state;
  }
};

function initStore() {
  return createStore(reducer);
}

export function useStore(initialState) {
  const store = useMemo(() => initStore(initialState), [initialState]);
  return store;
}
