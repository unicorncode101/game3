
var currentQuestion; 
var nextQuestion = true; 
var correctUser =['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',];
var whoAsked=['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',];

var questions=['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',];
var correctAnswer=['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',];
var questionValue=['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',];

var first = [1,6,11,16,21];
var second = [2,7,12,17,22];
var third =[3,8,13,18,23];
var fourth = [4,9,14,19,24]; 
var fifth = [5,10,15,20,25];

async function getQuestions(cat,id){
	
	
	var getCatQuestions ="https://jeopardy-game-api.herokuapp.com/clues/categories/"+encodeURI(cat) ; 
    let response = await fetch(getCatQuestions);
    
	if (response.status === 200) {
        let data = await response.text();
	  return data;
	  
    }
}

 getQuestions("ZODIAC SYMBOLS",1).then((a) => {
cat1 = a;
	var stuff=JSON.parse(a);
	
	stuff = stuff.sort(sortByProperty('value'))
	
	var i =0;
	var y=1*4 ;
	
	
	
	while(i < stuff.length){
	
	
	questions[first[i]] = stuff[i].question;
	correctAnswer[first[i]] = stuff[i].answer;
	questionValue[first[i]] = stuff[i].value; 
	i++;
	
	}
	//console.log(a);
	
});


 getQuestions("ROCK ME",1).then((a) => {
cat1 = a;
	var stuff=JSON.parse(a);
		stuff = stuff.sort(sortByProperty('value'))
	var i =0;
	var y=1*4 ;
	while(i < stuff.length){
	
	
	questions[second[i]] = stuff[i].question;
	correctAnswer[second[i]] = stuff[i].answer;
	questionValue[second[i]] = stuff[i].value; 
	i++;
	
	}

	
});



 getQuestions("THE MUSICAL DR. IS IN",1).then((a) => {
cat1 = a;
	var stuff=JSON.parse(a);
		stuff = stuff.sort(sortByProperty('value'))
	var i =0;
	var y=1*4 ;
	while(i < stuff.length){
	
	
	questions[third[i]] = stuff[i].question;
	correctAnswer[third[i]] = stuff[i].answer;
	questionValue[third[i]] = stuff[i].value; 
	i++;
	
	}
});

 getQuestions("ZOO LAND",1).then((a) => {
cat1 = a;
	var stuff=JSON.parse(a);
	stuff = stuff.sort(sortByProperty('value'))
	var i =0;
	var y=1*4 ;
	while(i < stuff.length){
	questions[fourth[i]] = stuff[i].question;
	correctAnswer[fourth[i]] = stuff[i].answer;
	questionValue[fourth[i]] = stuff[i].value; 
	i++;
	
	}
	
});

 getQuestions("ZOOLOGY",1).then((a) => {
cat1 = a;
	var stuff=JSON.parse(a);
	stuff2 = stuff.sort(sortByProperty('value'))
	var i =0;
	var y=1*4 ;
	while(i < stuff.length){
	questions[fifth[i]] = stuff[i].question;
	correctAnswer[fifth[i]] = stuff[i].answer;
	questionValue[fifth[i]] = stuff[i].value; 
	i++;
	
	}
	
});


function displayQuestion(id){
var divQuestion = document.getElementById("QuestionDiv");
if(nextQuestion !=false ){


if(id > 26){
	alert("no such question");

}
else{
	divQuestion.innerHTML = "value of question is "+questionValue[id]+"<br>"+questions[id];
	hideQuestion(id);
	curentQuestion = id; 

	console.log(correctAnswer[id]); 
	nextQuestion=false; 

	}

						}
	else
	{

	divQuestion.innerHTML="<h2> Someone must type an answer before going on to the next question. "
	}
							}
function hideQuestion(ids){
	var divQuestion2 = document.getElementById(ids);
	divQuestion2.style.color='gray';
	divQuestion2.innerHTML ='';

}
function askQuetion(){
	var promptQuestion = prompt("Question id");
	displayQuestion(promptQuestion);
}

function checkAnswer(answer,username ){
console.log("within check answer"); 



	var divQuestion = document.getElementById("QuestionDiv");
	if(currentQuestion >0){
	nextQuestion=true; 

	if(correctAnswer[curentQuestion]!=answer){

		}
		else{
	
		divQuestion.innerHTML="<h2> Correct Answer</h2> "; 
		
		if(curentQuestion >0){
			correctUser[curentQuestion]= username
			}
		}
		}
		else
		{
		divQuestion.innerHTML="<h2> Please select a question! </h2>";
		
		}
}
function sortByProperty(property){  
   return function(a,b){  
  
      if(a[property] > b[property])  
         return 1;  
      else if(a[property] < b[property])  
         return -1;  
      return 0;  
   }  
}


async function fetchCat(){

// fetch  questions then pass them  to  save json  then save them to array  

		var catListUrl ="https://jeopardy-game-api.herokuapp.com/categories";


		var jsonId =0;
		var json = fetch (catListUrl)
        
		.then (blob => blob.json ())
        .then (data =>
        {
            json = JSON.stringify (data, null, 2);
            jsonCat = JSON.parse (json);
			return jsonCat
	
        });



}
function createGame(data,whichdiv ){
var board = document.getElementById(whichdiv); 

var output = '';
var  final = 26; 
var i=1;

var catArray= ["ZODIAC SYMBOLS","ZOO LAND","ZOOLOGY","THE MUSICAL DR. IS IN", "ROCK ME"]
var catTitle =document.getElementById("main"); 
var y =0; 
var outputs1 ='';

while(y != catArray.length  )
{
outputs1 =  outputs1 + "<div >"+catArray[y]+
"</div>";


y++;
}

while(i != final){
	output = output + "<div  style=specialFont id="+i + "><b>#" + i + "<br></b>" + data[i]  +"</div>" ;
	i++;
}

board.innerHTML = outputs1 +output; 

}
