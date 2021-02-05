import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

import Styles from '../styles/Components.module.css'

const BrandText = ({ text }) => (

	<span className={Styles.brand_text}><Link href={'/'}>{text}</Link></span>
)

export default function Header({ props }) {
	return (
		<NavBar className={Styles.nav_bar}>
			<NavBar.Brand>
				<BrandText text={'PokeNextJS!'} />
			</NavBar.Brand>
			<Nav>
				<Nav.Item>
					Test
				</Nav.Item>
			</Nav>
		</NavBar>
	)
}
