/*$('.messages').text('wooo. I am alive!')*/

/*element[s].on(eventName, callBackFunction);*/

var listElements = $('li');
var pElements = $('p');

listElements.on('mouseover', function (event) {
  $(this).addClass('stripe');
});

listElements.on('mouseout', function (event) {
  $(this).removeClass('stripe');
});

pElements.on('click', function (event) {
  $(this).hide();
});

$('#reset').on('click', function (event) {
  pElements.show();
});
