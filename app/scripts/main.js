var header = document.getElementsByTagName('header');
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
destination.innerHTML=colorTemplate.join('');
