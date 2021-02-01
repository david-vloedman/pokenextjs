import ListView from "../../../components/pokemon/ListView";
import Layout from "../../../components/Layout";
import Pagination from "react-bootstrap/Pagination"

const POKEMON_ROOT = process.env.api.pokemon;

export default function PokemonList(props) {
  return(
    <Layout>
      <ListView props={props} />
      <Pagination>

      </Pagination>
    </Layout>
  )
   
}

export async function getServerSideProps(context) {
  const pageNumber = context.params.page;

  let url;
  
  if(pageNumber){
    const offset = 20 * pageNumber;
    const limit = 20;
    url = `${POKEMON_ROOT}?offset=${offset}&limit=${limit}`;
  } else {
    url = `${POKEMON_ROOT}`;
  }

  try{
    const res = await fetch(url);
    const firstData = await res.json();
    
    const pageCount = parseInt(firstData.count / 20);
  
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
