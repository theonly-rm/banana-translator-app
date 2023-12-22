let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

// outputDiv.innerText="Rachit Mahajan"
// function clickHandler() {
//     console.log("clicked");
//     console.log("input:", txtInput.value);
//     console.log("")
// }




btnTranslate.addEventListener("click", clickHandler);

//fetch


let serverURL = "https://api.funtranslations.com/translate/navi.json";

function getTranslationURL (text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("error occured" , error)
    alert("something is wrong in the server, try again after sometime")
}

function clickHandler() {
    let inputText = txtInput.value;                    //input

fetch(getTranslationURL(inputText))        //calling server for processing      
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;             //output
    })
    .catch(errorHandler)
};    