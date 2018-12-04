// function Animal(name, energy) {
//   this.name = name;
//   this.energy = energy;

//   this.sayName = function() {
//     console.log(this.name);
//   }
// }

// const dog = new Animal('Dog', 20);
// const cat = new Animal('Cat', 5);

// dog.sayName();
// cat.sayName();

// Animal.prototype.run = function(amount) {
//   this.energy -= 5;
// }

// console.log(dog.energy);
// dog.run();
// console.log(dog.energy);

// function Animal(name, energy) {
//   this.name = name;
//   this.energy = energy;

//   this.sayName = function() {
//     console.log(this.name);
//   }
// }

// function Dog(name, energy, breed) {
//   Animal.call(this, ...arguments);

//   this.breed = breed;
// }

// const charlie = new Dog('Charlie', 40, 'Mutt');

// console.log(charlie);
// charlie.sayName();

// const hawk = new Animal('Hawk', 60, 'Redtail');
// hawk.sayName();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayName() {
//     console.log(this.name);
//   }
// }

// const ben = new Animal('Ben', 29);
// console.log(ben);
// ben.sayName();

// class Dog extends Animal {
//   constructor(name, age, breed) {
//     super(...arguments);

//     this.breed = breed;
//   }
// }

// const fido = new Dog('Fido', 7, 'Goldendoodle');
// console.log(fido);
// fido.sayName();