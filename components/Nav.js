import NavBar from "react-bootstrap/Navbar";
import Styles from "../styles/Components.module.css"


const BrandText = ({text}) => (<span className={Styles.brand_text}>{text}</span>)


export default function Nav({props}){
  return (
    <NavBar bg={"light"} className={Styles.nav_bar}>
      <NavBar.Brand>
        <BrandText text={"PokeNextJS!"} />
      </NavBar.Brand>
    </NavBar>
  )
}