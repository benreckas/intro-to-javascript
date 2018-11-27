// ;// const title = document.querySelector('#title');

// // title.innerHTML = '<h1>My title</h1>';

// const title = document.createElement('h1');
// title.textContent = 'Our title';
// // document.body.append(title);

// const list = document.createElement('ul');
// // document.body.appendChild(list);

// const cat1 = document.createElement('li');
// cat1.textContent = 'Celestia';
// cat1.dataset.id = 1;
// cat1.dataset.title = 'Celestia';

// const cat2 = document.createElement('li');
// cat2.textContent = 'Luna';

// const cat3 = document.createElement('li');
// cat3.textContent = 'Tupac';

// list.append(cat1, cat2, cat3);

// const js = document.querySelector('script');

// document.body.insertBefore(title, js);
// document.body.insertBefore(list, title);

// const button = document.createElement('button');
// button.textContent = 'Submit';
// button.id = 'my-button';
// button.className = 'btn btn-success';
// button.classList.replace('btn-success', 'btn-info');
// document.body.appendChild(button);

// title.classList.add('text-center');

// // button.classList.remove('btn-info');

// button.addEventListener('click', () => {
//   title.classList.toggle('hidden');
// })

// // button.setAttribute('disabled', true);
// // button.removeAttribute('disabled');

// const title = document.createElement('h1');
// title.textContent = 'Hello World!';
// title.className = 'text-center';
// // document.body.appendChild(title);

// const p = document.createElement('p');
// p.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate molestias quod, quidem veritatis consectetur fuga commodi nesciunt enim incidunt aspernatur. Voluptatum consequatur quisquam laboriosam sunt blanditiis, repellendus accusantium repudiandae illum.';
// p.className = 'col-md-6 offset-md-3';
// // document.body.appendChild(p);

// document.body.append(title, p);


// document.body.innerHTML = `
//   <nav>
//     <a href="#">Home</a>
//     <a class="float-right" href="#">About</a>
//     <a class="float-right" href="#">Contact</a>
//   </nav>
//   <h1 class="text-center">Hello World!</h1>
//   <p class="col-md-6 offset-md-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate molestias quod, quidem veritatis consectetur fuga commodi nesciunt enim incidunt aspernatur. Voluptatum consequatur quisquam laboriosam sunt blanditiis, repellendus accusantium repudiandae illum.</p>
//   <footer class="text-center">Facebook</footer>
// `;

// FizzBuzz

// 1) Loop between 2 numbers (typically 0-100);
// 2) If number is a multiple of 3 log "Fizz"
// 3) If number is a multiple of 5 log "Buzz"
// 4) If number is a multiple of 3 and 5 log "FizzBuzz"
// 5) If none of those log the number

// function fizzBuzz(min, max) {
//   for(let i = min; i <= max; i++) {
//     const p = document.createElement('p');

//     if (i % 3 === 0 && i % 5 === 0) {
//       // const p = document.createElement('p');
//       // p.textContent = `${i} FizzBuzz`;
//       // document.body.appendChild(p);

//       p.textContent = `${i} FizzBuzz`;
//     } else if (i % 3 === 0) {
//       p.textContent = `${i} Fizz`;
//     } else if (i % 5 === 0) {
//       p.textContent = `${i} Buzz`;
//     } else {
//       p.textContent = i;
//     }

//     document.body.appendChild(p);
//   }
// }

// fizzBuzz(1, 500);

function fizzBuzz(min, max) {
  for(let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      createItem(i, 'Fizzbuzz');
    } else if (i % 3 === 0) {
      createItem(i, 'Fizz');
    } else if (i % 5 === 0) {
      createItem(i, 'Buzz');
    } else {
      createItem(i);
    }
  }
}

function createItem(i, str) {
  const p = document.createElement('p');
  str ? p.textContent = `${i} ${str}` : p.textContent = i;
  document.body.appendChild(p);
}

fizzBuzz(1, 500);
