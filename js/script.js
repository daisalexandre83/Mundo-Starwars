document.addEventListener("DOMContentLoaded",() =>{
    document.querySelectorAll(".search-input").forEach((inputField)=>{
        const tableRows = inputField.closest("table")
        .querySelectorAll("tbody > tr");
        const headerCell = inputField.closest("th");
        const otherHeaderCells = 
        headerCell.closest("tr").children;
        const columnIndex = 
        Array.from(otherHeaderCells).indexOf(headerCell);
        const searchableCells = 
        Array.from(tableRows).map(
            (row) => row.querySelectorAll("td")
            [columnIndex]
         );
         inputField.addEventListener("input",() =>{
             const searchQuery = inputField.value.toLowerCase();

             for (const tableCell of searchableCells) {
                const row = tableCell.closest("tr");
                const value = 
                 tableCell.textContent.toLocaleLowerCase().replace(",","");
                 row.style.visibility = null;

                 if (value.search(searchQuery) === -1) {
                     row.style.visibility = "collapse";
                 }
             }
         });
    });
});

/* document.querySelector('.action1-1').addEventListener("click",showMe); */

const cells = document.querySelectorAll('td');
for(let i = 0; i < cells.length;i++){
    cells[i].addEventListener('click',showMe)
}

 function showMe(){
    document.querySelector(".table").style.display="none";
    document.querySelector(".image-star-wars").style.display="block";
    
}

document.addEventListener("DOMContentLoaded",()=>{
    const apiURL="https://swapi.dev/api/"
    const characters = document.createElement("select")
    characters.classList.add('form-control')
    document.body.appendChild(characters)
    const wrap = document.createElement("div")
    let count = 1
    
    async function setCharacters() {
        const response = await fetch(`${apiURL}people/`)
        if (response.status >= 200 && response.status <= 299) {
            const data = await response.json()
            // characters.add(new Option("click",tr))
            characters.add(new Option(showMe("click",tr)))
            data.results.map(elt =>{
                const {name} = elt
                const option = document.createElement('option')
                option.value = count ++
                option.innerText = name
                characters.appendChild(option)
            })
        } else{
            characters.add(new Option('Error, no characters found',''))
            console.log(response.status,response.statusText)
        }
    }
    async function getPlanet(id){
        const response = await
        fetch(`${apiURL}planets/${id}`)
        const data = await response.json()
        return data
    }

    async function setDetails(id) {
        const response = await
        fetch(`${apiURL}people/${id}/`)
        const data = await response.json()

        const{name,height, mass, hair_color,skin_color, eye_color,
            birth_year,gender,homeworld
        } = data
        const planet = await
        getPlanet(homeworld.slice(-2))

        wrap.innerHTML = `
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
        <b>Fullname</b>:${name}</li>
        <li class="list-group-item">
        <b>Height</b>:${height}</li>
        <li class="list-group-item">
        <b>Mass</b>:${mass}</li>
        <li class="list-group-item">
        <b>Hair Color</b>:${hair_color}</li>
        <li class="list-group-item">
        <b>Skin Color</b>:${skin_color}</li>
        <li class="list-group-item">
        <b>Eye Color</b>:${eye_color}</li>
        <li class="list-group-item">
        <b>Birth Year</b>:${birth_year}</li>
        <li class="list-group-item">
        <b>Gender</b>:${gender}</li>
        <li class="list-group-item">
        <b>Homeworld</b>:${planet.name}- Population ${planet.residents.lenght}</li>
        </ul>
        `;
        characters.after(wrap)
    }
    characters.addEventListener("change",e =>
    {
        const id = e.currentTarget.options[e.currentTarget.selectedIndex].value
        wrap.innerText = ''
        setDetails(id)
    })
    setCharacters()
})



