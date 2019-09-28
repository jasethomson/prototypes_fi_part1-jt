$(document).ready(initializeApp);

function initializeApp(){
  console.log('Initializing App...')
  var dynamicCol = $('.col:nth-child(2)');
  var dynamicH1 = $("<h1>");
  dynamicH1.text('Dynamic Content');
  dynamicCol.append(dynamicH1);
  var firstCard = createCard('club', 'king');
  dynamicCol.append(firstCard);
  var firstRandomCard = createRandomCard();
  dynamicCol.append(firstRandomCard);
  addRandomCardToDom();
  var addCardButtonObject = { //creates object to pass into button element
    text: 'Add Card to DOM',
    click: addRandomCardToDom
  }
  var addCardButton = $('<button>', addCardButtonObject); //creates button
  dynamicCol.prepend(addCardButton);
}
function createCard(suit, rank){
  var cardObject = {
    click: toggleCardBack
  }
  var card = $("<div>", cardObject);
  card.addClass('card ' + suit + ' ' + rank);
  return card;
}
function createRandomCard(){
  var suitArray = ['heart', 'club', 'diamond', 'spade'];
  var rankArray = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
  var suitRandomPercent = Math.random(); //0, .2, .7, .9999999
  var suitPercentOfWhole = suitRandomPercent * suitArray.length; //randomPercent * 4, 0*4=0, .2*4=.8, .7*4=2.8, .999999*4 = 3.999999
  var suitIntegerOfWhole = Math.floor( suitPercentOfWhole); //Math.floor(0) = 0, Math.floor(.8) = 0, Math.floor(2.8) = 2, Math.flor(3.99999) = 3
  //var suitOneMore = suitIntegerOfWhole+1; //0+1=1, 0+1=1, 2+1=3, 3+1=4
  var suitIndex = suitIntegerOfWhole; //suitRandomPercent *
  var rankRandomPercent = Math.random(); //0, .2, .7, .9999999
  var rankPercentOfWhole = rankRandomPercent * rankArray.length; //randomPercent * 13
  var rankIntegerOfWhole = Math.floor(rankPercentOfWhole); //Math.floor(n)
  //var rankOneMore = rankIntegerOfWhole + 1; //0+1=1, 0+1=1, 2+1=3, 3+1=4 etc..
  var rankIndex = rankIntegerOfWhole; // rankRandomPercent *
  //gives back rounding errors and floor never lets me get to rounded value - var suitIndex = Math.floor((Math.random() * suitArray.length ) + 1);
  //gives back rounding errors and floor never lets me get to rounded value - var rankIndex = Math.floor((Math.random() * rankArray.length ) + 1);
  var randomSuit = suitArray[suitIndex];
  var randomRank = rankArray[rankIndex];
  var randomCard = createCard(randomSuit, randomRank);
  return randomCard;
}
function addRandomCardToDom(){
  var randomCard = createRandomCard();
  var jQcol = $('.col:nth-child(2)');
  jQcol.append(randomCard);
}
function toggleCardBack(){
  var clickedCard = $(this);
  clickedCard.toggleClass('back');
}
/*
//15 - 75
var max = 75;
var min = 15

var num = Math.random()* (max-min+1)
num = Math.floor(num) + min;
*/
