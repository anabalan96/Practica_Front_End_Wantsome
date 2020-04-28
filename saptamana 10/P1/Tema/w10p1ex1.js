const buttonAlert = document.querySelector("button");
console.log(buttonAlert)
buttonAlert.onclick = () => {
alert('clicked');
}

//const buttonAlert = document.getElementsByTagName("button");
//console.log(buttonAlert)
//buttonAlert[0].onclick = () => {
// alert('here');
//}

//const buttonAlert = document.getElementById("button");
//console.log(buttonAlert)
//buttonAlert.onclick = () => {
// alert('second');
// }

const textInputEventHandler = document.getElementById('input');
textInputEventHandler.onchange = () => {
    alert('Textul din input a fost schimbat')
}


const changeColor = document.getElementById('myText')
changeColor.onclick = () => {
    let colors = ['red', "green", "blue", "pink", "black"]
    changeColor.style.color = colors[Math.floor(Math.random() * 5)]
}





