// console.log('dom-lec');
//
// //getting elements by id
// var header = document.getElementById('main-title');
// console.log(header);
//
// //getting elements by class
// var cards = document.getElementsByClassName("card");
// console.log(cards);
// var firstCard = cards[0];
// console.log(firstCard);
// //cards.pop();
// var cardsArr = Array.from(cards);
// console.log(cardsArr);
//
// //getting elements by tag name
// var sections = document.getElementsByTagName("section");
// console.log(sections);
//
// //getting elements with document.querySelector
// //var headingElement = document.querySelector('header h1');
// var headingElement = document.querySelector('#main-title');
// console.log(headingElement);
//
// //Direct access to form elements
// var feedbackFormValue = document.forms[0].feedback.value;
// console.log(feedbackFormValue);

//var title = document.getElementById("main-title");
//console.log(title);
// console.log(title.innerHTML);
// console.log(title.innerText);

//title.innerHTML = "<em>Hello, Draco!</em>";
//title.innerText = "<em>Hello, Draco!</em>";

var cowboyElement = document.querySelector('#cowboy');
console.log(cowboyElement);
console.log(cowboyElement.hasAttribute('data-1'));
console.log(cowboyElement.hasAttribute('data-2'));

//Getting a value of an attribute
console.log(cowboyElement.getAttribute('data-1'));

//Setting the value of an attribute.
cowboyElement.setAttribute("data-1", 'hello');
cowboyElement.setAttribute('data-test', 'Draco');

//Remove an attribute
cowboyElement.removeAttribute('data-test');

//Changing styles
var jumbotron = document.querySelector('.jumbotron');
console.log(jumbotron);
//jumbotron.style.backgroundColor = 'red';
//jumbotron.style.display = 'none';
jumbotron.style["font-family"] = "times";

// styling a node list
var tableRows = document.getElementsByTagName("tr");
console.log(tableRows);
for (var i = 0; i < tableRows.length; i++){
    tableRows[i].style.background = "red";
}