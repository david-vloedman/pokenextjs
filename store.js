import { createStore } from 'redux'
import {useMemo} from "react"

const initialState = {
  searchForm: {
    searchGroup: 'all',
    keyword: ''
  },
  results: {

  }
 
}
const reducer = (state = initialState, action) => {
  console.log(action)
  console.log('dispatched')
  switch(action.type){
    case 'SEARCH':
      console.log('search')
      return {
        ...state
      }
      default:
        return state;
  }
}

const search = (e) => {
  e.preventDefault();
}

function initStore(){
  return createStore(reducer)
}


export function useStore(initialState) {
  const store = useMemo(() => initStore(initialState), [initialState])
  return store
}
