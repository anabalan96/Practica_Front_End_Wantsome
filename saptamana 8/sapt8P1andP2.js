
//Ex1

let calculate = (nr1, nr2) => {
    if (nr1 > nr2) {
        return nr1 + nr2;
    } return nr1 * nr2;
}
calculate(19, 19);

//Ex2

let testFunction = (num1, num2) => {
    if ((num1 && num2 === 30 || num1 + num2 === 30)) {
        return true
    } return false
}
testFunction(31, 31);

//Ex3

let checkString = (string) => {
    if (string.includes("JS")) {
        return string;
    }
    return `JS ${string}`;
}
checkString("is Easy");

//Ex4

let removeDuplicates = (string) => {
    let uniqueValue = [];

    for (let i = 0; i < string.length; i++) {
        if (uniqueValue.indexOf(string[i]) == -1) {
            uniqueValue.push(string[i])
        }
    }

    let finalValue = uniqueValue.join('')
    return finalValue;

}

removeDuplicates(898700000650);
removeDuplicates("hsidksdhui");



//Ex5


let findLongestString = (string) => {
    let strSplit = string.split(' ');
    let theWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > strSplit[theWord].length) {
            theWord = i;
        }
    }
    return strSplit[theWord];
}
findLongestString("Wantsome is Awsomeeee today");


//Ex6


function star() {
    let x, j, result;
    for (x = 1; x <= 6; x++) {
        for (j = 1; j < x; j++) {
            result += ("*");
        }
        console.log(result);
        result = '';
    }
}
star();



//ex7

const extractNegativeNumbers = (numbers) => {

    const negativeNumbers = [];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }
    return negativeNumbers;

}
extractNegativeNumbers([1, 2, -5, 4, -6]);

//ex8

function calculate(x, y, operator) {
    if (operator === "add") {
        return x + y;
    } if (operator === "devide") {
        return x / y;
    } if (operator === "multiply") {
        return x * y;
    } if (operator === "substract") {
        return x - y;
    }

}
calculate(10, 1, "add");
calculate(9, 3, 'devide');
calculate(2, 2, 'multiply');
calculate(5, 4, 'substract');

function calculate(x, y, operator) {
    switch (operator) {
        case "add":
            return x + y;

            break;

        case "devide":
            return x / y;

            break;

        case "multiply":
            return x * y;

            break;

        case "substract":
            return x - y;

            break;

        default:
            return "Inccorect operator, Try it again!";
    }
}

calculate(10, 1, "add");
calculate(9, 3, 'devide');
calculate(2, 2, 'multiply');
calculate(5, 4, 'substract');

//Ex9

function divide(number) {
    if ((number % 3 === 0 && number % 5 === 0)) {
        return "both"
    }
    if (number % 3 === 0) {
        return "Three"
    }
    if (number % 5 === 0) {
        return "Five"
    } else {
        return number
    }
}

divide(67);

//Master exercises

function getDayAndTime() {
    const today = new Date();
    const day = today.getDay();
    const dayList = ["Duminica", "Luni", "Marti", "Miercuri ", "Joi", "Vineri", "Sambata"];

    let hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    let anteMeridiem = (hour >= 12) ? "PM " : "AM ";
    hour = (hour >= 12) ? hour - 12 : hour;
    if (hour === 0 && anteMeridiem === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            anteMeridiem = ' Noon';
        }
        else {
            hour = 12;
            anteMeridiem = ' PM';
        }
    }
    if (hour === 0 && anteMeridiem === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            anteMeridiem = ' Midnight';
        }
        else {
            hour = 12;
            anteMeridiem = ' AM';
        }
    }

    let result = `Azi este : ${dayList[day]} ${`\n`} Ora este : ${hour}${anteMeridiem} : ${minute} : ${second}`;
    return result;

}
getDayAndTime();


//ex10


let cardPin = (pin) => {
    let letters = /[a-z]/i;
    if ((pin.match(letters) || pin.length > 4 || pin.length < 4)) {
        return false
    } if (pin.length === 4) {
        return true
    }
}

cardPin("923");



//ex11 


let removeVowels = (string) => {
    return string.replace(/[aeiou]/gi, '');
}
removeVowels("Hey I am developer");

//ex12


let isSquareNumber = (number) => {
    return number > 0 && Math.sqrt(number) % 1 === 0;
}
isSquareNumber(25);


//ex13


const isAnagram = (firstWord, secondWord) => {

    if (firstWord.length !== secondWord.length) {
        return false;
    }

    let sortFirstWord = firstWord.split('').sort().join('');
    let sortSecondWord = secondWord.split('').sort().join('');

    return (sortFirstWord === sortSecondWord);
}
isAnagram("silent", "listen");

//Part2
//Ex1

let sumOfGivenNumbrer = (num) => {
    let result = 0;
    for (i = 0; i < num; i++) {
        result += i;
    }
    return result;
}

sumOfGivenNumbrer(20);

//ex2

let findLongestString = (string) => {
    let strSplit = string.split(' ');
    let theWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > strSplit[theWord].length) {
            theWord = i;
        }
    }
    return strSplit[theWord];
}

findLongestString("This string is going to print the longest word");

// ex3

let reverseStr = (string) => {
    let reversedStr = string.split('').reverse().join('');
    return reversedStr;
}
reverseStr("reversed string");

const replaceTheLetters = (theWord) => {
    let newWord = "";
    for (var i = 0; i < theWord.length; i++) {
        if (96 < theWord.charCodeAt(i) && theWord.charCodeAt(i) < 123) {
            newWord += String.fromCharCode(theWord.charCodeAt(i) + 1);
        }
    }
    return newWord;
}
replaceTheLetters("abcefgk");

//ex4

const convertNumToHoursAndMinute = (number) => {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return `${hours}:${minutes}`;
}

convertNumToHoursAndMinute(120);

//ex 5

const alphabeticalOrder = (string) => { return string.split('').sort().join(''); }
alphabeticalOrder("qwertyuiopasdfghjklzxcvbnm");

//ex6

let checkForPlus = (letterAndPlus) => {
    for (let i = 0; i < letterAndPlus.length; ++i) {
        if (i % 2 === 0 && letterAndPlus[i] !== "+") {
            return false;
        } else if (i % 2 === 1 && letterAndPlus[i] === "+") {
            return false;
        } else if (i === 0 && letterAndPlus[i] !== '+') {
            return false;
        } else if (i === letterAndPlus.length - 1 && letterAndPlus[i] !== '+') {
            return false;
        }
    }
    return true;
}

checkForPlus('+a+b+c+');
checkForPlus('+a+bc+');
checkForPlus('a+b+c+');




