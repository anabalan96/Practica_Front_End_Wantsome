//PRACTICE: Algorithms
//Cerinte:
//1. Scrieti o functie care sa protejeze emailul unui user
//de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

// creez functia, fac split la string dupa @, pasul doi fac split dupa [.] la ce am pe pozitia 0 si ascund ce am pe pozitia 1  dar ianinte de @.
//functia nu va functiona si daca vreau sa afisezprima litera din ce am pe pozitia 1 inainte de @, nu am descoperit cum sa o fac sa functioneze.

function protectYourEmail(email) {
    var arondSplit = email.split("@");
    var spotSplit = arondSplit[0].split('.');
    return spotSplit[0] + "...@" + arondSplit[1];
}

protectYourEmail("ana.balan@gmail.com");

//2. Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
//de ex: myFunction("i am superman") sa printeze "I Am Superman"

//creez o functie, apoi fac un split la stringul meu(splitul in salvez intro variabila), creez apoi o variabila care imi va salva rezultatul dorit.
//foolosind for parcurg stringul meu care a fost splituit, apoi folosind metoda push indic functiei pozitia care doresc sa fie toUpperCase si 
//bineinteles cu ajutorul metodei slice imi adaug si cealalta parte a stringului(ce urmeaza dupa pozitia 0), totodata stergand pozitia 0 care este LowerCase
//fac un return de variabila care imi salveaza rezultatul, folosind metoda join pentru a concatena toate elementele din array-ul meu care au fost separtate de [,] atunci cand au fost splituite
//

function firstLetterUpper(str) {
    var array = str.split(' ');
    var myArray = [];
    for (var index = 0; index < array.length; index++) {
        myArray.push(array[index].charAt(0).toUpperCase() + array[index].slice(1));
    }
    return myArray.join(' ');
}

firstLetterUpper("what are we doing today, superman?");

//3. Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
//ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

// creez o functie, fac split la string, folosesc metoda loop while si parcurg stringul. 
//creez conditia dupa care functioneaza loopul meu si anume [if] ca sa transform ce e LowerCase to UpperCase si viceversa.
//fac un return de variabila care a salvat stringul splituit, si folosind metoda join concatenez elementele array-ului care au fost separate de  [,] atunci cand sa facut split

function swichLetters(letters) {
    var myLetters = letters.split('');
    var i = 0;
    while (i < myLetters.length) {

        if (myLetters[i] == myLetters[i].toUpperCase()) {
            myLetters[i] = myLetters[i].toLowerCase();

        } else if (myLetters[i] == myLetters[i].toLowerCase()) {
            myLetters[i] = myLetters[i].toUpperCase();

        }

        i++;
    }
    return myLetters.join();
}

swichLetters('WWWwTTtttTiiiIIPPklf');


//  4. Scrieti o functie care sa concateneze un string de cate ori ii zicem
//de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

// creez functia care  accepta ca si argument un string si un numar
//creez variabila care va salva resultatul
//creez un for ca sa parcurg stringul meu
//foloesc varibila sus creata pentru ai atribui ce sa afiseze in consola

function multiplePrints(string, number) {

    var result = "";

    for (i = 0; i < number; i++) {

        result += string;
    }
    console.log(result);
}

multiplePrints("Wantsome", (7));


//5. A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word
//'level'. Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

// creez functia care accepta ca si argument un string
//creez variabila care imi va face split la string
// creez conditia [if] unde fac un reverse la stringul care a fost splituit si in concatenez folosinf metoda [join], iar daca rezultatul este stringul meu
// atunci se face  return cu mesajul dorit, daca nu alt mesaj care

function poli(word) {

    var checkPoli = word.split("");

    if (checkPoli.reverse().join("") === word) {

        return word + " is polindrome!";

    } else {

        return word + " is not a polindrome";
    }

}

poli("level");

//6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si
//returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

// creez o functie care imi accepta ca si argument un array format din mai multe array-uri
//creez o variabila care imi va salva un array cu valori [0] dupa care imi vor fi verificare valorile din array-ul meu
// creez un for pentru array, si un for pentur array-urile din array, pentru a le parcurge
//creez o conditie sa imi fie verificare vaolrile din din array su "subarray" cu array creat de mine in varibila de mai sus
//fac un return la variabila de mai sus si imi va afisa consola cea mai mare variabila din fiecare 'subarray'

