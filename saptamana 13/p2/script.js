// //1. // PRE: create separate module to import fetch function(request) in index.js

// //Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
// //.then - returnam user names si city
// //hint nu uitati sa transformati primul raspuns ca si json

const url = "https://jsonplaceholder.typicode.com/users"

const dateUsers = fetch(url)
  .then(response => response.json())
  .then(result =>
    console.log(
      result
        .filter(id => id.id > 5)
        .map(info => {
          return { username: info.username, city: info.address.city };
        })
    )
  );


const url = 'https://www.googleapis.com/books/v1/volumes?q=horror';
fetch(url)
.then(response => response.json())
.then(result =>
  console.log(
    result.items
      .filter(page => page.volumeInfo.pageCount > 230)
      .filter(author => author.volumeInfo.authors.length >= 2)
  )
);

// //EX1
// // PRE: vom implementa metoda separat si apoi o importam in index.js
// // folosind fetch() vom face un post catre url-ul de mai jos
// // trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.

const url = 'https://jsonplaceholder.typicode.com/posts';
const link = fetch(url).then(response => response.json());
const myPost = {
  title: 'Javascript Post is awesome',
  body: 'lorem ipsum etc',
  userId: 1
}

const options = {
   method: "POST",
   body: JSON.stringify(myPost),
   headers: { "Content-Type": "application/json" }
};

fetch(url, options)
  .then(result => result.json())
  .then(result => console.log(result));

  //EX2
//***bonus***//
//Folosind url-ul gresit tratati cazul in care vom avea eroare
// trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()

fetch("https://jsonplaceholder.typicode.com/post", options)
  .then(response => response.json())
  .then(error => {
    try {
      throw new Error("Error created by: AB");
    } catch (fakeError) {
      console.error(fakeError.name + ": " + fakeError.message);
    }
  });


// //Ex1. 
// //Setati 3 cookie-uri cu numele, profesia si varsta voastra
// //Stocatile in 3 variabile dupa si afisatile in consola
// //Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// // Stocatile si pe astea in alte 2 variabile
// // La final vrem sa vedem 5 cookieuri in console.log

document.cookie1 = "name=Ana Balan"
document.cookie2 = "ocupation=QA"
document.cookie3 = "age=31"
document.cookie4 = "day=Th; expires= Th, 14 May 2020 23:59:59 GMT "
document.cookie5 = "year=2020; expires= Th, 14 May 2020 23:59:59 GMT"

const myCookie1 = document.cookie1;
const myCookie2 = document.cookie2;
const myCookie3 = document.cookie3;
const myCookiesExpire4 = document.cookie4;
const myCookiesExpire5 = document.cookie5;

console.log(myCookie1);
console.log(myCookie2);
console.log(myCookie3);
console.log(myCookiesExpire4);
console.log(myCookiesExpire5);

// Ex2. 
// Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
// stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

const first = localStorage.setItem("width", "100px");
const second = localStorage.setItem("height", "100px");
const third = localStorage.setItem("background-color", "green");
const width = localStorage.getItem("width");
const height = localStorage.getItem("height");
const bgcolor = localStorage.getItem("background-color");

const getBody = document.getElementsByTagName("body")[0];
const createdDiv = document.createElement("div");
getBody.appendChild(createdDiv);

createdDiv.style.cssText = `width:${width}; height:${height}; background-color:${bgcolor}`;


//3.

//Obiectul de mai jos il puneti intr-un fisier separat "world.json"
//faceti fech intr-un fisier separat de index.js
//importati fetch-ul in index.js
// stocati tot raspunsul in localStorage - hint - stringify
// Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *


