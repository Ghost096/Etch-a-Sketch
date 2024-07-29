const rows = 16
const columns = 16
const container = document.querySelector("#container")
container.setAttribute('style', 'display: flex')

for (i = 0; i < rows + 1; i++){
    const column = document.createElement("div")
    column.setAttribute('class',`column-${i}`)
    container.appendChild(column)
    for (j = 0; j < columns + 1; j++){
        const row = document.createElement("div")
        column.appendChild(row)
        row.setAttribute('style', 'width: 30px; height: 30px; background-color: white; border-style: solid; border-width: 2px; border-color: black;')
        row.classList.add("row")
    }
}
const columnDivs = document.querySelectorAll(".column")
const rowDivs = document.querySelectorAll(".row")

rowDivs.forEach((element)=> {
    element.addEventListener("mouseover", () =>{
        element.setAttribute('style', 'width: 30px; height: 30px; background-color: black; border-style: solid; border-width: 2px; border-color: black;');
    });
});



