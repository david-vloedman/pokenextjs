import Container from 'react-bootstrap/Container'
import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'


export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Pokenext</title>
			</Head>
			<div>
				<Container className={'main-bg layout-container'}>
					
						<Nav />
					
			
							<div className={'content-container p-2 my-2'}>{children}</div>
			

					<Footer />
				</Container>
			</div>
		</>
	)
}
