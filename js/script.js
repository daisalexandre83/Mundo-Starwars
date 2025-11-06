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

searchInput.addEventListener('input',function () {
    const filtro = searchInput.value.toLowerCase();
})

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

function closePerson(){
    searchInput.value="";
    document.querySelector('.close-container-icon span i').style.display = "none";

    // document.querySelector('.data-person').style.display = "table-header-group";

    for (const rowObj of infoPersons) {
        rowObj.style.display = "table-row";
    }
    currentPage = 1;
    showPage(currentPage);
}

function showMe() {
    document.querySelector(".table").style.display = "none";
    document.querySelector(".search-person").style.display="none";
    document.querySelector("#info-people").style.display = "block";
    document.getElementById("page-info").style.display="none";
    document.querySelector(".prev-button").style.display="none";
    document.querySelector(".next-button").style.display="none";
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

const linhas = document.querySelectorAll("#tabela tbody tr");
const perPage = 10;
let currentPage = 1;

const totalPages = Math.ceil(linhas.length / perPage);

function adicionarTheadSeNaoExistir() {
    const tabela = document.getElementById("tabela");

    if (tabela.querySelector('thead')) {
        return;
    }

    const theadHTML=`
    <thead class="data-person">
     <tr>
       <td class="person-name">Character Name</td>
       <td class="person-birth">Birth Year</td>
       <td class="person-heigth">Height</td>
       <td class="person-mass">Mass</td>
       <td class="person-gender">Gender</td>
     </tr>
   </thead>`;

   tabela.insertAdjacentHTML('afterbegin',theadHTML);

}

adicionarTheadSeNaoExistir();

function showPage(page) {
    
    linhas.forEach( l => l.style.display="none");

    let inicio = (page -1) * perPage;
    let fim = inicio + perPage;

    
    for (let i = inicio; i < fim && i < linhas.length; i++) {
        linhas[i].style.display="table-row";
    }
    
    document.getElementById("page-info").innerHTML=`${currentPage}`;

    const botaoPrev = document.querySelector(".prev-button");
    const botaoNext = document.querySelector(".next-button");

    if (page === 1) {
        botaoPrev.disabled = true;
    }else{
        botaoPrev.disabled = false;
    }

    if (page === totalPages) {
        botaoNext.disabled = true;
    }else{
        botaoNext.disabled = false;
    }

}

showPage(currentPage);

function next() {
    if (searchInput.value.trim() !== "") {
        return;
    }

    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// next();

function prev() {
    if (searchInput.value.trim() !== "") {
        return;
    }

    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// prev();


