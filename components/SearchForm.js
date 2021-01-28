import { useSelector, useDispatch } from "react-redux";

const URI = process.env.api.root;

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
    dispatch({ type: "SEARCH" });
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

  return (
    <form autoComplete="off" noValidate>

      {/* SELECT CONTROL - Group selection */}
      <label>
        Search in:{" "}
        <select id="searchGroup" onChange={onChange}>
          <option value={defaultSearchGroup.value}>{defaultSearchGroup.text}</option>
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
