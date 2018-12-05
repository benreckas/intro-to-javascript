// Fetch API

function fetchData(url) {
  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    const next = data.info.next;
    if (next) { fetchData(next) }
    makeHTML(data)
  })
  .catch(error => console.log(error))
}

fetchData('https://rickandmortyapi.com/api/character/');

function makeHTML(data) {
  data.results.forEach(character => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img class="card-img-top" src="${character.image}">
      <div class="card-body">
        <h2 class="card-title">${character.name}</h2>
        <p class="card-text">Species: ${character.species}</p>
        <p class="card-text">Location: ${character.location.name}</p>
      </div>
    `
    document.body.appendChild(div);
  })
}