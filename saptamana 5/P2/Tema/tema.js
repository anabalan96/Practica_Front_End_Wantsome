1.
function isString(checkedString) {
  if (Object.prototype.toString.call(checkedString) === "[object String]")
    return true;
  else
    return false;   
    };

console.log(isString("w3resource"));
console.log(isString([1, 2, 4, 0]));


2.
 function isBlank(checkedIndex){
   if (checkedIndex.length === 0)
     return true;
   else
     return false;
 }
console.log(isBlank(""));
console.log(isBlank("abc"));

3.
var stringToArray = "Robin Singh";
var result = stringToArray.split(" ");
console.log(result) 
//["Robin", "Singh"]//

4. 
function abbrevName (name) {
  var splitName = name.trim().split(" ");
  if (splitName.length > 1) {
    return (splitName[0] + " " + splitName[1].charAt(0) + ".");
    
}
  return splitName[0];
}
console.log(abbrevName("Robin Singh"))

5.

function capitalize(letterFirst){
  return letterFirst.charAt(0).toUpperCase() + letterFirst.slice(1);
  
}
 console.log(capitalize("js string exercices"));

6.
function truncateString( name, number){
  if (name.length<= number){
    return name
  }
  return name.slice(0, number);
  
}
console.log(truncateString("Robin Singh", 4))

7.
function isUpperCaseAt(string, num){
  return string.charAt(num).toUpperCase() === string.charAt(num);
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

8.

function insert(strings, stringToInsert, position) {
    if(typeof(position) == "undefined") {
     position = 0;
   }
    if(typeof(stringToInsert) == "undefined") {
     stringToInsert = "";
   }
    return strings.slice(0, position) + stringToInsert + strings.slice(position);
     }
 console.log(insert('We are doing some exercises.'));
 console.log(insert('We are doing some exercises.','JavaScript ', 0));
 console.log(insert('We are doing some exercises.','JavaScript ',18));

9.
function removeFirstOccurrence(phrase, searchWord){
	var result = phrase.indexOf(searchWord);
	if (result === -1) {
		return phrase;
	}
	return phrase.slice(0, result) + phrase.slice(result + searchWord.length);
}
console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", "the"));

10.

function compareStrings(strOne, strTwo)
{
var result = strOne.toUpperCase() === strTwo.toUpperCase();
  return result;
}

console.log(compareStrings('abcd', 'AbcD'));

11.
function uncapitalize(firstLeter){
  return firstLeter.charAt(0).toLowerCase() + firstLeter.slice(1);
  
}
 console.log(uncapitalize("Js string exercices"));





