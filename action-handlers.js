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




