let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

// outputDiv.innerText="Rachit Mahajan"
// function clickHandler() {
//     console.log("clicked");
//     console.log("input:", txtInput.value);
//     console.log("")
// }

function clickHandler() {
    outputDiv.innerText="abchdkritejwmpxoanwgfure " + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);