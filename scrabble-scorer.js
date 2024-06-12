// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system.

const input = require("readline-sync");

const oldPointStructure = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
      }
    }
  }
  return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let userWord = "";
function initialPrompt() {
  console.log("Let's play some scrabble!");
  userWord = input.question("Enter a word to score: ");
  return console.log(oldScrabbleScorer(userWord));
}

let newPointStructure;

//simpleScorer: Define a function that takes a word as a parameter and returns a numerical score. Each letter within the word is worth 1 point.
function simpleScorer(word) {
  word = word.toUpperCase();
  simpleScoreArray = word.split("");
  letterPoints = simpleScoreArray.length;
  return letterPoints;
}
// vowelBonusScorer: Define a function that takes a word as a parameter and returns a score. Each vowel within the word is worth 3 points, and each consonant is worth 1 point.
function vowelBonusScorer(word) {
  word = word.toUpperCase();
  vowelBonusArray = word.split("");
  letterPoints = 0;
  for (let i = 0; i < vowelBonusArray.length; i++) {
    if (
      vowelBonusArray[i] === "A" ||
      vowelBonusArray[i] === "E" ||
      vowelBonusArray[i] === "I" ||
      vowelBonusArray[i] === "O" ||
      vowelBonusArray[i] === "U"
    ) {
      letterPoints += 3;
    } else {
      letterPoints += 1;
    }
  }
  return letterPoints;
}
let scrabbleScorer;

// Finish writing the scoringAlgorithms array. It should be populated with three objects, one for each of the three scoring options. Each object should contain three keys: name, description, and scoringFunction.
//Scoring options: simpleScorer, vowelBonusScorer, oldScrabbleScorer
let simpleScoreObject = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScorer,
};

let vowelBonusObject = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScorer,
};

let oldScrabbleObject = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: oldScrabbleScorer,
};
const scoringAlgorithms = [
  simpleScoreObject,
  vowelBonusObject,
  oldScrabbleObject,
];

// Finish writing scorerPrompt() so that the user can select which scoring algorithm to use when the program scores their word. Use the selected algorithm to determine the score for the word:
function scorerPrompt() {
  console.log("Choose your scoring method: ");
  for (let i = 0; i < scoringAlgorithms.length; i++) {
    console.log(
      `${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`
    );
  }
}

function transform() {}

function runProgram() {
  initialPrompt();
  scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt,
};
