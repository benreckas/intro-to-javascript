// I am a comment. Something

/*
console.log(name);
*/

// function() {
//   console.log('sdlkfh');
//   console.log('sdkfg');

//   if(true) {
//     console.log('sdfkg');
//   }
// // }

// var firstName = 'Paka';
// console.log('Paka', firstName);

// const name = 'Jose';
// console.log(
//   `asdfasdfasdfasdfasdfasdfasdfasdfasdf ${name}  asdfasdfasdfasdfasdfasdfasdfadfadsf`
// );

// const date = new Date();
// console.log(date);

// strict equals cares about data types and loose equals does not
// const arr1 = 'this is good';
// const arr2 = new String(arr1);

// console.log(arr1 === arr2);
// console.log(arr1 == arr2);

// const lastName = '';

// if (lastNmae) {
//   console.log(`You did not provide a last name`);
// }

//Try This:

// 1. prompt user for name
// if they provide a name, alert their name...
/// if no alert user that you need a name...
// const name = prompt('What is your name?');

// if (name) {
//   alert(`Hello ${name} and welcome to Intro to JS`);
// } else {
//   prompt('Please enter your name again');
// }

//as a ternary operator
// name ? alert(name) : alert('INvalid name you fool!');
// if they provide a name, alert their name...
/// if no alert user that you need a name...

// switch (name) {
//   case X = alert(`Hello ${name} and welcome to Intro to JS`):
//     break;

//   case Y = prompt('Please enter your name again! FOOOOOL'):
//     break;

//   case Z = alert(`thank you ${name}`):
//     break;
// }


// const overage1 = prompt("I am 18 years of age or over. Please answer with 'true' or false'");
// if (overage1 = 'true') {
// } else {
//   prompt("You not old enough...fool");
// }

// const overage2 = prompt('Are you less than 80 years of age?  Answer with "true" or "false"');
// if (oveage2 = 'true') {
//   const starWars = prompt("Do you like Star Wars? ") {
//     if (starWars = 'yes') {
//       alert("You are awesome!!!!");
//     };
//   if (overage2 = 'false') {
//     prompt("Do you like prunes");
//   }
// }
//   };


// const item1 = prompt('Something I need to do .');
// const item2 = prompt('Something I need to do .');
// const item3 = prompt('Something I need to do .');

// const todoList = [[item1], [item2], [item3]];
// console.log(todoList)

// for (let i = 0; i < todoList.length; i++) {
//   const list = todoList[i].push(+prompt(`How long will ${todoList[i][0]} take?`))
// }

// let longestItem = 0;
// let longestItemIndex = 0;

// for (let i = 0; i < todoList.length; i++) {
//   if (todoList[i][1] > longestItem) {
//     longestItem = todoList[i][1];
//     longestItemIndex = i;

//   }
// }

// console.log('Longest Item: ', todoList.splice([longestItemIndex], 1));

// console.log(todoList);


// const leastFavoriteTeams = ['Yankees', 'Real Madrid', 'Patriots', 'Alabama'];
// leastFavoriteTeams.unshift('Lakers');
// leastFavoriteTeams.push('Ohio State');
// leastFavoriteTeams.splice(3, 1);
// leastFavoriteTeams.unshift('Patriots');




// console.log(leastFavoriteTeams);


/**
 * 1) Add 'Lakers' to the front of the leastFavoriteTeams array

 * 2) Add 'Ohio State' to the back of the leastFavoriteTeams array
 * 3) Remove 'Patriots' from the leastFavoriteTeams array
 * 4) Add 'Patriots' back to the beginning of the leastFavoriteTeams array
 * 5) Console log the array to see if you did everything right
 *
 * -> ['Patriots', 'Lakers', 'Yankees', 'Real Madrid', 'Alabama', 'Ohio State']
 */

// const heroes = ['Drow', 'Phantom Lancer', 'Invoker'];

/**
 * 1) Reverse the heroes array
 * 2) Add 'Ember Spirit' after the first index of the heroes array
 * 3) Remove the last member of the heroes array
 * 4) Remove the first item of the heroes array
 * 5) Add 'Shadow Fiend' to the beginning of the heroes array
 * 6) Console log the array to see if you did everything right
 *
 * -> ['Shadow Fiend', 'Phantom Lancer', 'Ember Spirit']
 */

// function dogYears(dogAge) {
//   const bigDog = alert(dogAge * 7);

// }
// dogYears(+prompt('What is the age of your dog?'));


// function calcLifetimeSupply(currentAge, supplyPerDay, maxAge) {
//   alert(((maxAge - currentAge) * 365) * supplyPerDay);

// }
// calcLifetimeSupply(38, 15, 13434);





// METHODS =

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;

//   }
// }
// // Here is the method (sayName) and, unlike functions, methods are associated with objects//
// sayName() {
//   console.log(this.name);
// };
// sayAge() {
//   console.log(this.age);
// };


// const david = newPerson('David', 40);
// const ben = newPerson('Ben', 29);

// console.log(ben.howOld());
// console.log(david.howOld());









//Day 5 Take Home


function thanksgiving(name, list) {
  console.log(`${name} is thankful for:${makeList(list)}}`);
}

function christmas(name, list) {
  const christmasList = makeList(list);
  console.log(`${name} wants these things for Christmas: ${christmasList}`);

}

function makeList(list) {
  let formattedList = '';
  for (let i = 0; i < list.length; i++) {
    formattedList += ` ${i + 1} ${list[i]},`

  }
  return formattedList;
  console.log(formattedList);
}

thanksgiving("David", ["moving some units foo", 'drinking some gravy']);
christmas("David", ["moving some units foo", 'tapping dat ass']);







//DOM Manipuliation 
const header = document.querySelector('#header');
console.log(header);

//click event

header.addEventListener('click', function (event) {
  console.log(event);
  alert(event);
  //console.log(e)
  //e and event are the same thing
})

//samee as above refactored
header.addEventListener('click', event => header.style.color = 'dodgerblue');
header.addEventListener('click', event => header.style.backgroundColor = '#0000ff');
document.addEventListener('keydown', event => {
  console.log(event);

  if (event.key === "Enter") {
    alert('You hit the enter key')
  } else {
    alert('you are smelly');
  };
});

header.style.color = 'tomato';


const button = document.querySelector('#mine');
console.log(mine, button);
button.addEventListener('click', event =>
  // console.log(event);
  alert("You just semt me somet adsfinging")
);

const div = document.querySelector('#nutty');
// console.log(nutty, div);
div.addEventListener('click', event =>
  // console.log(event)
  div.style.backgroundColor = 'yellow'
);

const nolo = document.querySelector('#header');
nolo.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    nolo.style.backgroundColor = 'dodgerblue'
  }
});


const buttons = document.querySelectorAll('button');
console.log(buttons);






function someFunction(event) {
  console.log(event);
  alert('yolo homey');
}
for (let button of buttons) {
  button.addEventListener('click', event => someFunction(event));
}

// button.forEach(button => button.addEventListener('click', () => alert('clicked')))




// Day 6 Take Home

input.value = 56;

two functions = one for celsius; and for fahrenheit;



