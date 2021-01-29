import {useDispatch, useSelector} from "react-redux"

const useResults = () => {
  const results = useSelector((state) => state.results);
  return results;  
};

const SingleEntryView = (entry) => {
  const entryArr = Object.entries(entry);
  console.log(entryArr, "arra")

  return(
    <div>hey</div>
  )
}

const MultipleEntryView = (entries) => {

}

export default function Results(){
  
  const results = useResults();
  console.log(results, "from results");

  return results? <div>Results</div> : <div>No Results</div>
}