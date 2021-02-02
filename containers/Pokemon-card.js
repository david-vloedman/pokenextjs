import Card from "react-bootstrap/Card";
import Styles from "../styles/Containers.module.css";

const ImgContainer = ({ children }) => (
  <div className={Styles.pokemon_card_img_container}>{children}</div>
);

const BodyContainer = ({ children }) => (
  <div className={Styles.pokemon_card_body}>{children}</div>
);

export default function PokemonCard({ pokemon }) {
  return (
    <Card key={pokemon.id} className={Styles.pokemon_card}>
      <ImgContainer>
        <Card.Img
          variant="top"
          src={pokemon.img}
          className={Styles.pokemon_card_img}
          fluid="fluid"
        />
      </ImgContainer>

      <BodyContainer>
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Subtitle>Abilities</Card.Subtitle>
          
            <Card.Text>
              <ul className={Styles.pokemon_card_list}>
                {pokemon.moves.map((move) => (
                  <li key={move.name}>{move.name}</li>
                ))}
              </ul>
            </Card.Text>
          
        </Card.Body>
      </BodyContainer>
    </Card>
  );
}
