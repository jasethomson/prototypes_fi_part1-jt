$(document).ready(initializeApp);

var mixedArray = [62, 49, 4, 13, 43, 42, 47, 22, 27, 64, 45, 61, 21, 57, 46, 63, 2, 58, 41, 56, 17, 11, 59, 14, 36, 54, 34, 3, 33, 28, 40, 52, 7, 16, 37, 50, 29, 26, 39, 19, 12, 38, 18, 23, 8, 5, 60, 31, 48, 44, 55, 51, 32, 6, 20, 15, 30, 9, 25, 24, 10, 35, 1, 53];
var numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
var students = {
    '#001': {name: 'Bob John', class: '', grade: 82},
    '#002': {name: 'Susan Walker', class: 'Math 101', grade: 98},
    '#003': {name: 'Fred Jenkins', class: 'Math 101', grade: 70},
    '#004': {name: 'Betty Wilson', class: 'Math 101', grade: 92},
    '#005': {name: 'Stuart James', class: 'Math 101', grade: 95},
    '#006': {name: 'Lisa Wallace', class: 'Math 101', grade: 78},
    '#007': {name: 'Ken Jennings', class: 'Math 101', grade: 63},
    '#008': {name: 'Kate Winslet', class: 'Math 101', grade: 87}
};

function initializeApp(){
    console.log('Initializing App...');
    var forwardDiv = $('#forward-loop')
    for(var index=0; index < numbers.length;index++){
        forwardDiv.append(numbers[index] + ' ');
    }
    var reverseDiv = $('#reverse-loop');
    for (var rIndex=numbers.length-1; rIndex >= 0; rIndex--){
        reverseDiv.append(numbers[rIndex] + ' ');
    }
    // Keep these at the bottom of initializeApp
    displayStudentData();
    buildGameBoard();
    populateNumbers(mixedArray);
}

function displayStudentData(){
    var gradeSum = 0;
    var studentAverage = 0;
    var fixDecimal;
    for(var index in students){
        var count = Object.keys(students).length;
        gradeSum += students[index].grade;
}
    studentAverage = gradeSum/count;
    fixDecimal = studentAverage.toFixed(2);
    var studentCount = $('#student-count');
    studentCount.text(count);
    var studentJQAverage = $('#student-average');
    studentJQAverage.text(fixDecimal + '%');
}

function buildGameBoard(){
    var boardSize = { rows: 8, squares: 8 };
    var gameBoard = $('#game-board');
    var lightOrDark = 'light';
    for(var row = 0; row < boardSize["rows"]; row++ ){
        var newDiv = $('<div>');
        newDiv.addClass('row')
        $('#game-board').append(newDiv);
        for (var col = 0; col < boardSize["squares"]; col++){
            var squareColDiv = $('<div>');
            squareColDiv.addClass('square');
            $(newDiv).append(squareColDiv);
            if (lightOrDark === 'light'){
                if (col % 2 === 0) {
                    squareColDiv.addClass('light');
                } else {
                    squareColDiv.addClass('dark');
                }
            } else {
                if (col % 2 !== 0) {
                    squareColDiv.addClass('light');
                } else {
                    squareColDiv.addClass('dark');
                }
            }
        }
        if ( lightOrDark === 'light'){
            lightOrDark = 'dark';
        } else {
            lightOrDark = 'light';
        }
        $('#game-board').append(newDiv);
    }
}

function bubbleSort(dataArray){
    debugger;
    var swapped = true; // defines swapped to and sets to true so the while loop will initiate
    while (swapped){ //while loop to loop check if true or false to replace numbers
        swapped = false; // sets swapped to false to put stop on loop
        for (var index = 0; index<dataArray.length;index++){ //for loop to go through all numbers on array
            if(dataArray[index] > dataArray[index + 1]){ // if statement to check if current number is greater than next number
                var moveElement = dataArray[index]; // sets placeholder for current number amount
                dataArray[index] = dataArray[index + 1]; //sets current number amount to next number amount
                dataArray[index+1] = moveElement; // sets next number amoyunt previous number amount
                swapped = true; // swaps back to true
            }
        }
    }
    return dataArray;
}

function populateNumbers(numArr){
    var squareArr = [];
    for(var i = 0; i < numArr.length; i++){
        var square = $('<div>', {
            class: 'number',
            text: numArr[i]
        });

        squareArr.push(square);
    }
    $('#numbers').append(squareArr);
}

bubbleSort(mixedArray);
