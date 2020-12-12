var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#outputDiv");

// translation API
// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(input) {
    return serverUrl + "?" + "text=" + input;
}

// custom messages for the error 
function errorHandler(error) {
    console.log("Error Occured", error);
    alert("Something went wrong with the server!!! Please try after sometime");

}

function clickHandler() {

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler) //catch block to handle the errors
}


btnTranslate.addEventListener("click", clickHandler);