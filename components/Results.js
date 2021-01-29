import {useSelector} from "react-redux"

const useResults = () => {
  const results = useSelector((state) => state.results);
  return results;  
};

const useStatus = () => {
  const pending = useSelector(state => state.requestPending);
  const success = useSelector(state => state.requestSuccess);
  const failure = useSelector(state => state.requestError);
  console.log(failure)
  const noResults = useSelector(state => state.noResults);
  return {pending, success, failure, noResults};
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
  
  const data = useResults();
  const status = useStatus();
  console.log(data, "from results");

  if(status.failure){
    return <RequestError />;
  }

  if(status.pending){
    return <RequestPending />
  }

  if(status.noResults){
    return <NoResults />;
  }
  console.log(status.success)
  if(status.success && data.count){
    return <MultipleEntryView entries={data.results}/>;
  }

    
  return <SingleEntryView />;
}
