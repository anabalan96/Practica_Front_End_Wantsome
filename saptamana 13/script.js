

// //1.
// Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
// mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
// comparatie.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const check = nr => {
    return new Promise((resolve, reject) => {
        if (nr > 10) {
            resolve("Numarul este mai mare!");
        } else {
            reject("Numarul este mai mic!");
        }
    });
};

check(11).then(validate => {
    console.log(validate);
});
check(9).catch(validate => {
    console.log(validate);
});


//2 Creati o functie care primeste un string ca si argument si returneaza un Promise care testeaza daca acesta contine
// sau nu cuvantul “promise” - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const checkMyString = string => {
    return new Promise((resolve, reject) => {
      const toBeChecked = string.includes('promise');
      if (toBeChecked) {
        return resolve(`Yupi! your string includes the word "promise"`);
      } else {
        return reject(`Word "promise" not found, try it again`);
      }
    }); 
  };
  
  checkMyString("promise me").then(word => {
    console.log(word);
  });
  checkMyString("Random word").catch(word => {
    console.log(word);
  });
  



// 3. Creati o functie care primeste un singur parametru si returneaza un Promise. Folosind setTimeout, dupa 500ms,
// acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri: daca input-ul este un string,
// Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; daca input-ul nu este un string,
// Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const promiseForString = (inputStr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof inputStr === "string") {
                resolve(inputStr.toUpperCase());
            } else {
                reject(inputStr);
            }
        }, 500);
    });
};

promiseForString("I am a string").then(first => {
    console.log(first)
});

promiseForString(9).catch(second => {
    console.log(second)
});

console.log(promiseForString())


// 4.
//Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.

const capitalizeWords = array => {
    let promiseVar = new Promise((resolve, reject) => {
        if (array.every(string => typeof string === "string")) {
            resolve(
                array.map(letter => letter.toUpperCase())
            );
        } else {
            let error = "try it again";
            reject(error);
        }
    });

    return promiseVar;
};

const sortWords = sorted => sorted.sort();
const result = word => console.log(word);
const arr = bigError => console.log(bigError);


capitalizeWords(['abc', 'fgr', 'vle', 'wxo', 'uio'])

    .then(sortWords)
    .then(result)
    .catch(arr)

capitalizeWords([0])

    .then(sortWords)
    .then(result)
    .catch(arr)