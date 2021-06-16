const seatsEl = document.querySelectorAll('.container .seat');
const movie = document.getElementById('movie');
let count = document.getElementById('count');
let total = document.getElementById('total');
let price = movie.value;

populateUI();

let selected = 0;

// Movie select event
movie.addEventListener('change', (e) => {
  price = e.target.value;
  summary(selected);
  setMovieData(e.target);
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
  updateSelectedCount();
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Copy selected seats into arr
  // Map through array
  // return a new array indexes

  const seatsIndex = [...selectedSeats].map((i) => {
    return [...seatsEl].indexOf(i);
  });
  console.log(seatsIndex);
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * price;
}

// Save selected movie index and price
function setMovieData(movie) {
  localStorage.setItem('selectedMovieIndex', movie.selectedIndex);
  localStorage.setItem('selectedMoviePrice', movie.value);
}

// Get data from localStorage and pupulate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
  console.log(selectedSeats);

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seatsEl.forEach((element, index) => {
      if (selectedSeats.includes(index)) {
        element.classList.add('selected');
      }
    });
  }
  count.innerText = selectedSeats.length;
  total.innerText = selectedMoviePrice * selectedSeats.length;

  if (selectedMovieIndex !== null) {
    movie.selectedIndex = selectedMovieIndex;
  }
}
