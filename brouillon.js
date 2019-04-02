var combinaison = ["B","R","A","J"];
var attempt = ["B","A","R","N"];
var attemptHtml = document.getElementsByClassName("attempt");
var correction = document.getElementsByClassName("correction");
var solution = document.getElementsByClassName("solution");
var submit = document.getElementById("submit");
var attemptInput = document.getElementsByClassName("input-attempt");
var BP=0;
var MP=0;

for(j=0; j < attempt.length; j++) {
  attemptHtml[j].innerHTML = attempt[j];
  correction[j].innerHTML = attempt[j];
  solution[j].innerHTML = combinaison[j];
}


submit.addEventListener("click", function() {
  for(i=0; i < attemptInput.length; i++) {
    attempt[i] = attemptInput[i].value;
  }
  show();
  test();
});

function show() {
  combinaison = ["B","R","A","J"];
  for(j=0; j < attemptInput.length; j++) {
    attemptHtml[j].innerHTML = attempt[j];
    correction[j].innerHTML = attempt[j];
    solution[j].innerHTML = combinaison[j];
    correction[j].style.color = "black";
  }
}

function test() {
  for (i=0; i < attempt.length; i++) {
    if( attempt[i] == combinaison[i] ) {
      console.log(attempt[i] + " est présent et bien placé");
      combinaison[i] = "X";
      correction[i].style.color = "green";
      BP++
    } else if ( attempt[i] != combinaison[i] ) {
      for(j=0; j < combinaison.length; j++) {
        if( attempt[i] == combinaison[j]) {
          console.log(attempt[i] + " est mal placé");
          correction[i].style.color = "blue";
          MP++
        } else if( attempt[i] != combinaison[j] ) {
          console.log(attempt[i] + " est erronné")
        }
      }
    }
  }
  console.log(MP);
  console.log(BP);
}
