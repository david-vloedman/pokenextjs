import ListView from "../../../components/pokemon/ListView";
import Layout from "../../../components/Layout";
import {getPokemonDetails} from "../../../helpers/request-helpers";
import Styles from "../../../styles/List.module.css"



export default function PokemonList(props) {
  return(
    <Layout>
      <main className={Styles.list_container}>  
        <ListView props={props} />
      </main>
    </Layout>
  )
   
}

const createRequestURL = (root, offset, limit) => `${root}?offset=${offset}&limit=${limit}`;

export async function getServerSideProps(context) {
  const pageNumber = context.params.page;
  const POKEMON_ROOT = process.env.api.pokemon;
  let url;

  console.log(POKEMON_ROOT)
  
  if(pageNumber > 1){
    const offset = 20 * parseInt(pageNumber);
    const limit = 20;
    url = createRequestURL(POKEMON_ROOT, offset, limit);
  } else {
    url = `${POKEMON_ROOT}`;
  }

  console.log(url)

  const getNextPage = () => {

  }

  try{

    const res = await fetch(url);
    const firstData = await res.json();
    
    const pageCount = parseInt(firstData.count / 20);
  
    const pageData = await Promise.all(
      firstData.results.map(async (poke) => {
        return await getPokemonDetails(poke.url);
      })
    );
  
    return {
      props: {
        currentPage: pageNumber,
        pageCount: pageCount,
        results: Object.values(pageData),
      },
    };

  }catch(err){
    return {
      notFound: true
    }
  }
}
