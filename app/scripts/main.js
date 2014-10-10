/*var header = document.getElementsByTagName('header');
  header[0].style.color= "red";

var middleNav = document.getElementsByTagName('li')[1];
  console.log(middleNav.innerText);

var newElement = document.createElement('div');
  document.getElementById('main').appendChild(newElement);

var colorString = document.getElementById('colorTemplate').innerHTML;
var colorTemplate = _.template(colorString);

var colors = [
  'midnight blue',
  'pink',
  'cherry red',
  'violet'
  ];

var colorTemplate = _.map(colors, function(colorName){
  return colorTemplate({color: colorName});
});

var destination=document.querySelector('#colorTarget');
destination.innerHTML=colorTemplate.join('');*/

$('.title_1').on('mouseover', function (event) {
    $('.text_1').show('active'); // <-- Good
});
//It makes the file much more readable (and is idiomatic) to indent the lines of anything nested inside a function.
$('.title_2').on('mouseout', function (event) {
$('.text_2').hide('active');  // <--- Not as good
});

/*
  The .show() and .hide() methods do not take a class argument. http://api.jquery.com/show/
  So this will never do what you want it to do for you.
  
  It looks like you are trying to add and remove a class. You will do that with .addClass() and .removeClass()
  
  I'd also be careful when using mouseover/mouseout they tend to behave in ways you didn't expect.
  
*/


$('.title_2').on('mouseover', function (event) {
$('.text_2').show('active');
});
$('.title_1').on('mouseout', function (event) {
$('.text_1').hide('active');
});
