// let isMoviesVisible = false;




// document.addEventListener("DOMContentLoaded",() =>{
//         document.querySelectorAll(".search-input").forEach((inputField)=>{
//         const tableRows = inputField.closest("table")
//         .querySelectorAll("tbody > tr");
//         const headerCell = inputField.closest("th");
//         const otherHeaderCells = 
//         headerCell.closest("tr").children;
//         const columnIndex = 
//         Array.from(otherHeaderCells).indexOf(headerCell);
//         const searchableCells = 
//         Array.from(tableRows).map(
//             (row) => row.querySelectorAll("td")[columnIndex]);
//          inputField.addEventListener("input",() =>{
//              const searchQuery = inputField.value.toLowerCase();

//              for (const tableCell of searchableCells) {
//                 const row = tableCell.closest("tr");
//                 document.querySelector(".close-container-icon span i").style.display="block";
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


// const cells = document.querySelectorAll('td');
// for(let i = 0; i < cells.length;i++){
//     cells[i].addEventListener('click',showMe)
// }

// function closePerson() {
//      // document.querySelector('.close-container-icon').style.display="none";

//      let close = document.querySelector('.close-container-icon').style.display = "none";

//      //let showTable = window.open("table");


//      const infoPersons = document.querySelector('tr');
//      for (let index = 0; index < infoPersons.length; index++) {
//         document.querySelector(".table").style.visibility="null";
        
//      }
// }

// function showMe() {
//     document.querySelector(".table").style.display="none";
//     document.querySelector("#info-people").style.display="block";
//     const name = this.parentNode.getAttribute("data-name");
//     showCharacteristics(name);
// }

// async function showCharacteristics(name) {
//     let url =  `https://swapi.dev/api/people?search=${name}`;
//     let info = document.querySelector('.info');
//     let response = await fetch(url);
//     let {results}  = await response.json();
//     let dados = results[0];
//     let planet = await getPlanet(dados.homeworld);
//     info.innerHTML = 
//     `<p class="itens-character">Name:<span class="itens-description">${dados.name}</span></p>
//         <p class="itens-character">Heigth:<span class="itens-description">${dados.height}</span></p>
//         <p class="itens-character">Mass:<span class="itens-description">${dados.mass}</span></p>
//         <p class="itens-character">Hair Color:<span class="itens-description">${dados.hair_color}</span></p>
//         <p class="itens-character">Skin Color:<span class="itens-description">${dados.skin_color}</span></p>
//         <p class="itens-character">Eye Color:<span class="itens-description">${dados.eye_color}</span></p>
//         <p class="itens-character">Planet:<span class="itens-description">${planet.name}</span></p>`
//         showMovies(dados.films);
//         showStarships(dados.starships);
// }

// async function getPlanet(url){
//     const response = await fetch(url) 
//     const data = await response.json()
//     return data;
// }

// async function showMovies(personFilms) {
//     const info2 = document.querySelector('.info2');
//     for (let index = 0; index < personFilms.length; index++) {
//        const urlFilms = personFilms[index];
//        let response = await fetch(urlFilms);
//        let dados = await response.json();
//        info2.innerHTML += 
//        `<p>${dados.title}</p>`
//     }   
// }

// async function showStarships(personStarships){
//     const info2 = document.querySelector('.info3');
//     for (let index = 0; index < personStarships.length; index++) {
//         const urlFilms = personStarships[index];
//         let response = await fetch(urlFilms);
//         let dados = await response.json();
//         info2.innerHTML += 
//        `<p>${dados.name}</p>`
//     }    
// }

// let button_detail = document.querySelectorAll('.btn-line');

// button_detail.forEach(function(button) {
//     button.addEventListener("click",function () {
//         button_detail.forEach(button => button.classList.remove('btn-active'));
//         this.classList.add("btn-active");
//     });
// }
// );


let isMoviesVisible = false;
let tableData = [];
const searchInput = document.querySelector(".search-input");
const infoPersons = document.querySelectorAll('.table tbody tr');

searchInput.addEventListener('input', (e) => {
    document.querySelector(".close-container-icon span i").style.display="block";
    
    const filter = e.target.value.toUpperCase();

    if (tableData.length === 0) {
        initializeTableData();
    }

    for (const rowObj of tableData) {
        let found = false;
        if (rowObj.data.character.toUpperCase().indexOf(filter) > -1 || rowObj.data.birth.toUpperCase().indexOf(filter) > -1
            || rowObj.data.height.toUpperCase().indexOf(filter) > -1 || rowObj.data.mass.toUpperCase().indexOf(filter) > -1
            || rowObj.data.gender.toUpperCase().indexOf(filter) > -1
        ) {
            found = true;
        }
        rowObj.row.style.display = found ? "" : "none";
    }


});

function initializeTableData() {

    for (let i = 0; i < infoPersons.length; i++) {
        const rowData = {
            character: infoPersons[i].cells[0].textContent || infoPersons[i].cells[0].innerText,
            birth: infoPersons[i].cells[1].textContent || infoPersons[i].cells[1].innerText,
            height: infoPersons[i].cells[2].textContent || infoPersons[i].cells[2].innerText,
            mass: infoPersons[i].cells[3].textContent || infoPersons[i].cells[3].innerText,
            gender: infoPersons[i].cells[4].textContent || infoPersons[i].cells[4].innerText
        };
        tableData.push({ row: infoPersons[i], data: rowData });
    }
}


const cells = document.querySelectorAll('td');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', showMe)
}

function closePerson() {
    document.querySelector('.close-container-icon').style.display = "none";
    for (const rowObj of infoPersons) {
        rowObj.style.display = "table-row";
    }
}

function showMe() {
    document.querySelector(".table").style.display = "none";
    document.querySelector("#info-people").style.display = "block";
    const name = this.parentNode.getAttribute("data-name");
    showCharacteristics(name);
}

async function showCharacteristics(name) {
    //URL com problemas
    // let url = `https://swapi.dev/api/people?search=${name}`;
    //URL para usar como alternativa
    let url = `https://swapi.py4e.com/api//people?search=${name}`;
    let info = document.querySelector('.info');
    let response = await fetch(url);
    let { results } = await response.json();
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

async function getPlanet(url) {
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

async function showStarships(personStarships) {
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

button_detail.forEach(function (button) {
    button.addEventListener("click", function () {
        button_detail.forEach(button => button.classList.remove('btn-active'));
        this.classList.add("btn-active");
    });
}
);

const linhas = document.querySelectorAll("#tabela tr");
const porPagina = 10;
let paginaAtual = 1;

const totalPaginas = Math.ceil(linhas.length / porPagina);

function mostrarPagina(pagina) {
    linhas.forEach( l => l.style.display="none");

    let inicio = (pagina -1) * porPagina;
    let fim = inicio + porPagina;

    for (let i = inicio; i < fim && i < linhas.length; i++) {
        linhas[i].style.display="table-row";
    }
    document.getElementById("page-info").innerHTML=`${paginaAtual}`;

}

function next() {
    if (paginaAtual < totalPaginas) {
        paginaAtual++;
        mostrarPagina(paginaAtual);
    }
}

function prev() {
    if (paginaAtual > 1) {
        paginaAtual--;
        mostrarPagina(paginaAtual);
    }
}

mostrarPagina(paginaAtual);






























