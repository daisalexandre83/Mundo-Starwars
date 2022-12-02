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


const cells = document.querySelectorAll('td');
for(let i = 0; i < cells.length;i++){
    cells[i].addEventListener('click',showMe)
    
}

/* async function getPlanet(id) {
    const response  = await fetch(`https://swapi.dev/api/planets/${id}`)
    const data = await response.json()
    return data

    .then(async function (json) {
        getPlanet(json.results[0].homeworld.slice(-2))
    })
    .then(function (json) {
        showInformations(json.results[0]);
    })
}
 */

function showMe() {
    document.querySelector(".table").style.display="none";
    document.querySelector(".content").style.display="block";    // document.querySelector(".image-star-wars").style.display="block";
    const name = this.parentNode.getAttribute("data-name");
    let url =  `https://swapi.dev/api/people?search=${name}`;

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        showInformations(json.results[0]);
    });

    let apiURL = "https://swapi.dev/api/"
    let show = document.querySelectorAll('.data-information')
    async function getPlanet(id){
        const response = await fetch(`${apiURL}planets/${id}`) 
        const data = await response.json()
        return data
        const planet = await getPlanet(homeworld.slice(-2))   
    }
    
    characters.addEventListener("change",e=>{
        const id = e.currentTarget.options[e.currentTarget.selectedIndex].value
    })
    // const apiURL = "https://swapi.dev/api/"
   /*  const apiURL =  this.parentNode.getAttribute("data-name");
    let id = "https://swapi.dev/api/"
    async function getPlanet(id) {
        const response = await fetch(`${apiURL}planets/${id}`)
        // const response = await fetch(`https://swapi.dev/api/planets/${id}`)
        const data = await response.json()
        return data

        const planet = await
        getPlanet(homeworld.slice(-2))
    } */


}

function showInformations(dados) {
    const info = document.querySelector('.info');

    info.innerHTML = `<p class="date-name">${dados.name}</p>
                        <div class="line l-first"></div>
                        <h3 class="character">CHARACTERISTICS</h3>
                        <p class="itens-character">Name:<span class="itens-description">${dados.name}</span></p>
                        <p class="itens-character">Heigth:<span class="itens-description">${dados.height}</span></p>
                        <p class="itens-character">Mass:<span class="itens-description">${dados.mass}</span></p>
                        <p class="itens-character">Hair Color:<span class="itens-description">${dados.hair_color}</span></p>
                        <p class="itens-character">Skin Color:<span class="itens-description">${dados.skin_color}</span></p>
                        <p class="itens-character">Eye Color:<span class="itens-description">${dados.eye_color}</span></p>
                        <p class="itens-character">Homeworld:<span class="itens-description">${planet.name}</span></p>
                         `

}


