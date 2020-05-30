let Person = function () { };

Person.prototype.initial = function (name, age) {
  this.name = name;
  this.age = age;
};

let Trainer = function (subject) {
  this.subject = subject
  this.teach = () => {

    console.log(`${this.name} is now teaching ${this.subject}`);
  }
};
Trainer.prototype = new Person();

let Ana = new Trainer("German Culture");
Ana.initial("Ana");
Ana.teach();

// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.


let Vehicle = function (driver) {
  this.driver = driver;
  this.speed = 0;
  this.drive = function (mph) {
    this.speed = mph;
    return this.driver + " driving at " + mph + " miles per hour";
  }
};

let Car = new Vehicle("Mike");

let Truck = new Vehicle("Albert");

Truck.cargo = [];
Truck.loadCargo = function (cargo) {
  this.cargo.push(cargo);
  return this;
};
Truck.unloadCargo = function () {
  return this.cargo.pop();
};

console.log(Car.drive(90));
console.log(Truck.drive(70));


// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"


//cand dau console.log(triunghi.constructor) tre sa printeze Triangle(a,b,c)

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = "triunghi";
}

const forma = {
  getType: function () {
    return this.type;
  }
};

Triangle.prototype = forma;
Triangle.prototype.constructor = Triangle;
let triunghi = new Triangle(16, 14, 18);
triunghi.getPerimeter = function () {
  return this.a + this.b + this.c;
};

console.log(triunghi.constructor);
console.log(forma.isPrototypeOf(triunghi));
console.log(triunghi.getPerimeter());
console.log(triunghi.getType());
