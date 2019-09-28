var student_array = ["Sam","Josh","Alex","Brandon","Kim","John"];
console.log("The third student in the array is: ", student_array[2]);
console.log("Full Student Array: " , student_array);
console.log("There are",student_array.length,"students in the student_array");
student_array.push("Fred");
student_array.unshift("Nancy");
console.log("Full Student Array:", student_array);
console.log("There are", student_array.length, "students in the student_array");
student_array.splice(Math.round(student_array.length/2),0,"Jae","Brian","Frank","James","Catherine");
console.log("Full Student Array:", student_array);
console.log("There are", student_array.length, "students in the student_array");
var testArray = student_array;
var testResult = testArray.join("*");
console.log("testArray converted to string: ", testResult);
console.table(student_array);

var student = {};
student.firstName = "Jase";
student.lastName = "Thomson";
student.age = 27;
student.school = "LearningFuze";
student.questionQueue = [];
student.hasQuestion = false;
student.greeting = function () {
  return "Hello, my name is " + this.firstName;
}
student.aboutMe = function () {
  return "My full name is " + this.firstName + " " + this.lastName
  + ", I am " + this.age + " years old and I am a student at " + this.school;
}
student.askQuestion = function (question) {
  student.questionQueue.push(question);
  student.hasQuestion = true;
  return "A question has been added to your Queue";
}
student.answerQuestion = function (){
  if (student.hasQuestion){
    var currentQuestion = student.questionQueue.pop();
    if (student.questionQueue.length <= 0){
    student.hasQuestion = false;
    }
    return currentQuestion;
  } else {
    return "You have no questions in your queue"
  }
}
console.log("greeting(): ", student.greeting());
console.log("aboutMe(): ", student.aboutMe());
console.log("answerQuestion(): ", student.answerQuestion());
console.log("askQuestion(): ", student.askQuestion("what is today's date?"));
console.log("askQuestion(): ", student.askQuestion("What is the weather?"));
console.log("askQuestion(): ", student.askQuestion("What type of yogurt do you like?"));
console.log("answerQuestion(): ", student.answerQuestion());
console.log("answerQuestion(): ", student.answerQuestion());
console.log("answerQuestion(): ", student.answerQuestion());
console.log("answerQuestion(): ", student.answerQuestion());

function Student(firstName,lastName,age,school){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.school = school;
  this.questionQueue = [];
  this.hasQuestion = false;
}
Student.prototype.greeting = function() {
  return "Hello, my name is " + this.firstName;
}
Student.prototype.aboutMe = function () {
  return "My full name is " + this.firstName + " " + this.lastName
    + ", I am " + this.age + " years old and I am a student at " + this.school;
}
Student.prototype.askQuestion = function (question) {
  this.questionQueue.push(question);
  this.hasQuestion = true;
  return "A question has been added to your Queue";
}
Student.prototype.answerQuestion = function () {
  if (this.hasQuestion) {
    var currentQuestion = this.questionQueue.pop();
    if (this.questionQueue.length <= 0) {
      this.hasQuestion = false;
    }
    return currentQuestion;
  } else {
    return "You have no questions in your queue"
  }
}
console.log("Student object constructor function: ", new Student("John","Smith",53,"Cool School"));
