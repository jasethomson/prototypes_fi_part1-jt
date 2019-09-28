$(document).ready(initializeApp);

function initializeApp(){
  console.log("Initializing App");
  section1();
  section2();
}
function section1(){
  $('.box').css('border', '4px solid #8e24aa');
  $('.box:nth-child(odd)').css('background-color', '#ce93d8');
  $('.box:nth-child(even)').css('background-color', '#ab47bc');
}
function section2(){
  $('.col-1').css('background-color', '#e3f2fd');
  $('.col-2').css('background-color', '#bbdefb');
  $('.col-3').css('background-color', '#90caf9');
  $('#section2 .col-1').css('background-color', '#e3f2fd').click(shrinkCol);
  $('#section2 .col-2').css('background-color', '#bbdefb').click(shrinkCol);
  $('#section2 .col-3').css('background-color', '#90caf9').click(shrinkCol);
}
function shrinkCol() {
  console.log('This is: ',this);
  //var col1 = $('.col-1');
  var col = $(this);
  var colWidth = col.css('width');
 // console.log('Col Width: ', colWidth);
  var newWidth = parseInt(colWidth);
  newWidth = newWidth - 40;
  console.log('New Width: ', newWidth);
  newWidth = col.css('width', newWidth);
}
