var food = 0;
var wood = 0;
var stone = 0;
var iron = 0;
var gold = 0;

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
    idle = workers - farmers - lumberjacks - miners;
    document.getElementById('idle').innerHTML = "Idle: " + idle;
  }
  if (resource == farms) {
    document.getElementById('farms').innerHTML = farms;
    document.getElementById('farmers').innerHTML = "Farmers: " + farmers + "/" + maxFarmers;
  }
  if (resource == lumberCamps) {
    document.getElementById('lumberCamps').innerHTML = lumberCamps;
    document.getElementById('lumberjacks').innerHTML = "Lumberjacks: " + lumberjacks + "/" + maxLumberjacks;
  }
  if (resource == miningCamps) {
    document.getElementById('miningCamps').innerHTML = miningCamps;
    document.getElementById('miners').innerHTML = "Miners: " + miners + "/" + maxMiners;
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

//BUILD
var farms = 0;
var lumberCamps = 0;
var miningCamps = 0;

function buildFarm() {
  if (wood >= 60) {
    wood -= 60;
    updateDOM(wood);
    farms++;
    maxFarmers += 10;
    updateDOM(farms);
  }
}

function buildLumberCamp() {
  if (wood >= 100) {
    wood -= 100;
    updateDOM(wood);
    lumberCamps++;
    maxLumberjacks += 10;
    updateDOM(lumberCamps);
  }
}

function buildMiningCamp() {
  if (wood >= 100) {
    wood -= 100;
    updateDOM(wood);
    miningCamps++;
    maxMiners += 10;
    updateDOM(miningCamps);
  }
}
