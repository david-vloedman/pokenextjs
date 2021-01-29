import { useSelector, useDispatch } from "react-redux";
import { Search } from "../actions"

const defaultSearchGroup = {
  text: "Berries",
  value: "berry"
}

const searchGroups = [
  {
    text: "Contests",
    value: "contest",
  },
  {
    text: "Encounters",
    value: "encounter",
  },
  {
    text: "Evoltions",
    value: "evolution",
  },
  {
    text: "Games",
    value: "game",
  },
];

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
  form.searchGroup = defaultSearchGroup.value;
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
          <option defaultValue value={defaultSearchGroup.value}>{defaultSearchGroup.text}</option>
          {searchGroups.map((group) => (
            <option key={group.value} value={group.value}>
              {group.text}
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
