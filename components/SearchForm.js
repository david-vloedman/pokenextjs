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
  const dropDownItems = Object.keys(process.env.api);
  const defaultGroup = dropDownItems.slice(0,1)[0];
  
  form.searchGroup = defaultGroup;
  const onChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    form[key] = value;
  };


  return (
    <form autoComplete="off" noValidate>

      {/* SELECT CONTROL - Group selection */}
      <label>
        Search in:{" "}
        <select id="searchGroup" onChange={onChange}>
          <option key={defaultGroup}>{defaultGroup}</option>
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
