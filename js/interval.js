
var i = 0;
var rand;

setInterval(function() {
  i++;
  if (i % 200 == 0) {
    food+= farmers;
    updateDOM(food);
  }
  if (i % 500 == 0) {
    wood+= lumberjacks;
    updateDOM(wood);
  }
  if (i % 1000 == 0) {
    rand = Math.random();
    if (rand >= 0.3) {
      stone+= miners;
      updateDOM(stone);
    }
    else if (rand >= 0.05) {
      iron+= miners;
      updateDOM(iron);
    }
    else {
      gold+= miners;
      updateDOM(gold);
    }
  }
},10)
