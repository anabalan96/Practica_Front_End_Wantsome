//1.
function capitalizeNames(arr){

    let capitalize = arr.map(name=> name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
    return capitalize;
}


console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//2. Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca
//argument

const doubleEachNumber = (arr) => arr.map(string  => {if(typeof string === "number"){return string*2;} else {return string;}});

console.log(doubleEachNumber([2, "5", 100, "100", "blalblala"]));

//3. 

const getPersonsNames = (arr) => arr.map((fullname)=> fullname.name + " "+ fullname.surname);
console.log(getPersonsNames([
 {
 name: "Angelina",
 surname: 'Jolie',
 age: 80
 },
 {
 name: "Eric",
 surname: 'Jones',
 age: 27
 },
]));


//4.
const computeExamPass = (arr) => arr.map(mark => {
    if (mark.grade > 5) {
        return mark.name + " has passed the exam";
    }

    return mark.name + " has not passed the exam";
}
);


console.log(computeExamPass([
    {
        name: "Angelina",
        surname: "Jolie",
        grade: 7
    },
    {
        name: "Eric",
        surname: "Jones",
        grade: 3
    },
]));

//5. Implementati functia de mai jos si utilizati
//rezultatul pentru a afisa elementele intr-o pagina

const getPersonsDomElements = (arr) => {
    const display = arr.map(obj => '<h1>' + obj.name + ' ' + obj.surname + '</h1>' + '<h2>' + obj.age + '</h2>');
    const body = document.getElementsByTagName('body')[0];
    return body.innerHTML = display;
};

console.log(getPersonsDomElements([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80
    },
    {
        name: "Eric",
        surname: "Jones",
        age: 27
    },
]));

const myData = [{
    name: 'Iggy Turskis',
    active: false
}, {
    name: 'Geoff Newell',
    active: true
}, {
    name: 'Peter Newnham',
    active: true
}, {
    name: 'James Walker',
    active: false
}];

const getStatus = () => myData.filter(status => status.active === true);
getStatus();
console.log(getStatus());




// 1 /* Ex.1
//Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
}, {
    name: 'Geoff Newell',
    active: true
}, {
    name: 'Peter Newnham',
    active: true
}, {
    name: 'James Walker',
    active: false
}];

const getStatus = () => myData.filter(status => status.active === true);

getStatus();
console.log(getStatus());

// 2
/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654 },
    { from: 'Sydney', to: 'chittagong', distance: 8858 },
    { from: 'Kolkata', to: 'Sylhet', distance: 670 }
]

//miles
const convertToMiles = () => distances.map((km) => "From " + km.from + " to " + km.to + " are " + (km.distance * 0.621371) + " mile");
console.log(convertToMiles())
//less 10000
const less = () => distances.filter(km2 => km2.distance < 10000);
console.log(less())
//distanta totala
const distanceTotal = () => (distances.reduce((acc, x) => acc + x.distance, 0));
console.log(distanceTotal());

//3

// Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 
const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const getIdAndTitle = () => releases.map((theData) => { return "id: " + theData.id + " " + "title: " + theData.title + "," });
console.log(getIdAndTitle());


// Returnati id-urile videourilor care au rating 5.0
const newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const highRatingvideo = () => newReleases.filter(rate => rate.rating === 5).map(urlVideo => urlVideo.uri);

console.log(highRatingvideo());


// Vreau la final sa am o lista de video ids

const movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];

const videoIds = () => movieLists.map(insideObj => insideObj.videos.map(getId => getId.id))

console.log(videoIds());

//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter

let movieLists = [
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];

const getInformation = () => movieLists.map(insideVideo => insideVideo.videos.map(insideVideoInfo => "id: " + insideVideoInfo.id + " title: " + insideVideoInfo.title + " boxarts: " + insideVideoInfo.boxarts.filter((getSize) => getSize.width === 150 && getSize.height === 200).map(getUrl => getUrl.url)));

console.log(getInformation());


//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.fromCharCode() 
const moveLetters = (string) => string.split("").map(expresion => String.fromCharCode(expresion.charCodeAt(expresion) + 1)).join("");


console.log(moveLetters("rutngmsjhgg"));


// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"

const changeWordCase = (strings) => {
    const splitedString = strings.split(" ");
    let finalWordCase = [];
    for (let i = 0; i < splitedString.length; i++) {
        if (i % 2 === 0) {
            finalWordCase.push(splitedString[i].toUpperCase())
        }
        else { finalWordCase.push(splitedString[i].toLowerCase()) }
    }
    return finalWordCase;
};
console.log(changeWordCase('hey ppl, lets learn javascript together'));

// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

// let allCats =  code
let allCats = () => arr.filter(cat => cat.species === "cat");
console.log(allCats());
// let allHumans =  code
let allHumans = () => arr.filter(human => human.species === "human");
console.log(allHumans());
// let allFemales =  code
let allFemales = () => arr.filter(female => female.sex === "f");
console.log(allFemales());
// let totalOfAllAges =  code
let totalOfAllAges = () => arr.reduce((accumulate, agesTotal) => accumulate + agesTotal.age, 0);
console.log(totalOfAllAges());
// let averageAgeOfCats =  code
let averageAgeOfCats = () => arr.filter(catAverage => catAverage.species === "cat").reduce((acc, agesCat) => acc + agesCat.age, 0) / arr.length;
console.log(averageAgeOfCats());
// let averageAgeOfHumans = code
let averageAgeOfHumans = () => arr.filter(humanAverage => humanAverage.species === "human").reduce((acc, agesHuman) => acc + agesHuman.age, 0) / arr.length;
console.log(averageAgeOfHumans());
// let avgLengthOfNames = code
let avgLengthOfNames = () => arr.map(getnameLength => getnameLength.name.length).reduce((accum, sumNameLength) => accum + sumNameLength, 0) / arr.length;
console.log(avgLengthOfNames());


//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

let square = (num) => num * num;
let double = (num2) => num2 * 2;
let composedValue = (square, double, theNumber) => square(double(theNumber));
console.log(composedValue(square, double, 5))

let compose = (theNumber) => square(double(theNumber));
console.log(compose(10));

//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

let square = (num) => num * num;
let double = (num2) => num2 * 2;
let composedValue = (square, double, theNumber) => square(double(theNumber));
console.log(composedValue(square, double, 5))

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
let compose = (theNumber) => square(double(theNumber));
console.log(compose(10));

// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc


//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

//let odd = (arr) => arr.filter(odd => odd % 2 === 1)
//console.log(odd([1, 2, 3, 4]))

let isOdd = (oddNr) => oddNr.filter(oddNr => oddNr % 2 === 1);

let find = (array, fn) => fn(array);
console.log(find([1, 2, 3, 4, 5], isOdd));

