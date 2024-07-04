let isMoviesVisible = false;

function tablePersons(e){
    document.querySelectorAll("#search-input2").forEach((inputField)=>{
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
}


// document.addEventListener("DOMContentLoaded",() =>{
//         document.querySelectorAll("#search-input").forEach((inputField)=>{
//         const tableRows = inputField.closest("table")
//         .querySelectorAll("tbody > tr");
//         const headerCell = inputField.closest("th");
//         const otherHeaderCells = 
//         headerCell.closest("tr").children;
//         const columnIndex = 
//         Array.from(otherHeaderCells).indexOf(headerCell);
//         const searchableCells = 
//         Array.from(tableRows).map(
//             (row) => row.querySelectorAll("td")
//             [columnIndex]
//          );
//          inputField.addEventListener("input",() =>{
//              const searchQuery = inputField.value.toLowerCase();

//              for (const tableCell of searchableCells) {
//                 const row = tableCell.closest("tr");
//                 const value = 
//                  tableCell.textContent.toLocaleLowerCase().replace(",","");
//                  row.style.visibility = null;

//                  if (value.search(searchQuery) === -1) {
//                      row.style.visibility = "collapse";
//                  }
//              }
//          });
//     });
// });


const cells = document.querySelectorAll('td');
for(let i = 0; i < cells.length;i++){
    cells[i].addEventListener('click',showMe)
    
}

function showMe() {
    document.querySelector(".table").style.display="none";
    document.querySelector("#info-people").style.display="block";
    const name = this.parentNode.getAttribute("data-name");
    showCharacteristics(name);
}

async function showCharacteristics(name) {
    let url =  `https://swapi.dev/api/people?search=${name}`;
    let info = document.querySelector('.info');
    let response = await fetch(url);
    let {results}  = await response.json();
    let dados = results[0];
    let planet = await getPlanet(dados.homeworld);
    info.innerHTML = 
    `<p class="itens-character">Name:<span class="itens-description">${dados.name}</span></p>
        <p class="itens-character">Heigth:<span class="itens-description">${dados.height}</span></p>
        <p class="itens-character">Mass:<span class="itens-description">${dados.mass}</span></p>
        <p class="itens-character">Hair Color:<span class="itens-description">${dados.hair_color}</span></p>
        <p class="itens-character">Skin Color:<span class="itens-description">${dados.skin_color}</span></p>
        <p class="itens-character">Eye Color:<span class="itens-description">${dados.eye_color}</span></p>
        <p class="itens-character">Planet:<span class="itens-description">${planet.name}</span></p>`
        showMovies(dados.films);
        showStarships(dados.starships);
}

async function getPlanet(url){
    const response = await fetch(url) 
    const data = await response.json()
    return data;
}

async function showMovies(personFilms) {
    const info2 = document.querySelector('.info2');
    for (let index = 0; index < personFilms.length; index++) {
       const urlFilms = personFilms[index];
       let response = await fetch(urlFilms);
       let dados = await response.json();
       info2.innerHTML += 
       `<p>${dados.title}</p>`
    }   
}

async function showStarships(personStarships){
    const info2 = document.querySelector('.info3');
    for (let index = 0; index < personStarships.length; index++) {
        const urlFilms = personStarships[index];
        let response = await fetch(urlFilms);
        let dados = await response.json();
        info2.innerHTML += 
       `<p>${dados.name}</p>`
    }    
}

let button_detail = document.querySelectorAll('.btn-line');

button_detail.forEach(function(button) {
    button.addEventListener("click",function () {
        button_detail.forEach(button => button.classList.remove('btn-active'));
        this.classList.add("btn-active");
    });
}
);

function changedInput() {
    document.getElementById("search-input").style.display="none";
    document.getElementById("search-input2").style.display="block";
}





 
   



















