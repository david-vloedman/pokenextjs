import * as actions from "../actions"

export function fetchData(url){
  return dispatch => {
    dispatch(actions.requestPending(true));

    fetch(url).then(
      data => data.json().then(dispatch(actions.requestSuccess(data))),
      err => dispatch(actions.requestFail(err))
    );
    
  }
}