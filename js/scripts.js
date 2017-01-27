function Pizza(sizeString, toppingsArray){
  this.portionSize = sizeString;
  this.toppings = toppingsArray;
};

function portionCost(portion, cost) {
  if (portion === 'large') {
    cost += 4;
  } else if (portion === 'medium') {
    cost += 2;
  } else {
    cost += 0
  }
  return cost
};

function toppingCost(toppingCount, cost) {
  cost += toppingCount
  return cost
};

Pizza.prototype.cost = function() {
  var cost = 8;
  cost = portionCost(this.portionSize, cost);
  cost = toppingCost(this.toppings.length, cost)
  return cost;
}

$(function() {
  $('form#pizza').submit(function(event) {
    event.preventDefault();
    var sizeString = $('input[name="size"]:checked').val();
    var toppingsArray = [];
    $("input:checkbox[name='toppings']:checked").each(function(){
      var toppingString = $(this).val();
      toppingsArray.push(toppingString);
    });

    newPizza = new Pizza(sizeString, toppingsArray);

    $('.result').text('Dose this look right???  A ' + newPizza.portionSize + ' pizza with ' + newPizza.toppings.length + ' toppings. The toppings are ' + newPizza.toppings + '.');
    $('.result').show();
  });
});
