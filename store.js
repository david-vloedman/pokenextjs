import { createStore, applyMiddleware } from "redux";
import { useMemo } from "react";
import thunk from "redux-thunk";
import * as actions from "./actions"


const initialState = {
  searchForm: {
    searchGroup: "",
    keyword: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_INIT":
      return {
        ...state,
        requestPending: true,
      };
    case "REQUEST_FAIL":
      return {
        ...state,
        requestError: true,
        requestPending: false,
      }
    case "REQUEST_SUCCESS":
      return {
        ...state,
        results: action.payload,
        requestPending: false,
        requestError: false,
      };
    default:
      return state;
  }
};

function initStore() {
  return createStore(reducer, applyMiddleware(thunk));
}

export function useStore(initialState) {
  const store = useMemo(() => initStore(initialState), [initialState]);
  return store;
}
