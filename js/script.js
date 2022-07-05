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

 /*function showMe(){
    document.querySelector(".table").style.display="none";
    document.querySelector(".image-star-wars").style.display="block";
    
    fetch("https://swapi.dev/api/")
    async function showInformations(){
        const response =  await fetch(`${apiURL}people/`)
        if (response.status >= 200 && response.status <= 299) {
            const data = await response.json()
            data.results.map(elt =>{
                const{field} = elt
                const option = document.createElement('option')
                option.value = count ++
                option.innerText = field
            })
        }
    }
}*/

function showMe() {
    document.querySelector(".table").style.display="none";
    document.querySelector(".image-star-wars").style.display="block";

    let url = `https://swapi.dev/api/`;

    fetch(url).then(function (response) {
        response.json().then(showInformations)
    });
}

function showInformations(dados) {
    cells.innerHTML = `<p>Name:${dados.name}</p>
                        <p>Heigth:${dados.height}</p>
                        <p>Mass:${dados.mass}</p>
                        <p>Hair Color:${dados.hair_color}</p>
                        <p>Skin Color:${dados.skin_color}</p>
                        <p>Eye Color:${dados.eye_color}</p>
                        <p>Homeworld:${dados.homeworld}</p>`
}


