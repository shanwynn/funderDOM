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
  $('.text_1').addClass('active');
});
$('.title_2').on('mouseout', function (event) {
  $('.text_2').removeClass('active');
});


$('.title_2').on('mouseover', function (event) {
  $('.text_2').addClass('active');
});
$('.title_1').on('mouseout', function (event) {
  $('.text_1').removeClass('active');
});
