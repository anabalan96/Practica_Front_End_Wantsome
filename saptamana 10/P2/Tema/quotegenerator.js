const URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
let request = new XMLHttpRequest();
request.open("GET", URL);
request.responseType = "json";
request.send();

const generateQuote = (quote) => {
  const parag = document.getElementById("quote");
  parag.textContent = quote;
};

const loading = () => {
  let quote = request.response;
  generateQuote(quote);
  request.open("GET", URL);
  request.responseType = "json";
  request.send();
};

const button = document.getElementById("xhr");
button.addEventListener("click", loading);
