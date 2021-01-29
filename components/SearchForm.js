import { useSelector, useDispatch } from "react-redux";
import { Search } from "../actions"


const useForm = () => {
  const form = useSelector((state) => state.searchForm);
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    dispatch(Search(form));
  };
  return { form, submit };
};

export default function SearchForm() {
  const { form, submit } = useForm();
  
  const onChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    form[key] = value;
  };
  
  
  const dropDownItems = Object.keys(process.env.api);
  
  const defaultDropDown = dropDownItems.slice(0, 1);

  return (
    <form autoComplete="off" noValidate>

      {/* SELECT CONTROL - Group selection */}
      <label>
        Search in:{" "}
        <select id="searchGroup" onChange={onChange}>
          {/* <option key={defaultDropDown} value={defaultDropDown}>{defaultDropDown}</option> */}
          {dropDownItems.map(item => (
            <option key={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      {/* TEXT CONTROL - Keyword input */}
      <label>
        <input type="text" id="keyword" onChange={onChange} />
      </label>

      {/* SUBMIT */}
      <button type="submit" onClick={submit}>
        Submit
      </button>
    </form>
  );
}
