
const API_BASE = "https://pokeapi.co/api/v2/";

export function Search(form) {
  const {searchGroup, keyword} = form;
  
  return function(dispatch){
    return fetchResults(searchGroup, keyword).then(
      data => data.json().then(json => dispatch(requestSuccess(json))),
      err => dispatch(requestFail(err))
    )
  }
}

function fetchResults(searchGroup, keyword) {
  const url = `${API_BASE}${searchGroup}/${keyword}`;
  console.log(url)
  return fetch(url);
}

const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_FAIL = "REQUEST_FAIL";
const REQUEST_PENDING = "REQUEST_PENDING";

/* Action Creators */
export function requestSuccess(data) {
  return {
    type: REQUEST_SUCCESS,
    payload: data,
  };
}

export function requestPending(bool){
  return {
    type: REQUEST_PENDING,
    resultsPending: bool
  }
}

export function requestFail(err){
  return {
    type: REQUEST_FAIL,
    payload: err,
  };
}
