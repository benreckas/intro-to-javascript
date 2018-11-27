// const title = document.querySelector('#title');

// title.innerHTML = '<h1><My Title</h1>'

// const title = document.createElement('h1');
// title.textContent = 'Our Title';
// document.body.appendChild(title);

// const list = document.createElement('ul');
// document.body.appendChild(list);

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
// button.textContent = "Submit";
// button.id = 'my-button';
// button.className = 'btn btn-success';
// button.classList.replace('btn-success', 'btn-info');
// document.body.appendChild(button);

// title.classList.add('text-center');

// // button.classList.remove('btn-info');

// button.addEventListener('click', () => {
//     title.classList.toggle('hidden');
// })

// // button.setAttribute('disabled', false);
// // button.removeAttribute('disabled');

// const hello = document.createElement('h1');
// hello.textContent = "Hello World!";
// hello.className = 'text-center';
// // document.body.appendChild(hello);

// const nice = document.createElement('p');
// nice.textContent = "Bacon ipsum dolor amet spare ribs ham bresaola, shoulder strip steak meatball short ribs short loin chuck tongue bacon chicken. Kevin pork chop ham hock shoulder flank beef ribs porchetta bacon shankle brisket. Shoulder leberkas frankfurter rump drumstick jerky flank prosciutto jowl ham tenderloin. Filet mignon meatball meatloaf, boudin chuck landjaeger salami turducken short loin. Filet mignon beef meatloaf tongue pork loin kevin salami. Pork chop pig short ribs corned beef biltong tongue, jowl short loin hamburger doner. Bacon jowl short loin turducken."
// nice.className = 'col-md-8 offset-md-2';
// // document.body.appendChild(nice);

// const footer = document.createElement('footer');
// footer.textContent = 'Friend us on Fb';
// footer.className = 'text-center';
// // document.body.appendChild(footer);

// document.body.append(hello, nice, footer);

// FizzBuzz


// 1)  Loop between 2 numbers (typically 0-100);
// 2)  If number is a multiple of 3, log "Fizz";
// 3)  if number is a multiple of 5, log "Buzz";
// 4)  If number is a multiple of 3 and 5, log "FizzBuzz";
// 5) If none of these multiples, then log the number;

function fizzBuzz(min, max) {
    const p = document.createElement('p');
    for (let i = min; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, 'FizzBuzz');
            p.textContent = `${i} FizzBuzz`;
        } else if (i % 3 === 0) {
            console.log(i, 'fizz');
            p.textContent = `${i} fizz`;
        } else if (i % 5 === 0) {
            console.log(i, 'Buzz');
            p.textContent = `${i} Buzz`;
        } else {
            console.log(i);
            p.textContent = `${i}`;
        }
        document.body.appendChild(p);

    }
}

fizzBuzz(1, 100);



