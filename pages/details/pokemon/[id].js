import Layout from "../../../components/Layout";
import DetailView from "../../../components/pokemon/DetailView";

const POKEMON_ROOT = process.env.api.pokemon;

function DetailPage(props) {
  
  return (
    <Layout>
      <DetailView props={props}/>
    </Layout>
  );
}

export async function getServerSideProps(context){
  
  const id = context.params.id;
  const url = `${POKEMON_ROOT}${id}`;

  const response = await fetch(url);
  const data = await response.json();
  
  if(!data){
    return{notFound: true}
  }

  
  return {
    props: {
      ...data
    }
  };
}

export default DetailPage;
