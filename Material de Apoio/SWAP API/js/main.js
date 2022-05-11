"use strict";

document.addEventListener("DOMContentLoaded",()=>{
  const apiURL = "https://swapi.dev/api/"
  const characters = document.createElement("select")
  characters.classList.add('form-control')
  document.body.appendChild(characters)
  const wrap = document.createElement("div")
  let count = 1
  
  async function setCharacters(){
    const response = await fetch(`${apiURL}people/`)
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json()
      characters.add(new Option('Select a Name', ''))
      data.results.map(elt =>{
        const {name} = elt
        const option = 
        document.createElement("option")
        option.value = count ++
        option.innerText = name
        characters.appendChild(option)
      })
    } else{
      characters.add(new Option('Error, no characters found', ''))
      console.log(response.status,response.statusText)
    }
  }
  async function getPlanet(id) {
    const response = await fetch(`${apiURL}planets/${id}`)
    const data  = await response.json()
    return data
  }

  async function setDetails(id) {
    const response = await 
    fetch(`${apiURL}people/${id}/`)
    const data = await response.json()

    const{ name,height, mass,hair_color,skin_color,
    eye_color,birth_year,gender,homeworld} = data
    const planet = await
    getPlanet(homeworld.slice(-2))

    wrap.innerHTML = `
    <ul class = "list-group list group-flush">
    <li class="list-group-item">
    <b>Fullname</b>:${name}</li>
    <li class="list-group-item">
    <b>Height</b>:${height}</li>
    <li class="list-group-item">
    <b>Mass</b>:${mass}</li>
    <li class="list-group-item>
    <b>Hair Color</b>:${hair_color}</li>
    <li class="list-group-item">
    <b>Skin Color</b>:${skin_color}</li>
    <li class="list-group-item">
    <b>Birth Year</b>:${birth_year}</li>
    <li class="list-group-item">
    <b>Gender</b>:${gender}</li>
    <li class="list-group-item">
    <b>Homeworld</b>:${planet.name} - Population ${planet.residents.length}</li>
    </ul>
    `;
    characters.after(wrap)
  }
  characters.addEventListener("change", e =>
  {
    const id = e.currentTarget.options[e.currentTarget.selectedIndex].value
    wrap.innerText = ''
    setDetails(id)
  })
  setCharacters()
});