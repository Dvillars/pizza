function Pizza(sizeString, toppingsArray){
  this.portionSize = sizeString;
  this.toppings = toppingsArray;
};

function portion(portion) {
  var cost = 8;
  if (this.portionSize === 'large') {
    cost += 4;
  } else if (this.portionSize === 'medium') {
    cost += 2;
  } else {
    cost += 0
  }
  return
};

Pizza.prototype.cost = function() {

  return ;
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

    $('.result').text('you have ordered a ' + sizeString + ' pizza with ' + toppingsArray.length + ' toppings. the toppings are ' + toppingsArray + '.');
    $('.result').show();
  });
});
