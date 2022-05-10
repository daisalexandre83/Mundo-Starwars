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
    }
  }
})