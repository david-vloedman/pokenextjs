import Link from "next/link"

export default function ListView(prop){
  console.log(prop);
  const items = Object.values(prop.data);
  items.map(item => console.log(item))
  return (
    <ul>
      {items.map(item => (<li key={item.name}><Link href={item.url}>{item.name}</Link></li>))}
    </ul>
  )
}

const ListItem = item => (
  <li key={item.name}>
    {item.name}
  </li>
);
  