
var listofwinners="1:24,1:23,1:24,JAMES:18,JAMES:13"; 
var currentQuestion; 
var currentCat =0; 
var catlist =["-","-","-","-","-"]
var nextQuestion = true; 
var correctId =['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',];
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

var PleaseWait = false;

getCats();

/*
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
	

	
	var i =0;
	while(i < stuff.length){
			questions[first[i]] = stuff[i].question;
			correctAnswer[first[i]] = stuff[i].answer;
			var tempvalue =String(stuff[i].value).substr(1,stuff[i].value.length); ; 
			tempvalue = tempvalue.replaceAll(",",""); 
			questionValue[first[i]] = tempvalue;	
			i++;
	
	}
	
	
	//console.log(a);
	
});


 getQuestions("ROCK ME",1).then((a) => {
cat1 = a;
	var stuff=JSON.parse(a);
	
	var i =0;
		
		
		
		while(i < 5){
			
			questions[second[i]] = stuff[i].question;
			correctAnswer[second[i]] = stuff[i].answer;
			
			var tempvalue =String(stuff[i].value).substr(1,stuff[i].value.length); ; 
			tempvalue = tempvalue.replaceAll(",",""); 
			questionValue[second[i]] = tempvalue;




			i++;
	
	}

	
});



getQuestions("THE MUSICAL DR. IS IN",1).then((a) => {
cat1 = a;
	var stuff=JSON.parse(a);

	var i =0;
	while(i < 5){
			questions[third[i]] = stuff[i].question;
			correctAnswer[third[i]] = stuff[i].answer;
			var tempvalue =String(stuff[i].value).substr(1,stuff[i].value.length); ; 
			tempvalue = tempvalue.replaceAll(",",""); 
			questionValue[third[i]] = tempvalue; 
			
	
			i++;
	
	}
});

 getQuestions("ZOO LAND",1).then((a) => {
cat1 = a;
	var stuff=JSON.parse(a);

	var i =0;
	while(i < stuff.length){
			questions[fourth[i]] = stuff[i].question;
			correctAnswer[fourth[i]] = stuff[i].answer;
			var tempvalue =String(stuff[i].value).substr(1,stuff[i].value.length); ; 
			tempvalue = tempvalue.replaceAll(",",""); 
			questionValue[fourth[i]] = tempvalue;
			i++;
	}
	
});

 getQuestions("ZOOLOGY",1).then((a) => {
cat1 = a;
	var stuff=JSON.parse(a);

	var i =0;
	while(i < 5){
			questions[fifth[i]] = stuff[i].question;
			correctAnswer[fifth[i]] = stuff[i].answer;
			var tempvalue =String(stuff[i].value).substr(1,stuff[i].value.length); ; 
			tempvalue = tempvalue.replaceAll(",",""); 
			questionValue[fifth[i]] = tempvalue;

			
			
			i++;
			
	}
	
});


*/

// new version  api  useage 
async function getCats(){
//https://jservice.io
var clues= "https://jservice.io/api/clue?id=";

var urllist = "https://jservice.io/api/categories?count=10;"

let fetchRes = fetch(urllist);
        // fetchRes is the promise to resolve
        // it by using.then() method
        fetchRes.then(res =>
            res.json()).then(d => {
checkCats(d)
            })

}
function checkCats(jsonlist){

var x = jsonlist.length; 
var i =0; 

while(i <x )
{

if(jsonlist[i].clues_count >4){
//console.log( jsonlist[i])
//catlist[currentCat] = jsonlist[i].title;

getquestions(jsonlist[i].id,jsonlist[i].title)



}

i++; 
}

}

async function getquestions(id,title){

var clues= "https://jservice.io/api/clues?category=" + id +"&offset=5" ;


let fetchRes = fetch(clues);
        // fetchRes is the promise to resolve
        // it by using.then() method
        fetchRes.then(res =>
            res.json()).then(d => {
saveQuestions(d,title); 
            })




}
getCats(); 

function saveQuestions(cats,title) {
var max=5; 

var i=0; 
catlist[currentCat] = title; 
while(i< max){

if(currentCat===0){
questions[first[i]] = cats[i].question; 
questionValue[first[i]]=cats[i].value; 
correctAnswer[first[i]]=cats[i].answer
}

else if(currentCat===1)
{
questions[second[i]] = cats[i].question; 
questionValue[second[i]]=cats[i].value; 
correctAnswer[second[i]]=cats[i].answer
}

else if(currentCat===2)
{
questions[third[i]] = cats[i].question; 
questionValue[third[i]]=cats[i].value; 
correctAnswer[third[i]]=cats[i].answer
}

else if(currentCat===3)
{
questions[fourth[i]] = cats[i].question; 
questionValue[fourth[i]]=cats[i].value; 
correctAnswer[fourth[i]]=cats[i].answer

}
else
{
questions[fifth[i]] = cats[i].question; 
questionValue[fifth[i]]=cats[i].value; 
correctAnswer[fifth[i]]=cats[i].answer
}
i++; 

}
currentCat ++;


}

