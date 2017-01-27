function Pizza(sizeString, toppingsArray){
  this.portionSize = sizeString;
  this.toppings = toppingsArray;
};

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

    $('.result').text('you have ordered a ' + sizeString + ' pizza with ' + toppingsArray + '.');
    $('.result').show();
  });
});
