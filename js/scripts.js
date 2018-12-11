// Fetch API

// function getAllCharacters(url) {
//   fetch(url)
//   .then(resp => resp.json())
//   .then(data => {
//     const next = data.info.next;
//     if (next) { getAllCharacters(next) }
//     makeHTML(data)
//   })
//   .catch(error => console.log(error))
// }

// async function getAllCharacters(url) {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     const next = data.info.next;
//     if (next) { getAllCharacters(next) }
//     makeHTML(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllCharacters('https://rickandmortyapi.com/api/character/');

/**
 * Takes in an array of Rick and Morty character
 * objects and appends them to our HTML
 */
// function makeHTML(data) {
//   data.results.forEach(character => {
//     const div = document.createElement('div');
//     div.className = 'card';
//     div.innerHTML = `
//       <img class="card-img-top" src="${character.image}">
//       <div class="card-body">
//         <h2 class="card-title">${character.name}</h2>
//         <p class="card-text">Species: ${character.species}</p>
//         <p class="card-text">Location: ${character.location.name}</p>
//       </div>
//     `;
//     document.body.appendChild(div);
//   })
// }

// const person = {
//   age: 29
// }

// const { name } = person;

// console.log(name);



// https://rickandmortyapi.com/api/character/



// function getAllCharacters(url) {
//   fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//       /**
//        * If there are more pages of data, go get them
//        */
//       const next = data.info.next;

//       if (next) {
//         getAllCharacters(next);
//       }

//       makeCard(data);
//     })
//     .catch(error => console.log(error))
// }

// async function getAllCharacters(url) {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     const next = data.info.next;

//     if (next) { getAllCharacters(next) }

//     makeCard(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllCharacters('https://rickandmortyapi.com/api/character/');

// function makeCard(data) {
//   const { results: characters } = data;

//   characters.forEach(character => {
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerHTML = `
//       <img class="card-img-top" src="${character.image}"
//       <div class="card-body">
//         <h2 class="card-title">${character.name}</h2>
//         <p class="card-text">Species: ${character.species}</p>
//         <p class="card-text">Location: ${character.location.name}</p>
//       </div>
//     `;
//     document.body.append(card);
//   })
// }

// async function getStuff(url) {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     const next = data.info.next;

//     if(next) { getStuff(next) }

//     makeCard(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// makeCard(data) {
//   const { results: characters } = data;
//   characters.forEach(character => {
//     const card = document.createElement('div');
//     card.classList = 'card';
//     card.innerHTML = `
//       <img class="card-img-top" src="${}">
//       div.card-body
//       h2.card-title
//       p.card-text
//       p.card-text
//     `;
//     document.body.append(card);
//   })
// }