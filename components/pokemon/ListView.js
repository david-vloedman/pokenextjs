import Link from "next/link"
import styles from  "../../styles/List.module.css"

export default function ListView({props}){
  const pageData = Object.values(props);
  console.log(pageData)
  return (
    <ul className={styles.indexList}>
      
      {pageData.map(li => <ListItem item={li} />)}
    </ul>
  )
}

const ListItem = ({item}) => {
  

  return (
    <Link href={`/details/pokemon/${item.id}`}>
      <li key={item.name} className={styles.indexListItem}>
      <img src={item.imgUrl} className={styles.thumbnail}/>
      <Capitialized word={item.name} />
      </li>
    </Link>
  
)};
  

const Capitialized = ({word}) => <span className={"text-capitalize"}>{word}</span>