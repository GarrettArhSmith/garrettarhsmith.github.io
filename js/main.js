var food = 0;
var wood = 0;
var stone = 0;
var iron = 0;
var gold = 0;

var workers = 0;
var idle = 0;
var onLumber = 0;
var lumberMax = 0;
var onStone = 0;
var stoneMax = 0;

var lumberCamps = 0;
var stoneQuarries = 0;

function updateDOM(resource) {
  if (resource == food) {
    document.getElementById('food').innerHTML = food;
  }
  if (resource == wood) {
    document.getElementById('wood').innerHTML = wood;
  }
  if (resource == stone) {
    document.getElementById('stone').innerHTML = stone;
  }
  if (resource == iron) {
    document.getElementById('iron').innerHTML = iron;
  }
  if (resource == gold) {
    document.getElementById('gold').innerHTML = gold;
  }
  if (resource == workers) {
    document.getElementById('workers').innerHTML = "Workers: " + workers;
    idle = workers - onLumber - onStone;
    document.getElementById('idle').innerHTML = "Idle: " + idle;
  }
  if (resource == lumberCamps) {
    document.getElementById('lumberCamps').innerHTML = lumberCamps;
    document.getElementById('onLumber').innerHTML = "Workers on Lumber: " + onLumber + "/" + lumberMax;
  }
  if (resource == stoneQuarries) {
    document.getElementById('stoneQuarries').innerHTML = stoneQuarries;
    document.getElementById('onStone').innerHTML = "Workers on Stone: " + onStone + "/" + stoneMax;
  }
}

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

function hireWorker() {
  if (food >= 50) {
    food -= 50;
    updateDOM(food);
    workers++;
    updateDOM(workers);
  }
}

function gatherFood() {
  food += 5;
  updateDOM(food);
}

function chopTree() {
  wood += 5;
  updateDOM(wood);
}

function buildLumberCamp() {
  if (wood >= 100) {
    wood -= 100;
    updateDOM(wood);
    lumberCamps++;
    lumberMax += 10;
    updateDOM(lumberCamps);
  }
}

function buildStoneQuarry() {
  if (wood >= 100) {
    wood -= 100;
    updateDOM(wood);
    stoneQuarries++;
    stoneMax += 10;
    updateDOM(stoneQuarries);
  }
}
