//HOMEWORK
//1. "Definesc" for-ul in care var i =0, i <=20, si I++ ca sa fie parcurs tot sirul de numere de la 0 la 5
//in interiorul for-ului creez conditia if /else iar numerele for fi impartie ca pare si impare datorita functiei %2
for(var i = 0; i <= 20; i++){
     if (i % 2 ==0){
     console.log(i + " este numar par")
     }else{
     console.log(i+ " este numar impar")
     }
};

//mai intai am creat variabila i=0
//"Definesc" conditiile dupa care functioneaza loopul while
//parcurgem tot sirul de numere folosind i++
//numele pare si impare for fi afisate in consola de la 1 la 20 urmate de mesajul corespunzator
var i = 0;
while(i <= 20){
     if (i % 2 ==0){
     console.log(i + " este numar par")
     }else{
     console.log(i+ " este numar impar")
     }
     i++
};


//2.
//2.1. Definesc conditiile dupa care functioneaza for-ul meu 1 pana la 10, cu 9
//creez variabila care imi va inmulti numerele
//creez variabila cu mesajul dorit
// creez un console.lg care imi va afisa rezultatul

for(i = 0; i <= 10; i++){
     var multi = i*9;
     var result = i + "*"+ 9 + "=" + multi
console.log(result)
};

//2.2.metoda while unde i=0, 
// indexul i care este de la 1 la 10 va fi inmultit cu noua
//creez variabila care imi va inmulti numerele
//creez variabila cu mesajul dorit
// creez un console.lg care imi va afisa rezultatul

var i = 0
while(i <= 10){
     var multi = i*9;
     var result = i + "*"+ 9 + "=" + multi
     i++;
console.log(result)
};

//3.pentru ca sa afisez tabla inmultirii in consola voi crea o variabila care imi va incorpora mai tarziu mesajul dorit
//creez un for in for, primul for pentru cifrele din prima coloana, al doilea pentru cifrele din coloana 2
//creez o variabila care imi va inmulti cifrele, ele fiind  i si j
//ma intorc la variabila mea result si ii atribui mesaul care vreau sa il afisez in consola
//dau un console log pentru variabila result si voila tabla inmultirii
var result = "";
     for (i=0; i<=10; i++) {
     for( j=0; j<=10; j++){
         var  multiResult = (i*j);
         result += i+ " x " + j + " = " + multiResult + "\n";
     }       

};
console.log(result);



//4. 
// am creat o functie anonima si variabila care stocheaza mesajul care vreau sa fie afisat mai tarziu
//folosind metoda if am creat conditiile dupa care imi va fi afisat mesajul dorit
//later add un for care imi parcurge toate if-urile si afiseaza in consola mesajul pentru fiecare calificativ
var promovation = function (mark){
var message = "Calificatul corespunzator punctajului " + mark + " este "
   if ((mark >= 1 && mark <= 3)){
     return message + "E";
     }
   if ((mark >= 4 && mark <= 6)){
     return message + "D"
     }
   if((mark >= 7 && mark <= 8)){
     return message + "B"
     }
   if(mark === 9){
     return message + "A"
     }
   if(mark === 10){
     return message + "A+"   
     }

};
 
for(i=1; i <= 10; i++){

console.log(promovation(i));
};