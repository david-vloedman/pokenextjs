import Link from "next/link"
import Pagination from "react-bootstrap/Pagination"
import styles from  "../../styles/List.module.css"

export default function ListView({props}){

  const {currentPage, pageCount, results} = props;

  const pages = new Array(pageCount);

  const PageItem = ({num}) => {

    console.log(num)
    return(
    <Pagination.Item key={num} active={((num + 1)===currentPage)}>
      {num}
    </Pagination.Item>
  )}

  const items = [];

  for(let i = 1; i <= pages.length; i++){
    items.push(
      <PageItem num={i} />
    )
  }

  console.log(items);
  
  return (
    <div>
      <ul className={styles.indexList}>
        {results.map(li => <ListItem key={li.name} item={li} />)}
      </ul>
      <Pagination size={"sm"}>{items}</Pagination>
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