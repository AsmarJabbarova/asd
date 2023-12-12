// let counterDisplayElem = document.querySelector('.counter-display');
// let counterMinusElem = document.querySelector('.counter-minus');
// let counterPlusElem = document.querySelector('.counter-plus');

let count: number = 0;


let increasebtn = document.createElement("button")
let decreasebtn = document.createElement("button")
let counteer= document.createElement("span")
document.body.appendChild(increasebtn);
document.body.appendChild(counteer);
document.body.appendChild(decreasebtn);

increasebtn.textContent="+";
decreasebtn.textContent="-"

function updateDisplay() {
    if (counteer) {
        counteer.innerHTML = count.toString();
    }
}


if (increasebtn && decreasebtn) {
    increasebtn.addEventListener("click", () => {
        count++;
        updateDisplay();
    });

    decreasebtn.addEventListener("click", () => {
        count--;
        updateDisplay();
    });
}
updateDisplay();