function displayQuestion(id){
var divQuestion = document.getElementById("QuestionDiv");

if (PleaseWait !=true ){
if(id > 25){
	alert("no such question");

}
else{
	
	divQuestion.innerHTML = "value of question is "+questionValue[id]+"<br>"+questions[id];
	hideQuestion(id);
	curentQuestion = id; 

	console.log(correctAnswer[id]); 
	nextQuestion=false; 

	}
PleaseWait= true; 
					 
}




							}
							

							
function hideQuestion(ids){
	var divQuestion2 = document.getElementById(ids);
	//divQuestion2.style.color='gray';
	divQuestion2.innerHTML ='';

}
function askQuetion(){
	var promptQuestion = prompt("Question id");
	displayQuestion(promptQuestion);
}

function checkAnswer(answer,username,userId ){
console.log("within check answer"); 



	var divQuestion = document.getElementById("QuestionDiv");

	nextQuestion=true; 
PleaseWait= true; 
	if(correctAnswer[curentQuestion]!=answer){
		
		console.log(answer); 

		}
		else{
	
		divQuestion.innerHTML="<h2> Correct Answer</h2> "; 
		
		if(curentQuestion >0){
			correctId[curentQuestion] = userId;
			correctUser[curentQuestion]= username;
			var tempDiv =document.getElementById(currentQuestion)
			
			listofwinners = listofwinners + "," + username+ ":" + curentQuestion;
			}
		}
}

function showScoreBoard(){
	var scoreBoard = document.getElementById('QuestionDiv'); 
	
	var fullResults; 
	/*
	

	*/
console.log(listofwinners);

	var tempdata;
	
	correctUser.map(function(username, index) {

	
	if(username.length > 1)
	{
    tempdata += "<div> <img src='" +GetuserImage(correctId[index])+ "' style='width:100px;100px;border-radius: 20px;'></img> <br/>"  +username  + "</div>";		
	
	var tempvalue= questionValue[curentQuestion]; 
	
	}
		fullResults =  tempdata; 
		
});
	
	scoreBoard.innerHTML +=  fullResults; 

	
	
	
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
function createGame(data ){

	
var board = document.getElementById('main'); 

var output = '';
var  final = 26; 
var i=1;

var catArray= ["ZODIAC SYMBOLS","ROCK ME","THE MUSICAL DR. IS IN", "ZOOLOGY","ZOO LAND"]
var catTitle =document.getElementById("main"); 
var y =0; 
var outputs1 ='';

while(y != 5 )
{
outputs1 =  outputs1 + "<div class='upcase'>"+catlist[y]+
"</div>";


y++;
}

while(i != final){
	output = output + "<div  style=specialFont id="+i + "><b>#" + i + "<br></b>" + data[i]  +"</div>" ;
	i++;
}

board.innerHTML = outputs1 +output; 

}
function showScore(){
	
	
		var  data = listofwinners.split(","); 
		var output ="";
		var i =0;
		var winners=['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',]; 
		var scoreWinner  =['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',];
	 
	 
	while( i < data.length){
		
	var tempdata = data[i].split(":");
	//output += "<b>" + tempdata[0] + "</b>" + questionValue[tempdata[1]] + "<br>";
	var whereAt = winners.indexOf(tempdata[0]); 
	var emptySpace  = winners.indexOf("-");


		if(whereAt >-1 ){
			
			
			scoreWinner[whereAt] += (  parseInt(questionValue[tempdata[1]]));

			}
		else{
			
		
	
		winners[emptySpace] = tempdata[0]; 
		scoreWinner[emptySpace] = parseInt( parseInt(questionValue[tempdata[1]]));

		
	
		}
		i++; 	
	}
	
	var scorelist = " <h2><center>Scores</center></h2><table> <tr><th>Username </th><th>Score</th></tr>"; 
	
	for (i =0 ;i< scoreWinner.length;i++)
	{
		
		
		if(winners[i].includes("-") !=true){
			
		scorelist =  scorelist+"<tr><td>" + winners[i] +" </td><td>"  + scoreWinner[i] + "</td></tr>"			
		}
		
		else{
			
		}
		
	}
		var test123= document.getElementById("popup"); 
		test123.style.display="block";
		test123.innerHTML = scorelist + "</table>";
	
	
}



class ScoreTacker{
	constructor(username, point) {
    this.name = name;
    this.points = year;
  }
  
  getscore(){
	  return this.points;
	  
  }
	
	
}
