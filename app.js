const matrix = document.querySelector(".matrix");
function render(){
    matrix.innerHTML = "";
    for (let i = 0; i < 25; i++){
        const field = document.createElement("div");
        // Eseményfigyelő
        field.addEventListener("click", coloring)
        field.classList.add("field");
        matrix.appendChild(field)
    }
}

function randomColor(){
    return Math.floor(Math.random()*254+1);
}

function coloring(event){
    let r = randomColor();
    let g = randomColor();
    let b = randomColor();
    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    event.target.innerText = `${r},${g},${b}`;
}
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const fields = document.querySelectorAll(".field");
    fields.forEach(gomb => {
        gomb.style.backgroundColor= "";
        gomb.innerText = "";
    })
})

render();