const route = process.env.api.pokemon;

export default function PokeList(props){
  
  return (
    <div>

    </div>
  );
}

export async function getStaticProps(){
  try{
    const response = await fetch(route);
    console.log(response, "response");
    
    const json = await response.json();
    return {
      props:{
        json
      }
    }
  } catch(error){
    console.error(error);
    return {
      props: {

      }
    }
  };
  
  
  
}