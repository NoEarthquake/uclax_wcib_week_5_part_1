let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const lastShot = document.querySelector('.lastShot');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
let lowCount = 0;
let highCount = 0;
let resetMe = document.querySelector('.resetMe');


function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'You said ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'THIS IS IT';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'IT IS COMING FOR YOU NOW';
    setGameOver();
  } else {
    lastResult.textContent = 'THIS IS NOT IT';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      highCount = 0;
      if (lowCount === 0) {
        lowOrHi.textContent = 'More';
        lowCount++;
      } else {
        lowOrHi.textContent = 'I SAID MORE';
      }
    } else if (userGuess > randomNumber) {
      lowCount = 0;
      if (highCount === 0) {
        lowOrHi.textContent = 'Less';
        highCount++;
      } else {
        lowOrHi.textContent = 'I SAID LESS';
        highCount = 0;
      }
    }
    if (guessCount === 9) {
      lastShot.textContent = "THIS IS YOUR LAST SHOT";
    }
  }


  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);
resetMe.addEventListener('mouseover', altResetGame);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Please forgive me';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  lowCount = 0;
  highCount = 0;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function altResetGame() {
  guessCount = 1;
  lowCount = 0;
  highCount = 0;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
