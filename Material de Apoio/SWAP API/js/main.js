let request = "https://swapi.dev/api/people/";

fetch(request).then((response)=>{
  return response.json();
}) .then((data)=>{
  let p = document.getElementById("test");
  console.log(data);
  p.innerHTML = JSON.stringify(data);
})