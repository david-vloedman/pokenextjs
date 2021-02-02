import Link from "next/link"
import Pagination from "react-bootstrap/Pagination"
import styles from  "../../styles/List.module.css"
import PokemonCard from "../../containers/Pokemon-card"

export default function ListView({props}){

  const {currentPage, pageCount, results} = props;

  
  return (
    <div className="m-3">
      {results.map(item => (
        <div className="m-3">
          <PokemonCard key={item.id} pokemon={item} />
        </div>
      ))}
    </div>
  )
}

const ListItem = ({item}) => {
  return (
    <Link href={`/details/pokemon/${item.id}`}>
      <li className={styles.indexListItem}>
      <img src={item.imgUrl} className={styles.thumbnail}/>
      <Capitialized word={item.name} />
      </li>
    </Link>
  
)};

const Capitialized = ({word}) => <span className={"text-capitalize"}>{word}</span>