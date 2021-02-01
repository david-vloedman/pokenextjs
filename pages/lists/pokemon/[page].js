import ListView from "../../../components/pokemon/ListView";
import Layout from "../../../components/Layout";

const POKEMON_ROOT = process.env.api.pokemon;

export default function PokemonList(props) {
  return(
    <Layout>
      <ListView props={props} />
    </Layout>
  )
   
}

export async function getServerSideProps(context) {
  const url = `${POKEMON_ROOT}`;
  const res = await fetch(url);
  const firstData = await res.json();

  const pageData = await Promise.all(
    firstData.results.map(async (poke) => {
      const res = await fetch(poke.url);
      const secondData = await res.json();
      return {
        id: secondData.id,
        name: secondData.name,
        imgUrl: secondData.sprites.front_default,
      };
    })
  );

  return {
    props: {
      ...pageData,
    },
  };
}
