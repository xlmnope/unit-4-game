
/**
* Returns a random integer between min (inclusive) and max (inclusive).
* The value is no lower than min (or the next integer greater than min
* if min isn't an integer) and no greater than max (or the next integer
* lower than max if max isn't an integer).
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//create variable for number of gems needed and call function to set to random number
var numOfGemsNeeded = getRandomInt(19, 120);
console.log(numOfGemsNeeded);

//show numOfGemsNeeded in html
document.getElementById("crystals-needed").innerHTML = "Crystals needed: " + numOfGemsNeeded;


//assign number to each gem randomly 
var yellowGemNumber = getRandomInt(1, 12);
var greenGemNumber = getRandomInt(1, 12);
var redGemNumber = getRandomInt(1, 12);
var blueGemNumber = getRandomInt(1, 12);
console.log("yellow" + yellowGemNumber, "green" + greenGemNumber, "red" + redGemNumber, "blue" + blueGemNumber)

var total = 0
//show total right away before click events
document.getElementById("total").innerHTML = "Crystals collected: " + total;

var wins = 0
//show wins
document.getElementById("wins").innerHTML = "Wins " + wins;
var losses = 0
document.getElementById("losses").innerHTML = "Losses " + losses;


// create click events for each gem
//add number to total
document.getElementById("yellow-gem").addEventListener("click", function(event){
  //show updated total in html
  updateTotal(yellowGemNumber);
  console.log(total);
})

document.getElementById("green-gem").addEventListener("click", function(event){
  updateTotal(greenGemNumber);
})

document.getElementById("red-gem").addEventListener("click", function(event){
  updateTotal(redGemNumber)
})

document.getElementById("blue-gem").addEventListener("click", function(event){
  updateTotal(blueGemNumber)
})


function updateTotal(value) {
  total += value
  document.getElementById("total").innerHTML = "Crystals collected: " + total;
  if (total === numOfGemsNeeded) {
    console.log("yay you win") // make html later
    anotherGame();
    updateWins();
  } else if (total > numOfGemsNeeded) {
    console.log("you lose try again!") //make html later
    anotherGame();
    updateLosses();
  } else {
    
  }
}

function anotherGame() {
  numOfGemsNeeded = getRandomInt(19, 120);
  document.getElementById("crystals-needed").innerHTML = "Crystals needed: " + numOfGemsNeeded;
  yellowGemNumber = getRandomInt(1, 12);
  greenGemNumber = getRandomInt(1, 12);
  redGemNumber = getRandomInt(1, 12);
  blueGemNumber = getRandomInt(1, 12);
  console.log("yellow" + yellowGemNumber, "green" + greenGemNumber, "red" + redGemNumber, "blue" + blueGemNumber)
  total = 0
  document.getElementById("total").innerHTML = "Crystals collected: " + total;
}

function updateWins() {
  wins += 1
  document.getElementById("wins").innerHTML = "Wins " + wins;
}

function updateLosses() {
  losses += 1
  document.getElementById("losses").innerHTML = "Losses " + losses;
}


