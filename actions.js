const URI = process.env.api.root;

export async function search(form){
  console.log(form)
  const {keyword, searchGroup} = form;

  console.log(keyword)

  const url = `${URI}${searchGroup}/${keyword}`;

  const results = await fetch(url);
  console.log(results)
  return results;
}