function gratest(array) {
    var gratestNumber = [0, 0, 0, 0, 0];
    for (var i = 0; i < array.length; i++) {
        for (var y = 0; y < array[i].length; y++) {

            if (array[i][y] > gratestNumber[i]) {
                gratestNumber[i] = array[i][y];
            }
        }
    }
    return gratestNumber;
}

gratest([[4, 5], [3, 8], [5, 7, 3], [0, 1], [9, 6, 5]]);

//7. Implementati o functie care face reverse la un string

//creez o functie care accepta ca si argument un string,
// creez variabila care imi va salva conditia dupa care se va face reverse
//mai intia dau split, spoi reverse, apoi join ca sa cocatenez elementrele din array-ul "creeat' atunci cand sa facult split
//return la variabila

function reverseStr(string) {
    var reversedStr = string.split('').reverse().join('');
    return reversedStr;
}

reverseStr("tisuer a uem lusrever icnuta ,gnirts tseca itic itop acaD");

//8. Implementati o functie care calculeaza factorialul unui numar

//creez o functie care accepta ca si argument un numar
//creez o condtiei [if] in care daca nr  < 0 sa imi afiseze un mesaj, daca este egal cu 0 afiseaza 1. daca nu sa imi faca inmultirea folosit logica calcularii unui nr factorial

function factorial(number) {
    if (number < 0) {
        return "Choose a number  greater than 0";

    } if (number == 0) {

        return 1;

    } else {

        return (number * factorial(number - 1));
    }

}

factorial(9);

//9. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

//crrez un string care imi accepta ca si argument doua stringuri, 
//creez  doua foruri pentru a parcurge ambele stringuri, 
//creez conditia [if] un de imi verifica daca primul string se regaseste in cel deal doilea string
//imi vor fi afisate mesajul de true sau false

function checkTheEndLetters(begining, end) {
    for (i = 0; i < end.length; i++)
        for (y = 0; y < begining.length; y++) {
            if (begining[i] === end[i]) {
                return true;
            }
            {
                return false;
            }
        }
}

checkTheEndLetters("ana", "alana");

//10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul
//lement din array care trece testul specificat



//11. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele
//celui de-al doilea string

// creez o functie care imi va va accepta ca si argument 2 stringuri,
// creez o varibila care imi va salva lungimea celui deal doilea string
//si o variabila pentru rezultat
//creez un for ca sa parcurg lungimea celui de al 2lea string, apoi atribui variabilei mele care salveaza resultat
//variabila mea va face un returna elementele din al doilea string care vor fi regasite in primul string, folosesc metoda [repalce]
//creez conditia if pentru a reurna true sau false

function checkFirstInSecond(first, second) {

    var secondLength = second.length;
    var myVar = "";

    for (i = 0; i < secondLength; i++) {
        myVar = first.replace(second[i], '');
        if (myVar === first) {
            return false;
        }
        first = myVar;
    }

    return true;

}

checkFirstInSecond('mlrelmgofn', 'lemon');


//12. Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare
//element al array-ului pana cand intalneste elementul cu valoarea specificata


//13. Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

//creez variabila  cu valorile false si un string,
// creez functia care imi accepta ca si argument array
//creez variabila pentru resultat
//foloses un for pentru a parcurge array-ul si dau push la array in variabila resultat folosind oepratrul de negare [!]

var myArrayValues = [0, null, undefined, NaN, false, '', 'a true value'];

function verifyTheValues(arrayValues) {
    var result = [];
    for (i = 0; i < arrayValues.length; i++) {
        result.push(!!arrayValues[i]);
    }
    console.log(result);
}

verifyTheValues(myArrayValues);

//14. Scrieti o functie care repeta un string de n ori specificate

//creez functia care imi accepta ca si argument un string si un numar
//creez variabila care va salva rezultatul
//folosesc loop while pentru a parcurge stringul si ai creea conditia dupa care se va conditiona resultatul meu
//return la variabila sus creata

function repeatString(string, num) {
    var repeatedString = "";

    while (num > 0) {
        repeatedString += string;
        num--;
    }
    return repeatedString;
}

repeatString("Repeat it again!", 3);

