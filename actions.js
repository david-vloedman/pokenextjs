const endPoints = process.env.api;

export function Search(form) {
  const {searchGroup, keyword} = form;
  console.log(form)
  return function(dispatch){
    return fetchData(searchGroup, keyword).then(
      data => jsonHandler(data, dispatch),
      err => dispatch(requestFail(err))
    )
    .catch(err => dispatch(noResults()))
  }
}

export function request(form){
  
}

function jsonHandler(data, dispatch){
  console.log(data)

  return data.json()
  .then(json => dispatch(requestSuccess(json)))
  .catch(err => {console.log(err);dispatch(requestFail(err))})
}

// function dataHandler()
function handleResponse(response){
  if(response.status === 404){
    
  }
}

function fetchData(searchGroup, keyword) {
  const url = `${endPoints[searchGroup]}${keyword}`;
  return fetch(url);
}

export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAIL = "REQUEST_FAIL";
export const REQUEST_PENDING = "REQUEST_PENDING";
export const NO_RESULTS = "NO_RESULTS";

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

export function noResults(){
  return {
    type: NO_RESULTS,
  }
}
