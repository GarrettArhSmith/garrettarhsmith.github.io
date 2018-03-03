
var workers = 0;
var idle = 0;
var onFood = 0;
var foodMax = 0;
var onLumber = 0;
var lumberMax = 0;
var onStone = 0;
var stoneMax = 0;
var onIron = 0;
var ironMax = 0;
var onGold = 0;
var goldMax = 0;

//FOOD
document.getElementById('addFood').addEventListener("click", function() {
  if (idle > 0 && foodMax > 0 && onFood < foodMax) {
    onFood++;
    idle--;
    updateDOM(workers);
    updateDOM(farms);
  }
});
document.getElementById('subtractFood').addEventListener("click", function() {
  if (onFood > 0) {
    onFood--;
    idle++;
    updateDOM(workers);
    updateDOM(farms);
  }
});

//LUMBER
document.getElementById('addLumber').addEventListener("click", function() {
  if (idle > 0 && lumberMax > 0 && onLumber < lumberMax) {
    onLumber++;
    idle--;
    updateDOM(workers);
    updateDOM(lumberCamps);
  }
});
document.getElementById('subtractLumber').addEventListener("click", function() {
  if (onLumber > 0) {
    onLumber--;
    idle++;
    updateDOM(workers);
    updateDOM(lumberCamps);
  }
});

//STONE
document.getElementById('addStone').addEventListener("click", function() {
  if (idle > 0 && stoneMax > 0 && onStone < stoneMax) {
    onStone++;
    idle--;
    updateDOM(workers);
    updateDOM(stoneQuarries);
  }
});
document.getElementById('subtractStone').addEventListener("click", function() {
  if (onStone > 0) {
    onStone--;
    idle++;
    updateDOM(workers);
    updateDOM(stoneQuarries);
  }
});
