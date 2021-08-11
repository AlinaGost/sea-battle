import '../style.css';
import '../scss/main.scss';
import '../index.html';

let location1 = 3;
let location2 = 4;
let location3 = 5;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk === false) {
  guess = prompt('Введите координаты выстрела: ');
  if (guess > 6 || guess < 0) {
    alert("Введите координаты в промежутке от 0 до 6");
  } else {
    guesses += 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT");
      hits += 1;
      if (hits === 3) {
        isSunk = true;
        alert("Корабль потоплен");
      } else alert("MISS");
    }
  }
}

let stat = "Корабль уничтожен за " + guesses + " попыток!";
alert(stat);
