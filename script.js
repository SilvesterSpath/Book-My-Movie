const seatsEl = document.querySelectorAll('.container .seat');
const movie = document.getElementById('movie');
const count = document.getElementById('count');
const total = document.getElementById('total');
let price = movie.value;

let selected = 0;

// Movie select event
movie.addEventListener('change', (e) => {
  price = e.target.value;
  summary(selected);
  console.log(price);
});

// Seat Click event
seatsEl.forEach((i) => {
  i.addEventListener('click', () => {
    if (i.className === 'seat selected') {
      unSelect(i);
      selected--;
      summary(selected);
    } else if (i.className === 'seat') {
      select(i);
      selected++;
      summary(selected);
    }
    console.log(selected);
  });
});

function select(element) {
  element.classList.add('selected');
}

function unSelect(element) {
  element.classList.remove('selected');
}

function summary(number) {
  count.innerText = number;
  total.innerText = price * number;
}
