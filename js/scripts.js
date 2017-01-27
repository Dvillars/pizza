$(function() {
  $('form#pizza').submit(function(event) {
    event.preventDefault();
    var size = $('input[name="size"]:checked').val();
    var toppings = [];//$("input[name='toppings']:checked").val();
    $("input:checkbox[name='toppings']:checked").each(function(){
      var topping = $(this).val();
      toppings.push(topping);
    });

    $('.result').text('you have ordered a ' + size + ' pizza with ' + toppings + '.');
    $('.result').show();
  });
});
