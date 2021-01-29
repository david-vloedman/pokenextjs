import {useSelector} from "react-redux"

const useRequestState = () => {
  const state = useSelector(state => state.requestState);
  return state;
}

const SingleEntryView = entry => {
  const data = Object.entries(entry);
  data.map(itm => console.log(item))
  return (<div>hello, singles</div>);
}

const MultipleEntryView = (entries) => {
  return(<div>hello, multiples</div>)
}

const NoResults = () => <div>No results</div>;

const RequestPending = () => <div>Loading...</div>

const RequestError = () => <div>Error</div>;

export default function Results(){
  
  
  const state = useRequestState();
  
  if(!state.results && state){
    return null;
  }

  if(state.status.failure){
    return <RequestError />;
  }

  if(state.status.pending){
    return <RequestPending />
  }

  if(state.status.noResults){
    return <NoResults />;
  }
  
  if(state.status.success && state.results.count){
    return <MultipleEntryView entries={state.results}/>;
  }

  return <SingleEntryView />;
}
