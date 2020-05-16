const colors = () => {
    const request = new XMLHttpRequest();
    request.open("GET", 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json');
    request.onload = () => {
        const serverResponse = JSON.parse(request.response);
        console.log(serverResponse);
        const obiect = serverResponse;
        const arrKey = Object.keys(obiect);
        const arrVal = Object.values(obiect);

        const header = document.getElementsByTagName('header')[0];
        const section = document.getElementsByTagName('section')[0];
        const list = document.createElement('ul');
        section.appendChild(list);

        for (let i = 0; i < arrKey.length; i++) {
            const itemList = document.createElement('li');
            const para = document.createElement("p")
            list.appendChild(itemList).textContent = arrKey[i];
            itemList.appendChild(para);
            para.style.backgroundColor = arrVal[i];

        }
    };
    request.send();
};
colors();



function Triangle(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
    this.type = 'triunghi'
}
const forma = {
    getType: function () {
        return this.type

    }

}

Triangle.protopype = forma;
Triangle.prototype.constructor = Triangle;
let triunghi = new Triangle(2, 4, 6);

triunghi.getPerimeter = function(){
 return this.a + this.b + this.c
}

console.log(triunghi.construtor);




