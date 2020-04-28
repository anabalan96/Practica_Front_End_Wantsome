
const postTheGossip = () => {
    let name = document.getElementById('name').value;
    let adjective = document.getElementById('adjective').value;
    let randomWord = document.getElementById('random-word').value;
    let myTextHere = document.getElementById('my-text');
    let getYourText = `${name} este ${adjective} dupa ${randomWord}`;

    myTextHere.innerHTML = getYourText;
};
let btn = document.getElementById("exButton");
btn.addEventListener("click", postTheGossip);