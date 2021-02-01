import Link from "next/link"
import styles from  "../../styles/List.module.css"

export default function ListView({props}){
  const {count, results} = props;
  
  return (
    <ul className={styles.indexList}>
      
      {results.map(li => <ListItem key={li.name} item={li} />)}
    </ul>
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