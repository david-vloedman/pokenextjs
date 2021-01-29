import {useSelector} from "react-redux"

const useResults = () => {
  const results = useSelector((state) => state.results);
  return results;  
};

const useStatus = () => {
  const pending = useSelector(state => state.requestPending);
  const success = useSelector(state => state.requestSuccess);
  const failure = useSelector(state => state.requestError);
  const noResults = useSelector(state => state.noResults);
  return {pending, success, failure, noResults};
}

const SingleEntryView = entry => {
  return (<div>hello, singles</div>);
}

const MultipleEntryView = (entries) => {
  return(<div>hello, multiples</div>)
}

const NoResults = () => <div>No results</div>;

const RequestPending = () => <div>Loading...</div>

export default function Results(){
  
  const data = useResults();
  const status = useStatus();
  console.log(data, "from results");

  if(!data || status.requestError){
    return null;
  }

  if(status.pending){
    return <RequestPending />
  }

  if(status.noResults){
    return <NoResults />;
  }

  if(status.success & data.count){
    return <MultipleEntryView entries={data.results}/>;
  }

    // has no count, show single item detail
  return <SingleEntryView />;
}
