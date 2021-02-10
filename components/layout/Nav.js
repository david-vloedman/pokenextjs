import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropDown from 'react-bootstrap/NavDropdown'
import Link from 'next/link'

import Styles from '../../styles/Components.module.css'

const BrandText = ({ text }) => (
	<span className={Styles.brand_text}>
		<Link href={'/'}>{text}</Link>
	</span>
)

export default function Header({ props }) {
	return (
		<Navbar collapseOnSelect className={Styles.nav_bar} fixed='top' expand='lg'>
			<Navbar.Brand>
				<BrandText text={'PokeNextJS!'} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<NavDropDown title='Pokemon'>
					
						<NavDropDown.Item href={'/search'}>
							Search Pokemon
						</NavDropDown.Item>
					
						<NavDropDown.Item href='/lists/pokemon/1'>
							All Pokemon
						</NavDropDown.Item>
					</NavDropDown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
