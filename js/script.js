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
    document.querySelector(".image-star-wars").style.display="block";
    const name = this.parentNode.getAttribute("data-name");
    let url = `https://swapi.dev/api/people?search=${name}`;
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        showInformations(json.results[0]);
    });
}

function showInformations(dados) {
    const info = document.querySelector('.info');

    info.innerHTML = `<p>Name:${dados.name}</p>
                        <p>Heigth:${dados.height}</p>
                        <p>Mass:${dados.mass}</p>
                        <p>Hair Color:${dados.hair_color}</p>
                        <p>Skin Color:${dados.skin_color}</p>
                        <p>Eye Color:${dados.eye_color}</p>
                        <p>Homeworld:${dados.homeworld}</p>`
}


