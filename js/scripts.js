// Arrays always start at 0, NOT 1.
// Can store multiple data types

// const myFirstArray = ['Ben', 29, true, 'Coalinga', ['Norma', 'Olivia', 'Shosh']];

// console.log(myFirstArray[4][1]);

// const geekwise = [['Web for Beginners', true], ['Mobile Friendly', true], ['Intro to JS', false]];

// console.log(geekwise[1][0]); // -> Mobile Friendly
// console.log(geekwise[0][0]); // -> Web for Beginners
// console.log(geekwise[2][1]); // -> false
// console.log(geekwise[1]); // -> ['Mobile Friendly', true]

// console.log(geekwise.length);

// Do all of the Try it out, and on top of that console.log your lucky number only
// Arrays can also take in variables

// const favMovie = 'Baby Driver';

// const stuff = [favMovie, 42, null, true, 2007];
// console.log(stuff, stuff.length, stuff[1]);

// const arr = ['Cat'];

// console.log(arr[10]);

// const favMovie1 = ['title', 'character'];
// const favMovie2 = ['title', 'character'];
// const favMovie3 = ['title', 'character'];
// const favMovie4 = ['title', 'character'];
// const favMovie5 = ['title', 'character'];

// const favoriteMovies = [favMovie1, favMovie2, favMovie3, favMovie4, favMovie5];
// alert(favoriteMovies);

// const favoriteMovieTitles = [favMovie1[0], favMovie2[0], favMovie3[0], favMovie4[0], favMovie5[0]];
// alert(favoriteMovieTitles);

// console.log('least fav: ', favMovie3);
// console.log('most fav: ', favMovie5);

// alert(favoriteMovies.length);


// Don't do while loops. You're better than that.
// let counter = 0;

// while (counter <= 10) {
//   console.log(counter);

//   counter++;
// }

// for(let i = 1; i <= 100; i++) {
//   console.log(i);
// }

const names = ['Luke', 'Leia', 'Aniken', 'Padame'];

// for(let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

const albums = ['Led Zeppelin I', 'Led Zeppelin II', 'Led Zeppelin III'];

// for(let i = 0; i < albums.length; i++) {
//   console.log(albums[i]);
// }

// for(let name of names) {
//   console.log(name);
// }

// names.forEach(name => console.log(name));

// for(let album of albums) {
//   console.log(album);

//   if(album === 'Led Zeppelin II') {
//     break;
//   }
// }

// const person = {
//   name: 'Ben',
//   name: 'Reckas',
//   age: 29
// };

// console.log(person.name);

// const user = {};

// console.log(user);

// user.name = prompt('Give me yo name.');
// user.age = +prompt('How old are you?');

// console.log(user);
// console.log(user.name);


const movies = [['Last Jedi', 2018], ['Baby Driver', 2017], ['The Departed', 2014]];

// for (let i = 0; i < movies.length; i++) {
//   if(movies[i][0] === 'Baby Driver') {
//     alert(`Your fav movie is ${movies[i][0]} and it was made in ${movies[i][1]}`);
//   }
// }

// for (let movie of movies) {
//   if(movie[0] === 'Baby Driver') {
//     alert(`Your fav movie is ${movie[0]} and it was made in ${movie[1]}`);
//   }
// }

movies.forEach(movie => {
  if(movie[0] === 'Baby Driver') {
    alert(`Your fav movie is ${movie[0]} and it was made in ${movie[1]}`);
  }
});