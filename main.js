class Game {
  constructor(life, combination, attempt, rightPos, wrongPos, winState) {
    this.life = life;
    this.combination = combination;
    this.attempt = attempt;
    this.rightPos = rightPos;
    this.wrongPos = wrongPos;
    this.winState = winState;
  }
  test() {
    for(var i = 0; i < this.attempt.length; i++) {
      if(this.attempt[i] === this.combination[i]) {
        console.log("numero " + (i+1) + " : " + "Checked");
        this.rightPos ++;
        this.combination[i] = 9.99;
        //print result
        let result = document.createElement("DIV");
        result.setAttribute("class", "result col-3");
        result.innerHTML = " " + this.attempt[i];
        result.style.color = "#1BA1EB";
        document.getElementById("results").appendChild(result);
      } else {
        if(this.combination.includes(this.attempt[i])) {
          console.log("numero " + (i+1) + " : " + "misplaced");
          this.wrongPos ++;
          //print result
          let result = document.createElement("DIV");
          result.setAttribute("class", "result col-3");
          result.innerHTML = " " + this.attempt[i];
          result.style.color = "#E39A13";
          document.getElementById("results").appendChild(result);
        } else if(!this.combination.includes(this.attempt[i])) {
          console.log("numero " + (i+1) + " : " + "erreur");
          //print result
          let result = document.createElement("DIV");
          result.setAttribute("class", "result col-3");
          result.innerHTML = " " + this.attempt[i];
          result.style.opacity = .5;
          document.getElementById("results").appendChild(result);
        }
      }
    }
    document.getElementById("help").innerHTML = "right positions : " + this.rightPos + "<br>" + "wrong position : " + this.wrongPos;
    console.log("Positions justes : " + this.rightPos + "\nPositions erronnées : " + this.wrongPos);
    if(this.rightPos === 4) {
      this.winState = true;
    }
  }
}

class Random {
  constructor(max) {
    this.max = max;
  }
  randomize() {
    return parseInt(Math.random() * this.max);
  }
}

/////INITIALISATION
let game;
let submit = document.getElementById("submit");
let input = document.getElementsByClassName("input-attempt");
let retry = document.getElementById("retry");
let difficulty = document.getElementsByClassName("difficulty");

for (i = 0; i < difficulty.length; i++) {
  difficulty[i].addEventListener("click", function() {
    // init lifes and score
    let life = 5;
    let max = this.innerHTML;
    let rightPos = 0;
    let wrongPos = 0;
    let attempt = [1,2,3,4];

    console.log(max);
    //instanciate a new game with var Initialisated
    game = new Game(
      life,
      [new Random(max).randomize(), new Random(max).randomize(), new Random(max).randomize(), new Random(max).randomize()],
      attempt,
      rightPos,
      wrongPos,
      false
    );
    //Show combination and attempt
    console.log(game.combination);
    console.log(game.attempt);

    document.getElementsByClassName("container-play")[0].style.display = "none";
    document.getElementsByClassName("game-on")[0].style.display = "block";
    document.getElementsByClassName("header")[0].classList.add("play");
  });
}

// BEGIN
submit.addEventListener("click", function() {
  game.attempt = [
    parseInt(input[0].value),
    parseInt(input[1].value),
    parseInt(input[2].value),
    parseInt(input[3].value),
  ];
  game.test();
  console.log(game.attempt);
  game.life --;
  console.log(game.life);

  if(game.winState === true) {
    submit.style.display = "none";
    document.getElementById("clear").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("results").style.display = "none";
    document.getElementById("help").style.display = "none";
    document.getElementById("win-state").innerHTML = "Well Done!";
    document.getElementById("game-over").style.display = "block";
  } else if (game.winState === false && game.life === 0) {
    submit.style.display = "none";
    document.getElementById("clear").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("results").style.display = "none";
    document.getElementById("help").style.display = "none";
    document.getElementById("win-state").innerHTML = "Game over!";
    document.getElementById("game-over").style.display = "block";
  }
});

//Clear
clear.addEventListener("click", function() {
  for(i = 0; i < input.length; i++) {
    input[i].value = "";
  }
});









//
