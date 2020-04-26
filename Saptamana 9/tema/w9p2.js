// Adaugati un tag script la final

const list = document.querySelector('body');
const newItem = document.createElement('script');

console.log(newItem);
list.appendChild(newItem);

// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"

const fontFamily = document.getElementsByTagName('body');
for (i = 0; i < fontFamily.length; i++) {
    fontFamily[0].style.fontFamily = 'Arial, sans-serif';
}

// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi

const spanModify = document.getElementById('name')
spanModify.textContent = ' Ana!';
const spanModifyTwo = document.getElementById('fav-drink')
spanModifyTwo.textContent = ' Water!';
const spanModifyThree = document.getElementById('born-place')
spanModifyThree.textContent = ' MD!';

// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie

let liArray = document.getElementsByTagName('li');
for (var i = 0; i < liArray.length; i++) {
    liArray[i].className = 'listitem';
}

let style = document.createElement('style');
style.innerHTML = `.listitem {color: red;}`;
document.head.appendChild(style);


// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra

let myImage = document.createElement('img');
myImage.src = 'https://thumbs.dreamstime.com/b/funny-cat-smiling-tongue-very-smile-cardboard-134655541.jpg';
document.body.appendChild(myImage);
myImage.style.width = "300px";
