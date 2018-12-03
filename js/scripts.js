// Dot Notation
// console.log(document.forms.loginForm.button);

// const btn = document.forms.loginForm.button;

// btn.addEventListener('click', e => {
//   e.preventDefault();

//   let firstName = document.forms.loginForm.firstName;
//   console.log(firstName.value);
//   console.log('Clicked');

//   firstName.value = '';
// })
// Bracket Notation (the hyphen breaks dot notation)
// console.log(document.forms['login-form'])

/**
 * JavaScript this
 */

//  console.log(this);

// const person = {
//   firstName: 'Ben',
//   lastName: 'Reckas',
//   age: 29,
//   wife: {
//     firstName: 'Norma',
//     lastName: 'Reckas',
//     age: 29,
//     howOld() {
//       console.log(`${this.firstName} ${this.lastName} is: ${this.age} years old.`);
//     }
//   },
//   howOld() {
//     console.log(`${this.firstName} ${this.lastName} is: ${this.age} years old.`);
//   }
// };

// Left of the dot for call site
// person.howOld();
// person.wife.howOld();


const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', logThis);
// btn2.addEventListener('click', logThis);

// function logThis() {
//   console.log(this);
// }

// btn1.addEventListener('click', function() {
//   // this.parentElement.style.display = 'none';
//   console.log(this); // -> btn1
// });

// btn2.addEventListener('click', () => {
//   console.log(this); // -> Window
// });

const buttons = document.querySelectorAll('button');
console.log('buttons', buttons);

buttons.forEach(button => button.addEventListener('click', function() {
  this.style.display = 'none';
}))

// for(let button of buttons) {
//   button.addEventListener('click', function() {
//     this.style.display = 'none';
//   });
// }



// const dog = {
//   name: 'Fido',
//   says: 'Wooof'
// }

// const cat = {
//   name: 'She-Ra',
//   says: 'Meow'
// }

// const baldeagle = {
//   name: 'Freedom',
//   says: 'Baaakaaaaww'
// }

// function speak() {
//   alert(`${this.name} says: ${this.says}`);
// }
// console.log(this);
// const dogSays = speak.bind(dog);
// dogSays();

// const catSays = speak.bind(cat);
// catSays();

// const baldeagleSays = speak.bind(baldeagle);
// baldeagleSays();





// function speak(location, status) {
//   alert(`${this.name} says: ${this.says} from ${location} and ${status}`);
// }

// const options = ['The Yard', 'because it is hungry'];

// speak.apply(dog, options);
// speak.apply(cat, ['Your Lap', 'wants pets']);
// speak.apply(baldeagle, ['The Epic Mountainside', 'is awesome']);


class Person {
  constructor(name, age, favColor) {
    this.name = name;
    this.age = age;
    this.favColor = favColor;
  }

  sayName() {
    console.log(this.name);
  }
}

const ben = new Person('Ben', 29, 'Pink');
const david = new Person('David', 40, 'Blue');

ben.sayName();
david.sayName();