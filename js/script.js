
let personFilms =[]; 

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
    document.querySelector(".characters-person h1").style.display="block";
    document.querySelector(".movies-person h1").style.display="block";
    // document.querySelector(".characters-person-line").style.display="block";
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

 async function showMovies() {
   document.querySelector(".info").style.display="none";
   console.log('olá');
    for (let index = 0; index < personFilms.length; index++) {
        const urlFilms = personFilms[index];
        
        fetch(urlFilms)
        .then(function(response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json)
           dataMovies(json.title);
        });
    // const personFilms = this.parentNode.getAttribute("movies-person");
    // let urlFilms = `http https://swapi.dev/api/films?search=${personFilms}`
    //   for (let index = 0; index < json.length; index++) {
    //       const e = json[index];
    //       fetch(e)
    //           .then(function(response) {
    //               return response.json();
    //           })
    //           .then(function (json) {
    //               console.log(json)
    //              dataMoviesAnakin(json.title);
    //   });
    }
   


    console.log('daiane');
   

}


async function showInformations(dados) {
    
    const info = document.querySelector('.info');
    console.log(dados);
    personFilms = dados.films
    const planet = await getPlanet(dados.homeworld);
    // showMovies();
    

info.innerHTML = 
`<div class="container1">
   <p class="itens-character">Name:<span class="itens-description">${dados.name}</span></p>
   <p class="itens-character">Heigth:<span class="itens-description">${dados.height}</span></p>
   <p class="itens-character">Mass:<span class="itens-description">${dados.mass}</span></p>
   <p class="itens-character">Hair Color:<span class="itens-description">${dados.hair_color}</span></p>
   <p class="itens-character">Skin Color:<span class="itens-description">${dados.skin_color}</span></p>
   <p class="itens-character">Eye Color:<span class="itens-description">${dados.eye_color}</span></p>
   <p class="itens-character">Planet:<span class="itens-description">${planet.name}</span></p>
</div>`
                    
   
                    
}


async function dataMovies(dadosFilms) {
    const info2 = document.querySelector('.info2');
    // showMovies();
    // document.querySelector('.info').style.display = "none";
    console.log(info2)

    info2.innerHTML += 
    `<div class="container2">
       <p class="itens-character">${dadosFilms}</p>
    </div>`
}









