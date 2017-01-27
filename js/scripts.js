function Pizza(sizeString, toppingsArray){
  this.portionSize = sizeString;
  this.toppings = toppingsArray;
};

function portionCost(portion, cost) {
  if (portion === 'Large') {
    cost += 4;
  } else if (portion === 'Medium') {
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

    $('.result1').text('A ' + newPizza.portionSize + ' pizza with ' + newPizza.toppings.length + ' toppings.');
    $('.result2').text('The toppings are :' + newPizza.toppings.join(', ') + '.');
    $('.result3').text(' This will cost you ' + newPizza.cost() + ' dollars +tax.');
    $('.result').show();
  });
});
