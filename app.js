function populate(){
	if(quiz.isEnded()){
		//showScores();
	}
	else{
		//show questions
		var element = document.getElementById("question").;
		element.innerHTML = quiz.getQuestionIndex().text;
	}
}

var questions = [
	new Question("Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C");
	new Question("Which language is used for styling web pages?", ["HTML","CSS", "Angular Js", "XML"],"CSS");
	new Question("There are ____ main components of object oriented programming.",["1","4","5", "2"],"4");
	new Question("Which language is used for web apps", ["PHP","Python", "Javascript", "All"], "All");
	new Question("MVC is a _____.",["Language","Library","Framework","All"],"Framework");
];

var quiz = new Quiz(questions);

populate();

console.log(questions.length);