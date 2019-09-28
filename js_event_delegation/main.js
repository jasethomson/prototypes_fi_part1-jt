$(document).ready(initializeApp);
function initializeApp(event){
    addButtonToList();
    addButtonToList();
    //var allButtons = $('.list-group button');
    //allButtons.on('click',addDot);
    var addButtonID = $('#add-btn');
    addButtonID.on('click', addButtonToList);
    var listGroupClass = $('.list-group');
    listGroupClass.on('click','button',addDot);
}




// ==== Place all code for prototype ABOVE this line ==== //
// ==== The below functions are just for you to use and will not need to be altered ==== //
function addDot(){
    $(this).next().append('<div class="dot"></div>');
}

function addButtonToList(){
    var number = $('.list-group-item').length + 1;
    var newListItem = $('<li class="list-group-item"><button class="btn btn-outline-info">Button #' + number + '</button><div class="dot-container"></div></li>');
    $('.list-group').append(newListItem);
}
