import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from './Nav'


export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Pokenext</title>
			</Head>
			<div>
				<Container className={'main-bg layout-container'}>
					
						<Header />
					
			
							<div className={'content-container p-2 my-2'}>{children}</div>
			

					<Footer />
				</Container>
			</div>
		</>
	)
}
