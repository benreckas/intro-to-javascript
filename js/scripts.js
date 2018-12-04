// const str = new String('Ben');
// console.log(str);

// console.log(Object.getPrototypeOf(42));

// const arr = new Array('Ben', 29);
// console.log(arr);

// const num = new Number(42);
// console.log(num);

// const bool = new Boolean(true);
// console.log(bool);

// const person = {
//   name: 'Billy Bob'
// };

// console.log(person);

// const dog = new Object();

// dog.name = 'Fido';

// console.log(dog);


// Old Way - Constructor Function
// function Animal(name, energy) {
//   this.name = name;
//   this.energy = energy;

//   this.play = function() {
//     this.energy -= 5;
//   }
// }

// Animal.prototype.eat = function() {
//   this.energy += 10;
// }

// const dog = new Animal('Dog', 40);
// const cat = new Animal('Cat', 5);

// console.log(dog);
// console.log(dog.name);
// console.log(dog.energy);
// dog.play();
// console.log(dog.energy);
// dog.eat();
// console.log(dog.energy);
// console.log(cat);

// function Todo(text, isDone) {
//   this.edit = function() {

//   }
// }


// Extending a constructor fn, intro to classes









// function User() {
//   // this.name;
//   // this.password;

//   this.getStuff = function() {
//     this.getName();
//     this.getPassword();
//   }

//   this.getName = function() {
//     this.name = prompt('n');
//   }

//   this.getPassword = function() {
//     this.password = prompt('p');
//   }
// }

// const ben = new User();
// ben.getStuff();

// console.log(ben);


// OLD
function AnimalChild(name, energy) {
  AnimalParent.call(this, name, energy)

  this.name = name;
  this.energy = energy;

  this.play = function() {
    this.energy -= 5;
  }
}




// NEW
class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  play() {
    this.energy -= 5;
  }
}

class Dog extends Animal {
  constructor(name, energy, says) {
    super(...arguments);

    this.says = says;
  }

  speak() {
    console.log(`Dog says: ${this.says}`);
  }
}


const fido = new Dog('Fido', 40, 'Wooff');

console.log(fido.energy);
fido.play();
console.log(fido.energy);





