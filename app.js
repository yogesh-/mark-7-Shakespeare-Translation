var inputTxt = document.querySelector("#input");
var button = document.querySelector("#btn");
var outputTxt = document.querySelector(".output");

var apiUrl = "	https://api.funtranslations.com/translate/shakespeare.json"

function constructURL(text){
    return apiUrl + "?" + "text="+text

}

function clickApi(){
var finaltext = inputTxt.value;
fetch(constructURL(finaltext))
.then(response=>response.json())
.then(json =>
    {var translatedText = json.contents.translated;
        outputTxt.innerText = translatedText;
    })
}


button.addEventListener("click",clickApi);

