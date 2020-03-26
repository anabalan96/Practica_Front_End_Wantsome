
//1. creez un named function
// creez o variabila care sa imi identifice primul caracter din element
// o noua variabila care sa imi identifice numerele pare
//doua variabile care imi stocheaza meajul care vreau sa il afisez pe ecran
// imi creez conditiile dupa care functioneza functia mea
//cnp este cuprins inre 1 si 8, deci imi creez conditia care imi exclude cnpurile care incep cu 9 si 0
//definindule ca "undifined"
//tot ce se incadreaza la par este F, impar M
function individ(cnp) {
    var genderByCnp = cnp.toString().charAt(0);
    var odd = genderByCnp%2===0;
    var returnM = "Persoana verificata este de sexul M";
    var returnF = "Persoana verificata este de sexul F";
    
  if(genderByCnp === 9)
    {return "undifined";}
   if(genderByCnp <= 0)
    {return "undifined";}
  if(odd)
     {return returnF;}
    else{ return returnM;}
  };

  //2. creez functin expression 
  // stochez mesajul dorit intro variabila
  //creez conditiile pentru fiecare calificativ

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

  //3.1.
  //am creat un named function
  //stochez mesajul dorit intr-o variabila
  //creez conditia folosind varianta swich
  //conditia include 6 cazuri diferite si un default penru marcile de masina care nu sunt incluse in conditie

  function vipCars (brand){
    var madeIn = "Marca " + brand + " se produce in "
   
   switch(brand) {
   case "BMW": return madeIn + "Germania";
   break;
   case "Honda": return madeIn + "Koreea";
   break;
   case "Dacia": return madeIn + "Romania";
   break;
   case "VW": return madeIn + "Germania";
   break;
   case "Tesla": return madeIn + "USA";
   break;
   case "Zoe": return madeIn + "Japonia";
   break;
   default: return "Marca este necunoscuta";
    }
  };
 
    
  

  //3.2 
//varianta Literals Objects
//ficare case include o functie care returneaza mesajul dorit, 
//la final scriem conditia dupa care vor functiona functiile din variabila mycars
  function getCar(type) {
    var producedIn = "Marca " + type + " este produsa in";
    var car;
    var myCars = {
      'BMW': function (){
        return producedIn + " Germania";
      },
      'Honda': function(){
          return producedIn + " Koreea" ;
      },
      'Dacia': function (){
        return producedIn + " Romania";
      },
      'VW': function(){
        return producedIn + " Germania" ;
      },
      'Tesla': function (){
        return producedIn + " USA";
      },
      'Zoe': function(){
        return producedIn + " Japonia" ;
      },
      'default': function (){
        return "Marca este necunoscuta";
      }
  };
    
    if(myCars[type]) {
      car = myCars[type];
    } else {
      car = myCars["default"];
    }
    return car();
  };
  


// 3.3 am creat ap functie anonima
// salvat mesajul intro variabila
//creat conditia functiei care include 6 exemple diferite si un caz "undifined"
    var getYourCar  = function (model) {
    var manufacturedBy = "Marca " + model + " este produsa de "
    if(model === "BMW"){
      return manufacturedBy + "Germania"
    }
    if(model === "Dacia"){
      return manufacturedBy + "Romania"
    }
    if(model === "Honda"){
      return manufacturedBy + "Koreea"
    }
    if(model === "VW"){
      return manufacturedBy + "Germania"
    }
    if(model === "Tesla"){
      return manufacturedBy + "USA"
    }
    if(model === "Zoe"){
      return manufacturedBy + "Japonia"
    }
    else{
      return "Marca este necunoscuta"
    }
  };
    

  //4. creez IIFE folosint variabila deja creata
  // creed conditia care imi sorteaza valoarea keylor "salary" in ordine crescatoare
  (function () {
    var cars = [
    {name: "John",  salary: 20000 },
    {name: "Danny", salary: 30500 },
    {name: "Bekker", salary: 15000 }
  ];                    
  
  
  cars.sort(function (a, b) {
    return a.salary - b.salary
  });
   console.log(cars)
  })();
    