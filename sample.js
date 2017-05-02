var clickCount = 0;
var CLICK_UP = 0, CLICK_DOWN = 1;

var publishSubject = UsagiRx();
publishSubject.subscribe(countCheck);
publishSubject.subscribe(anotherCountCheck);

$("button").on("click", function(e){
  publishSubject.next(CLICK_UP);
});

setInterval(function() {
  publishSubject.next(CLICK_DOWN);
}, 500);

function countCheck(clickState) {
  if (clickState == CLICK_UP) clickCount++;
  else clickCount--;

  if (clickCount == 5) {
    console.log("Just left five more clicks!");
  }
  if (clickCount <= 0) {
    clickCount = 0;
    console.log("You need to click more quickly");
  }
  if (clickCount == 10) {
    console.log("You clicked 10 times!");
    clickCount = 0;
  }
}

function anotherCountCheck(clickState) {
  if (clickCount == 6) {
    console.log("Just left four more clicks!");
  }
}
