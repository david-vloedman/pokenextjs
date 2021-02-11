/**
 * 
 * @param {name, sprite, habitat, type} props 
 */

const Capitalized = ({word}) => <span className="text-capitalize">{word}</span>

export default function ListItem({props}){

  return (
    <li>
      <img src={props.sprite} /><Capitalized word={props.name} /> {props.type} {props.habitat}
      
    </li>
  )
}