
var workers = 0;
var idle = 0;

var max;

document.getElementById('hire').addEventListener("click", function() {
  if (food >= 50) {
    food -= 50;
    updateDOM(food);
    workers++;
    updateDOM(workers);
  }
});
document.getElementById('hire10').addEventListener("click", function() {
  if (food >= 500) {
    food -= 500;
    updateDOM(food);
    workers+=10;
    updateDOM(workers);
  }
});
document.getElementById('hire100').addEventListener("click", function() {
  if (food >= 5000) {
    food -= 5000;
    updateDOM(food);
    workers+=100;
    updateDOM(workers);
  }
});
document.getElementById('hireMax').addEventListener("click", function() {
  max = Math.floor(food/50);
  food -= max*50;
  updateDOM(food);
  workers += max;
  updateDOM(workers);
});



var farmers = 0;
var maxFarmers = 0;
var lumberjacks = 0;
var maxLumberjacks = 0;
var miners = 0;
var maxMiners = 0;

//FARMERS
document.getElementById('addFarmer').addEventListener("click", function() {
  if (idle > 0 && maxFarmers > 0 && farmers < maxFarmers) {
    farmers++;
    idle--;
    updateDOM(workers);
    updateDOM(farms);
  }
});
document.getElementById('addFarmer10').addEventListener("click", function() {
  if (idle > 0 && maxFarmers > 0 && farmers < maxFarmers) {
    if (idle > 10) {
      farmers+=10;
      idle-=10;
      updateDOM(workers);
      updateDOM(farms);
    }
    else {
      farmers+=idle;
      idle-=idle;
      updateDOM(workers);
      updateDOM(farms);
    }
  }
});
document.getElementById('subtractFarmer').addEventListener("click", function() {
  if (farmers > 0) {
    farmers--;
    idle++;
    updateDOM(workers);
    updateDOM(farms);
  }
});
document.getElementById('subtractFarmer10').addEventListener("click", function() {
  if (farmers > 0) {
    if (farmers < 10) {
      farmers-=farmers;
      idle+=farmers;
      updateDOM(workers);
      updateDOM(farms);
    }
    else {
      farmers-=10;
      idle+=10;
      updateDOM(workers);
      updateDOM(farms);
    }
  }
});

//LUMBERJACKS
document.getElementById('addLumberjack').addEventListener("click", function() {
  if (idle > 0 && maxLumberjacks > 0 && lumberjacks < maxLumberjacks) {
    lumberjacks++;
    idle--;
    updateDOM(workers);
    updateDOM(lumberCamps);
  }
});
document.getElementById('addLumberjack10').addEventListener("click", function() {
  if (idle > 0 && maxLumberjacks > 0 && lumberjacks < maxLumberjacks) {
    if (idle > 10) {
      lumberjacks+=10;
      idle-=10;
      updateDOM(workers);
      updateDOM(lumberCamps);
    }
    else {
      lumberjacks+=idle;
      idle-=idle;
      updateDOM(workers);
      updateDOM(lumberCamps);
    }
  }
});
document.getElementById('subtractLumberjack').addEventListener("click", function() {
  if (lumberjacks > 0) {
    lumberjacks--;
    idle++;
    updateDOM(workers);
    updateDOM(lumberCamps);
  }
});
document.getElementById('subtractLumberjack10').addEventListener("click", function() {
  if (lumberjacks > 0) {
    if (lumberjacks < 10) {
      lumberjacks-=lumberjacks;
      idle+=lumberjacks;
      updateDOM(workers);
      updateDOM(lumberCamps);
    }
    else {
      lumberjacks-=10;
      idle+=10;
      updateDOM(workers);
      updateDOM(lumberCamps);
    }
  }
});

//MINERS
document.getElementById('addMiner').addEventListener("click", function() {
  if (idle > 0 && maxMiners > 0 && miners < maxMiners) {
    miners++;
    idle--;
    updateDOM(workers);
    updateDOM(miningCamps);
  }
});
document.getElementById('addMiner10').addEventListener("click", function() {
  if (idle > 0 && maxMiners > 0 && miners < maxMiners) {
    if (idle > 10) {
      miners+=10;
      idle-=10;
      updateDOM(workers);
      updateDOM(miningCamps);
    }
    else {
      miners+=idle;
      idle-=idle;
      updateDOM(workers);
      updateDOM(miningCamps);
    }
  }
});
document.getElementById('subtractMiner').addEventListener("click", function() {
  if (miners > 0) {
    miners--;
    idle++;
    updateDOM(workers);
    updateDOM(miningCamps);
  }
});
document.getElementById('subtractMiner10').addEventListener("click", function() {
  if (miners > 0) {
    if (miners < 10) {
      miners-=miners;
      idle+=miners;
      updateDOM(workers);
      updateDOM(miningCamps);
    }
    else {
      miners-=10;
      idle+=10;
      updateDOM(workers);
      updateDOM(miningCamps);
    }
  }
});
