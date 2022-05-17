document.addEventListener("DOMContentLoaded",() =>{
    document.querySelectorAll(".search-input").forEach((inputField)=>{
        const tableRows = inputField
        .closest("table")
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

/* function showMe(){
    document.querySelector(".table").display="none";
    document.querySelector(".image-star-wars").display="block";
} */

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
            characters.add(new Option())
            data.results.map(elt =>{
                const {name} = elt
                const option = document.createElement('option')
                option.value = count ++
                option.innerText = name
                characters.appendChild(option)
            })
        }
    }
})