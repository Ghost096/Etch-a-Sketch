let rows = 16
let columns = 16
let container = document.querySelector("#container")

let columnDivs = document.querySelectorAll(".column")
let rowDivs = document.querySelectorAll(".row")
const inputButton = document.querySelector("#input")

inputButton.addEventListener("click", () => {
    let promptInput = prompt("Enter the amount of squares per side for the grid")
    squares = promptInput * 1
    if (promptInput <= 100){
    gridGenerate(squares)
    } else {
        alert("Invalid grid size, please enter an amount less or equal to 100.")
    }
});

/** function gridGenerate(squares){
    container.replaceChildren() 
    for (i = 0; i < squares; i++){
        const column = document.createElement("div");
        column.classList.add(`column-${i}`);
        column.setAttribute('style', 'flex: 1; min-width:5px; min-height:5px; display: flex; align-items: stretch; flex-direction: column')
        container.appendChild(column);
        for (j = 0; j < squares; j++){
            const row = document.createElement("div");
            column.appendChild(row);
            row.setAttribute('style', `background-color: white;min-width:5px; min-height:5px; border-style: solid; border-width: 1px; border-color: black; flex: 1; align-items: stretch`);
            row.classList.add("row");
        }
    }
    rowDivs = document.querySelectorAll(".row")
    rowDivs.forEach((element)=> {
        element.addEventListener("mouseover", () =>{
            element.setAttribute('style', `background-color: black; min-width:5px; min-height:5px; border-style: solid; border-width: 1px; border-color: black; flex: 1;`);
        });
    }); 
}; 
**/

function gridGenerate(squares){
    let alpha = 0
    let counter = 0
    container.removeEventListener("mouseover", changeColor)
    container.replaceChildren() 
    for (i = 0; i < squares; i++){
        const column = document.createElement("div");
        column.classList.add(`column-${i}`);
        column.setAttribute('style', 'flex: 1; min-width:5px; min-height:5px; display: flex; align-items: stretch; flex-direction: column')
        /**column.setAttribute("style", "display: flex"); **/
        container.appendChild(column);
        for (j = 0; j < squares; j++){
            const row = document.createElement("div");
            column.appendChild(row);
            row.setAttribute('style', "background-color: white;min-width:5px; min-height:5px; border-style: solid; border-width: 1px; border-color: black; flex: 1; align-items: stretch");
            row.classList.add("row");
        }
    }
    rowDivs = document.querySelectorAll(".row")
    rowCol = document.querySelectorAll(".column")
    container.addEventListener("mouseover", changeColor)
}; 

 function changeColor(e){
    target = e.target;
    if (target.getAttribute("style") != "background-color: white;min-width:5px; min-height:5px; border-style: solid; border-width: 1px; border-color: black; flex: 1; align-items: stretch"){
        target.style.opacity = target.style.opacity * 1 + 0.1
    } else {
        colorValueR = Math.random()*255
        colorValueG = Math.random()*255
        colorValueB = Math.random()*255
        target.setAttribute('style', `background-color: rgb(${colorValueR}, ${colorValueG}, ${colorValueB}); min-width:5px; min-height:5px; border-style: solid; border-width: 1px; border-color: black; flex: 1;`);
        target.style.opacity = 0.1
        counter = 0
    }
}; 

gridGenerate(16)