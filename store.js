import { createStore, applyMiddleware } from "redux";
import { useMemo } from "react";
import thunk from "redux-thunk";
import * as actions from "./actions"


const initialState = {
  searchForm: {
    searchGroup: "",
    keyword: "",
  },

  requestState: {
    hasStatus: false,
    status: {
      pending: false,
      success: false,
      error: false,
      notFound: false,
      results: {}
    }
  },

  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_PENDING:
      return {
        ...state,
        requestState:{
          hasStatus: true,
          status: {
            pending: true,
            success: false,
            error: false,
          }
       
        },
      };
    case actions.REQUEST_FAIL:
      return {
        ...state,
        requestState: {
          hasStatus: true,
          status: {
            pending: false,
            success: false,
            error: true,
            notFound: false
          }
        }
      }
    case actions.REQUEST_SUCCESS:
      return {
        ...state,
        requestState: {
          results: action.payload,
          hasStatus: true,
          status: {
            pending: false,
            success: true,
            error: false,
            notFound: false,
          },

        },
        
      };
      case "NO_RESULTS":
        return {
          ...state,
          requestState: {
            hasStatus: true,
            status: {
              pending: false,
              success: true,
              error: false,
              notFound: true,
            }
          
          }
        }
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
