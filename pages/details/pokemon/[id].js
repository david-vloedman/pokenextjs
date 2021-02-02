import Layout from "../../../components/Layout";
import DetailView from "../../../components/pokemon/DetailView";
import PokemonCard from "../../../containers/Pokemon-card"
import {getPokemonDetails} from "../../../helpers/request-helpers"

const POKEMON_ROOT = process.env.api.pokemon;

function DetailPage(props) {
  console.log(props);
  return (
    <Layout>
      <PokemonCard pokemon={props}/>
    </Layout>
  );
}

export async function getServerSideProps(context){
  
  const id = context.params.id;
  return await getPokemonDetails(id);
}

export default DetailPage;
