// function thanksgiving(name, list) {

//   console.log(`${name} is thankful for:${makeList(list)}`);
// }

// function christmas(name, list) {
//   const christmasList = makeList(list);

//   console.log(`${name} wants these things for Christmas:${christmasList}`);
// }

// function makeList(list) {
//   let formattedList = '';

//   for(let i = 0; i < list.length; i++) {
//     formattedList += ` ${i + 1}) ${list[i]},`
//   }

//   return formattedList;
//   console.log(formattedList);
// }

// thanksgiving('Ben', ['Family', 'Friends']);
// christmas('Ben', ['To sleep in', 'To play with my daughters']);

// const items = document.querySelectorAll('.item');
// console.log(items);


// function query(queryStr) {
//   console.log(document.querySelector(queryStr));
// }

// query('body');

// const header = document.querySelector('#header');
// console.log(header);

// header.addEventListener('click', event => header.style.backgroundColor = '#0000ff');
// header.addEventListener('click', event => header.style.display = 'none');

// document.addEventListener('keydown', e => {
//   console.log(event);

//   if(e.key === 'Enter') {
//     alert('You hit the enter key.');
//   }

//   header.style.color = 'tomato';
// });

const header = document.querySelector('#header');
// console.log('header', header);
const container = document.querySelector('#container');
// console.log('container', container);
const btn = document.querySelector('#btn');
// console.log('btn', btn);

btn.addEventListener('click', () => alert('Button clicked!'));
container.addEventListener('mouseover', () => container.style.background = 'rebeccapurple');
document.addEventListener('keyup', () => header.style.color = 'lightgreen');
// document.addEventListener('click', () => window.location.replace('https://www.google.com'));

const buttons = document.querySelectorAll('button');
console.log(buttons);

function someFunction(event) {
  console.log(event);
}

for(let button of buttons) {
  button.addEventListener('click', event => someFunction(event));
}


input.value = 56;

// buttons.forEach(button => button.addEventListener('click', () => alert('clicked')));

// buttons.addEventListener('click', () => alert('You clicked me.'));