import {useSelector, useDispatch } from 'react-redux'

const URI = process.env.api.root;

const searchGroups = {
  all: "All",
  berries: "Berries",
  contests: "Contests",
  encounters: "Encounters",
  evolution: "Evolution",
  games: "Games",
  items: "Items",
  locations: "Locations",
  machines: "Machines",
  moves: "Moves",
  pokemon: "Pokemon"
}

const useForm = () => {
  const form = useSelector((state) => state.searchForm)
  const dispatch = useDispatch()
  const submit = (e) =>{
    e.preventDefault(); 
    dispatch({type: 'SUBMIT'})
  }
  return {form, submit}
}

export default function SearchForm(){

  const {form, submit} = useForm()
  
  const onChange = e => {
    const key = e.target.id
    const value = e.target.value
    form[key] = value;
    console.log(form);
  }



  return (
  <form autoComplete="off" noValidate>
    {/* SELECT CONTROL - Group selection
        All,
        Berries,
        Contests,
        Encounters,
        Evolution,
        Games,
        Items,
        Locations,
        Machines,
        Moves,
        Pokemon
     */}

     <label>

     Search in:{' '}
      <select id="searchGroup" onChange={onChange}>
        {Object.values(searchGroups).map(group => (
          <option key={group}>{group}</option>
        ))}
      </select>

      </label>
     {/* TEXT CONTROL - Keyword input */}
     <label>
      <input type="text" id="keyword"  onChange={onChange} />
      </label>
     {/*  */}
      <button type="submit" onClick={submit}>Submit</button>
        
  </form>
  )
}

