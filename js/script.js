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
}

async function getPlanet(url){
    const response = await fetch(url) 
    const data = await response.json()
    return data;
}

async function getNameFilm4(){
    const results1 = await fetch("https://swapi.dev/api/films/4/")
    const data = await results1.json()
    return data;
}

async function getNameFilm5(){
    const results2 = await fetch("https://swapi.dev/api/films/5/")
    const data = await results2.json()
    return data;
}

async function getNameFilm6(){
    const results3 = await fetch("https://swapi.dev/api/films/6/")
    const data = await results3.json()
    return data;
}

let tables = document.querySelectorAll




async function showInformations(dados) {
    const info = document.querySelector('.info');
    const planet = await getPlanet(dados.homeworld);
    const getFilms4 = await getNameFilm4(dados);
    const getFilm5 = await getNameFilm5(dados);
    const getFilm6 = await getNameFilm6(dados);



info.innerHTML = `<p class="date-name">${dados.name}</p>
                   <div class="line">
                    <h3 class="character-title">CHARACTERISTICS</h3>
                    <p class="itens-character">Name:<span class="itens-description">${dados.name}</span></p>
                    <p class="itens-character">Heigth:<span class="itens-description">${dados.height}</span></p>
                    <p class="itens-character">Mass:<span class="itens-description">${dados.mass}</span></p>
                    <p class="itens-character">Hair Color:<span class="itens-description">${dados.hair_color}</span></p>
                    <p class="itens-character">Skin Color:<span class="itens-description">${dados.skin_color}</span></p>
                    <p class="itens-character">Eye Color:<span class="itens-description">${dados.eye_color}</span></p>
                    <p class="itens-character">Planet:<span class="itens-description">${planet.name}</span></p>
                    <div class="skywalker-films">
                    <h1>FILMS</h1>
                    <p class="itens-character">Film:<span class="itens-description">${getFilms4.title}</span></p>
                    <p class="itens-character">Film:<span class="itens-description">${getFilm5.title}</span></p>
                    <p class="itens-character">Film:<span class="itens-description">${getFilm6.title}</span></p>
                    </div>
                   </div>
                    `
   
     const info2 = document.querySelector('.info');                    
}

