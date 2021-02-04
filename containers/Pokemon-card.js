import Card from 'react-bootstrap/Card'
import Styles from '../styles/Containers.module.css'

const ImgContainer = ({ children }) => (
	<div className={Styles.pokemon_card_img_container}>{children}</div>
)

const BodyContainer = ({ children }) => (
	<div className={Styles.pokemon_card_body}>{children}</div>
)

const List = ({ items, propName }) => (
	<ul className={Styles.pokemon_card_list}>
		{items?.map((item) => (
			<li key={item[propName]}>{item[propName]}</li>
		))}
	</ul>
)

const StatList = ({ stats }) => (
	<ul className={Styles.pokemon_card_list}>
		{stats?.map((stat) => (
			<li key={stat.name}>
				{stat.name}
				{': '}
				{stat.stat}
			</li>
		))}
	</ul>
)

const Title = ({ word: title }) => (
	<div className={'text-capitalize ' + Styles.pokemon_card_title}>{title}</div>
)

export default function PokemonCard({ pokemon }) {
	return (
		<Card key={pokemon?.id} className={Styles.pokemon_card}>
			<Card.Title className={Styles.pokemon_card_title_container}>
				<Title word={pokemon?.name} />
			</Card.Title>
			<ImgContainer>
				<Card.Img
					variant='top'
					src={pokemon?.img}
					className={Styles.pokemon_card_img}
				/>
			</ImgContainer>

			<BodyContainer>
				<Card.Body>
					Types:
					<List items={pokemon?.types} propName={'name'} />
					Base Stats:
					<StatList stats={pokemon?.stats} />
				</Card.Body>
			</BodyContainer>
		</Card>
	)
}
