// let counterDisplayElem = document.querySelector('.counter-display');
// let counterMinusElem = document.querySelector('.counter-minus');
// let counterPlusElem = document.querySelector('.counter-plus');
var count = 0;
var increasebtn = document.createElement("button");
var decreasebtn = document.createElement("button");
var counteer = document.createElement("span");
document.body.appendChild(increasebtn);
document.body.appendChild(counteer);
document.body.appendChild(decreasebtn);
increasebtn.textContent = "+";
decreasebtn.textContent = "-";
function updateDisplay() {
    if (counteer) {
        counteer.innerHTML = count.toString();
    }
}
if (increasebtn && decreasebtn) {
    increasebtn.addEventListener("click", function () {
        count++;
        updateDisplay();
    });
    decreasebtn.addEventListener("click", function () {
        count--;
        updateDisplay();
    });
}
updateDisplay();
