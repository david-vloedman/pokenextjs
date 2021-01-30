const AbilitiesView = ({abilities}) => {
  console.log(abilities)
  return (
    <div>
      <h2>Abilities</h2>
      {abilities.map(a => (<AbilityView ability={a} />))}
    </div>
  )
}

const AbilityView = ({ability}) => {
  return (
    <div>
      <p>{ability.name}</p>
    </div>
  )
}

const StatsView = ({stats}) => (<dl>
  {stats.map(s => (<StatView stat={s} />))}
</dl>)

const StatView = ({stat}) => (
  <>
  <dt>{stat.stat.name}</dt>
  <dd>{stat.base_stat}</dd>
  </>
)


export default function DetailView({props}){

  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.sprites.front_shiny} alt={`${props.name}-img`} />
      <AbilitiesView abilities={props.abilities} />
      <StatsView stats={props.stats} />
    </div>
  )
}




