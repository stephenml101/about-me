'use strict';
console.log('Hello world');
let score = 0;

let username = prompt('Hey you! What is your name?');
alert(`Welcome to my page page ${username}! Guess yes or no on these next questions!`);


let questionOneGuess = prompt('Do I play a musical instrument?').toLowerCase();


if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
  alert('You are correct!');
  score++;
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
  alert('Sorry! Wrong!');
}

let questionTwoGuess = prompt('Do I like dogs more than cats?').toLowerCase();

if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
  alert('You are correct!');
  score++;
} else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  alert('Sorry! Wrong!');
}

let questionThreeGuess = prompt('Do I like cilantro?').toLowerCase();

if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
  alert('You are correct!');
  score++;
} else if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  alert('Sorry! Wrong!');
}

let questionFourGuess = prompt('Do I like soccer?').toLowerCase();

if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
  alert('You are correct!');
  score++;
} else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
  alert('Sorry! Wrong!');
}

let questionFiveGuess = prompt('Am I married?').toLowerCase();

if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  alert('You are correct!');
  score++;
} else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  alert('Sorry! Wrong!');
}



let myNum = 70;
let guesses = 4;
for (let i = 0; i < 4; i++) {
  // console.log(`You have ${guesses} left!`)
  let answer = prompt(`${guesses} attempts! What number am I thinking about?`);
  answer = parseInt(answer);
  if (answer === myNum) {
    alert('You are correct!');
    score++;
    break;
  } else {
    if (answer < myNum) {
      alert('Too low!');
      guesses--;
    } else {
      alert('Too high!');
      guesses--;
    }
  }
}

let favFoodGuess = ['ribs', 'pizza', 'spaghetti', 'pasta', 'salad', 'dessert'];
let attempts = 6;

for (let i = 0; i < 6; i++) {
  // console.log(`On this iteration I ate: ${favFoodGuess[i]}`);
  let answer = prompt(`${attempts} tries! What is my favorite food?`);
  let favFoodPosition = 5;

  while (favFoodPosition >= 0) {
    if (answer === favFoodGuess[favFoodPosition]) {
      alert('That is correct!');
      score++;
      i = 6;
      break;
    } else {
      favFoodPosition--;
    }
  }
  attempts--;
}
alert(`Thanks for visiting ${username}! Your score was ${score}!`);


