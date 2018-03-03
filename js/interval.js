
var i = 0;

setInterval(function() {
  i++;
  if (i % 200 == 0) {
    food += onFood;
    updateDOM(food);
  }

  wood += onLumber;
  updateDOM(wood);

  stone += onStone;
  updateDOM(stone);
},10)
