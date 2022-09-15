
//____ OF THE ____
// list of cat 
// "ZODIAC SYMBOLS","ZOO LAND","ZOOLOGY","THE MUSICAL DR. IS IN", "ROCK ME"


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
function createGame(){


var board = document.getElementById("main"); 

var output = '';
var  final = 26; 
var i=1;

while(i != final){

	output = output + '<div id='+i + '>' + i +'</div>' ;
	i++;

}

board.innerHTML = output; 

}
