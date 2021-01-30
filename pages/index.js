import Head from "next/head";
import Layout from "../components/Layout";
import DetailView from "../components/pokemon/DetailView";

const POKEMON_INDEX = process.env.api.pokemon;

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>Pokenext</title>
      </Head>
      <DetailView props={props} />
      
    </Layout>
  );
}

async function getAbilityDetails(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export async function getStaticProps() {
  try {
    const charmanderUrl = `${POKEMON_INDEX}${1}`;
    const response = await fetch(charmanderUrl);
    const json = await response.json();
    const abilities = json.abilities.map((a) => a.ability);
    const details = await Promise.all(
      abilities.map(async (a) => {
        return {
          name: a.name,
          details: await getAbilityDetails(a.url),
        };
      })
    );

    return {
      props: {
        ...json,
        abilities: details,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        
      },
    };
  }
}
