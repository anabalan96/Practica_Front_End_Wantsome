//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var months = ["June", "July", "May", "April", "March"] 
var result = months.length;
console.log(result);

//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var concatResult = array1.concat(array2);
console.log(concatResult);
//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var firstArray = [2, 3, 5];
var resultArray = Array.isArray(firstArray);
console.log(resultArray);

//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var numbersResult = numbers.join(" and ");
console.log(numbersResult);


//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.splice(1, 0, "VW", "BMW");
console.log(cars);


//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
 cars.pop();
console.log(cars);
//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
cars.unshift( "Dodge");
console.log(cars)
//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
cars.reverse();
console.log(cars);
//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
cars.splice(2, 0, "Volvo", "Mercedes");
console.log(cars);
//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];
arrayNumbers.sort(function(a, b) { return b - a; });
console.log(arrayNumbers);

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
function ordonedFruits () {
  return fruitsArray.sort();
}
console.log(ordonedFruits());


// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
  name: "Tesla",
  wheels: 4,
};
console.log(car);
car.name = "Mercedes";
console.log(car);
delete car.name;
console.log(car);


//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

var dress = { 
color: "White",
size: "S",
style: "Casual",
season: "Summer",
};


console.log(dress);

var dressKeys = Object.keys(dress);
console.log(dressKeys);

var upperDress = dressKeys.join().toUpperCase().split(",");
console.log(upperDress);

var dressValue = Object.values(dress);
console.log(dressValue);

var dressLower = dressValue.join(", ").toLowerCase();
console.log(dressLower);

function finalDress(){
return dress.color + ', ' + dress.size + ', ' + dress.style + ', ' + dress.season +', ' + "represent my object 'Dress'"
};

console.log(finalDress());



//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

var myFuture = {
  name : "Ana",
  speciality: "FE Developer",
  result: function () {
   return "My name is " + this.name + " will become " + this.speciality
  }
    
  };
  console.log(myFuture.result());


//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
var apartament = {
 supraface: 102,
 floor: 3,
 bedrooms: 2,
 balcon: 1
}
var newApartament = Object.assign({}, apartament);
console.log(newApartament);

newApartament.bathroom = 1;
console.log(newApartament);
newApartament.lights = 10;
console.log(newApartament);

myHouse = { 
rooms: 3,
zone: "Bucium",
animals: 1
}

var myApartament = {...myHouse, ...newApartament };
console.log(myApartament);
 
 

// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"

var menu = {
menuInside : { contact: 0243563, gallery: "photo"}
};

console.log(menu.menuInside);
var menuKeys = Object.keys(menu.menuInside);
console.log(menuKeys);
function menuResult() {
return menu.menuInside.contact + ', ' + menu.menuInside.gallery + ', ' + ' apartin obiectului menu'
}
console.log(menuResult());


//Ex6
// Avem obiectul :
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui. 
myObject = {
name: "John",
surname: "Applegate",
};

var savedObjects = Object.values(myObject).sort();
console.log(savedObjects);


//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.

function seasons(autumn, summer, winter) {
this.autumn = autumn;
this.summer = summer;
this.winter = winter;
};

var allSeasons = new seasons("Rain", "Sun", "Snow")
function mySeasons () {
return allSeasons.summer.toUpperCase() + ', ' + allSeasons.autumn.toUpperCase() + ', ' + allSeasons.winter.toUpperCase()
};

console.log(mySeasons());

  
  
  
  