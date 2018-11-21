// const item1 = prompt('Something I need to do.');
// const item2 = prompt('Something I need to do.');
// const item3 = prompt('Something I need to do.');

// const todoList = [[item1], [item2], [item3]];

// for(let i = 0; i < todoList.length; i++) {
//     todoList[i].push(+prompt(`How long will ${todoList[i][0]} take?`));
// }

// let longestItem = 0;
// let longestItemIndex = 0;

// for(let i = 0; i < todoList.length; i++) {
//     if(todoList[i][1] > longestItem) {
//         longestItem = todoList[i][1];
//         longestItemIndex = i;
//     }
// }

// console.log('Longest Item: ', todoList.splice([longestItemIndex], 1));

// for(let item of todoList) {
//     item.push('ez-pz');

//     alert(item);
// }

// const leastFavoriteTeams = ['Yankees', 'Real Madrid', 'Patriots', 'Alabama'];

// leastFavoriteTeams.unshift('Lakers');
// leastFavoriteTeams.push('Ohio State');
// leastFavoriteTeams.splice(leastFavoriteTeams.indexOf('Patriots'), 1);
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
// heroes.reverse();
// heroes.splice(1, 0, 'Ember Spirit');
// heroes.pop();
// heroes.shift();
// heroes.unshift('Shadow Fiend');
// console.log(heroes);

/**
 * 1) Reverse the heroes array
 * 2) Add 'Ember Spirit' after the first index of the heroes array
 * 3) Remove the last member of the heroes array
 * 4) Remove the first item of the heroes array
 * 5) Add 'Shadow Fiend' to the beginning of the heroes array
 * 6) Console log the array to see if you did everything right
 *
 * -> ['Shadow Fiend', 'Ember Spirit', 'Phantom Lancer']
 */
// const name = 'Ben';

// function logSomething() {
//     console.log(name);
// }

// console.log(name);

// logSomething();




// const number = 42;

// function answerToLife() {
//     console.log(number)
// }

// console.log(number);

// answerToLife();

// function add(a, b) {
//     console.log(a + b);
// }

// function subtract(a, b) {
//     console.log(a - b);
// }

// add(2, 874387);
// subtract(435, 43534);

// const add = (a, b) => {
//     console.log(a + b);
// }

// add(345234, 2433434);

// const sayName = name => {
//     console.log(name);
// }

// sayName('Fido');

// const cat = 'Celestia';

// console.log(cat.substr(0, 1));

// function calcDogYears(dogAge) {
//     alert(dogAge * 7);
// }

// calcDogYears(+prompt('How old is your dog?'));


// function calcLifetimeSupply(currentAge, supplyPerDay, maxAge) {
//     alert(((maxAge - currentAge) * 365) * supplyPerDay);
// }

// calcLifetimeSupply(29, 15, 99);


/**
 * hometown
 * weather event
 * animal name
 *
 * alert baseball teamname
 *
 * bonus if you do it with one argument
 * hint: .join()
 */

// function baseballTeamName(arr) {
//     alert(arr.join(' '));
// }

// const arr = ['Coalinga', 'Drought', 'Koalas'];
// baseballTeamName(arr);

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayName() {
//         console.log(this.name);
//     }

//     howOld() {
//         console.log(this.age);
//     }
// }

// const ben = new Person('Ben', 29);
// const david = new Person('David', 40);

// console.log(ben.howOld());
// console.log(david.howOld());


function getName() {
    const name = prompt('What is your name');

    if(!name) {
        return getName();
    }
}

getName();




