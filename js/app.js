'use strict';
console.log('Hello world');

let username = prompt('Hey you! What is your name?');
alert(`Welcome to my page page ${username}! Guess yes or no on these next questions!`);


let questionOneGuess = prompt('Do I play a musical instrument?').toLowerCase();


if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('You are correct!');
} else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('Sorry! Wrong!');
}

let questionTwoGuess = prompt('Do I like dogs more than cats?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y'){
  alert('You are correct!');
} else if(questionTwoGuess === 'no' || questionTwoGuess === 'n'){
  alert('Sorry! Wrong!');
}

let questionThreeGuess = prompt('Do I like cilantro?').toLowerCase();

if(questionThreeGuess === 'no' || questionThreeGuess === 'n'){
  alert('You are correct!');
} else if(questionThreeGuess === 'yes' || questionThreeGuess === 'y'){
  alert('Sorry! Wrong!');
}

let questionFourGuess = prompt('Do I like soccer?').toLowerCase();

if(questionFourGuess === 'yes' || questionFourGuess === 'y'){
  alert('You are correct!');
} else if(questionFourGuess === 'no' || questionFourGuess === 'n'){
  alert('Sorry! Wrong!');
}

let questionFiveGuess = prompt('Am I married?').toLowerCase();

if(questionFiveGuess === 'yes' || questionFiveGuess === 'y'){
  alert('You are correct!');
} else if(questionFiveGuess === 'no' || questionFiveGuess === 'n'){
  alert('Sorry! Wrong!');
}

alert(`Thanks for visiting ${username}!`)


