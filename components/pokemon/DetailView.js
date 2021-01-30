import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const AbilitiesView = ({ abilities }) => {
  return (
    <div>
      <h2>Abilities</h2>

      <Col>
        {abilities.map((a) => (
          <AbilityView ability={a} key={a.name} />
        ))}
      </Col>
    </div>
  );
};

const AbilityView = ({ ability }) => {
  return (
    <div>
      <p>{ability.name}</p>
    </div>
  );
};

const StatsView = ({ stats }) => (
  <div>
    <h3>Base Stats</h3>
    <Col>
      <dl>
        {stats.map((s) => (
          <StatView stat={s} key={s.stat.name} />
        ))}
      </dl>
    </Col>
  </div>
);

const SpeciesView = ({ species }) => (
  <div>
    <h3>Species</h3>
    <Col>{species.name}</Col>
  </div>
);

const StatView = ({ stat }) => (
  <div>
    <dt>{stat.stat.name}</dt>
    <dd>{stat.base_stat}</dd>
  </div>
);

export default function DetailView({ props }) {
  const official = props.sprites.other["official-artwork"].front_default;

  return (
    <div>
      <h6>Pokemon Details</h6>
      <h1 className={"text-capitalize"}>{props.name}</h1>

      <Row>
        <Col xs={12}>
          <Image src={official} alt={`${props.name}-img`} fluid />
        </Col>
      </Row>

      <Row>
        <Col>
          <SpeciesView species={props.species} />
        </Col>
      </Row>
      <Row>
        <Col>
        <StatsView stats={props.stats} />
        </Col>
      </Row>
      <Row>
        <Col>
        <AbilitiesView abilities={props.abilities} />
        </Col>
      </Row>
    </div>
  );
}
