const firstName = prompt('What is your first name?');
const lastName = prompt('What is your last name?');

console.log(firstName);
alert(lastName);

const birthday = new Date(prompt('What is your birthday?'));
confirm(`Is your birthday correct: ${birthday}`);

alert(`Your birthday is: ${birthday}`);