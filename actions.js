const endPoints = process.env.api;

export function Search(form) {
  const {searchGroup, keyword} = form;
  
  return function(dispatch){
    return fetchResults(searchGroup, keyword).then(
      data => data.json().then(json => dispatch(requestSuccess(json))),
      err => dispatch(requestFail(err))
    )
  }
}

function jsonHandler(data){
  return data.json()
  .then(json => dispatch(requestSuccess(json)))
  .catch(err => dispatch(requestFail(err)))
}

function fetchResults(searchGroup, keyword) {
  const url = `${endPoints[searchGroup]}${keyword}`;
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
