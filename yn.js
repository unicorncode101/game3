

//var fans = https://cdn.younow.com/php/api/channel/getInfo/channelId=51919855 

// chat log below work
var jsonInfoData =0;

 async function getAllJsonInfo(userIDS){
		var urlForInfo='http://localhost:8081/info/'+userIDS;
		var jsonId =0;
	var json = fetch (urlForInfo)
        .then (blob => blob.json ())
        .then (data =>
        {
            json = JSON.stringify (data, null, 2);
            jsonId = JSON.parse (json);
			//console.log(jsonId);

return jsonId; 

			
        });


	
}

 function assignReferees(moderatorUserId)
    {
        console.log("actionId=" + '10' + "&userId=" + publicUserId + "&onUserId=" + moderatorUserId + "&broadcastId=" + publicBroadcastId + "&broadcaster=0");

var publicBroadcastId   = (getAllJsonInfo(moderatorUserId)).broadcastId 


        fetch("//api.younow.com/php/api/doAdminAction", {
            "headers": {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "x-requested-by": localStorage.getItem("requestBy")
            },
            "body": "actionId=" + '10' + "&userId=" + publicUserId + "&onUserId=" + moderatorUserId + "&broadcastId=" + publicBroadcastId + "&broadcaster=0",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
    }
	
	
var goodies = null; 
async function getSpecialFans(userid){
	
	var ids =0; 
	var el3 =   document.getElementById("info2") ;
	el3.style.display="block";
 
	http://localhost:8081/info/51919855
	var urlForInfo='http://localhost:8081/info/'+userid;
	var json = fetch (urlForInfo)
        .then (blob => blob.json ())
        .then (data =>
        {
            json = JSON.stringify (data, null, 2);
            jsonId = JSON.parse (json);
			ids=jsonId.totalFans;		
			el3.innerHTML = "Total fans " +  ids;
        console.log(jsonId); 
		});
	
			
	
	
}

async function ListCards(whoToDisplay){
	const response = await fetch('http://localhost:8080/username/'+whoToDisplay);
	const body = await response.text();
	//console.log(body); 
	var el3 =   document.getElementById("cardlist") ;
	var results=body.split('<br>'); 
	var i=0; var counts=0;
	var output =""; 
	el3.style.visibility = 'visible';
	el3.style.color= 'white';


console.log("within list cards"); 

	while(i < results.length){
	var temp = results[i].split(","); 


	output2= "<center><h2 style='font-family: Josefin Sans;font-size:30px', sans-serif;'>"+ whoToDisplay+ " "+"</h2></center>" 
	 

	var Searching = null; 


		if((temp[0].includes(whoToDisplay) )){

		output = output+"<div style='display:inline'><div style='display:inline;'> <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + temp[1].trim() +".svg'  style='border-radius: 50%;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'/></div></div> "

		counts++;

		}
		


// console.log(temp[]);
 
i++; 


}

console.log("Working within mine"); 

//console.log(whoToDisplay.length); 

el3.innerHTML = output2+"<br><center><span class='sp'> number of cards : " + counts +"</span></center><br>" +output +""; 

	setTimeout(() => {
  

  // 👇️ hides element (still takes up space on page)
el3.style.visibility = 'hidden';
}, 14500);
	





}
function tradeCards(ToUser,FromUser,cardSent){


    targetUrl = 'http://localhost:8080/trade?UserSending='+FromUser+"&UserTo="+ToUser+"&card="+cardSent;
    var json = fetch (targetUrl)
        .then (data =>
        {
       console.log(data); 

		
        });

}
DownloadGifts();
function displayPopUp(data){

	var popup = document.getElementById('cardlist');
	popup.style.visibility="visible" 
	popup.innerHTML	= data; 
		setTimeout(() => {
  

  // 👇️ hides element (still takes up space on page)
popup.style.visibility = 'hidden';
}, 14500);
	
}

function customUserName(){


}
function displayGiftOnly(i,data2){
	
	index =0; 
	var index =0; 
	stuff = goodies.goodies;
	gifts = data2; 
	
	var totalLikesGiven = gifts.extraData['numOfLikes']
	
	if(totalLikesGiven> 1)
	{
	
	return totalLikesGiven
	}
	else if (gifts.extraData.value > 1){
	
	
	return gifts.extraData.value;
	
	}
	else{
	
	
	return 0
	}
} 

	async function DownloadGifts()
	{
    //console.log ("Fetching Gifts...");
    targetUrl = 'https://ynassets.younow.com/giftsData/live/de/data.json';
    var json = fetch (targetUrl)
        .then (blob => blob.json ())
        .then (data =>
        {
            json = JSON.stringify (data, null, 2);
            goodies = JSON.parse (json);
        });
	}

 
function FetchEvent (userId){
		pusher = new Pusher ('d5b7447226fc2cd78dbb', {
        cluster: "younow"
		});
	
		let channel = pusher.subscribe ("public-channel_" + userId);
  
		channel.bind('onEnd', function(data){

		});
	
	channel.bind ('onChat', function (data)
    {
		
        if (data.message !== "undefined")
    
			{
				
				
		var dataout = "" ; 
					
					for (let i = 0; i < data.message.comments.length; i++)
						{
						var username = data.message.comments[i].name;
						var	TimsStamp =  data.message.comments[i].timestamp; 
						var whatsSaid = data.message.comments[i].comment; 
						var CommentUserId = data.message.comments[i].userId; 
						var userImage = GetuserImage(CommentUserId); 
						var propslevel = (data.message.comments[i].propsLevel ) 
						var ifMod = data.message.comments[i].broadcasterMod; 
						
						
							if(whatsSaid.includes("!q")!=false){
								
								var temp = whatsSaid.split(" " );
								displayQuestion(temp[1]);
								
							}
							else if(whatsSaid.includes("!a")!=false){
										var temp = whatsSaid.split("!a" );
							
							checkAnswer(temp[1],username )
								
							}
							
						// 
							if(ifMod != false) {
			
			
							dataout = dataout + "<table><tr><td>"+"<img  style='width:50px;height:50px; border-radius: 20px;align:left;' src='" + userImage+"'/></td><td  class='msg' style='color:red;background-color:white'>" + Math.abs(propslevel) + " " +data.message.comments[i].name  +" "+ timeConverter(TimsStamp) +"<br>"  +cleanUp(data.message.comments[i].comment) + 
							"</td></tr><table>"; 
							}
							
							else{
							dataout = dataout + "<table><tr><td>"+"<img  style='width:50px;height:50px; border-radius: 20px;align:left;' src='" + userImage+"'/></td><td  class='msg' style='align:left;color:white'>" + Math.abs(propslevel) + " " +data.message.comments[i].name  +" "+ timeConverter(TimsStamp) +"<br>"  +data.message.comments[i].comment + 
							"</td></tr><table>"; 
							}
						}
	
			}



		displayIt(dataout); 



	
	});

	
   
        channel.bind('onGift', function (data)
        {
		
		// check who  got the gift  and display it in a different list
		
		playSound("./sounds/thank_you.wav"); 
		let tempUsername = data.message.stageGifts[0].profileUrlString
		var giftids = data.message.stageGifts[0].giftId;
		var onlydata = data.message.stageGifts[0] ;
		
		if(data.message.stageGifts[0].extraData.numOfLikes >0){
			console.log("GOT " +data.message.stageGifts[0].receiverFirstName +" likes " +  data.message.stageGifts[0].extraData.numOfLikes)}
		else
		{
			
			if(data.message.stageGifts[0].extraData.value >0){
				
					console.log(data.message.stageGifts[0].extraData.value)
			}
			else if(data.message.stageGifts[0].giftId===897){
				
				displayPopUp2("New sub");
				
			}
			else if(data.message.stageGifts[0].giftId!=248){
			
			console.log(data.message.stageGifts[0]);			
			//248
			}
			else
			{
			
			}
			
		}
		
		
		if(displayGiftOnly(giftids,onlydata) != 0){
		
			dataout = "<div  class='msg' style='font-size:16px;'>" +tempUsername+ " Gave <center> "+ displayGiftOnly(giftids,onlydata)+" likes </center></div>"
		}
		else{
			dataout = "<div  class='msg' style='font-size:16px;'><center>" + onlydata.comment+"  </center></div>"
		
		
		}
		
			displayIt(dataout)
  
		
		});
	
        //Get Stickers
        channel.bind('onSticker', function (data)
        {
	
			dealwithFreeStickers(data);
		
		  //  console.log('sticker data', data);
            //handleNewSticker(data);
        });

		channel.bind('onRaid', function (data)
        {
		//console.log("raid : " +  data )
		
		});
 channel.bind('onBroadcastPlayData', function (data)
        {
           var  viewers= data.message.viewers ;
		   var likes = data.message.likes; 


		
        });
		//Get Stickers
        channel.bind('onPartnerSticker', function (data)
        {
		
		console.log("Partener sticker data " + data )
            //handleOnOldPartnerSticker(data);
        });
   
		channel.bind ('onSuperMessage', function (data)
			{        
	
			dataout = dataout + "<div class='msg' style='color:red'>"    +data.message.superMessages[0].name +" <b> " + data.message.superMessages[0].comment + "</b><div>"; 
			displayIt(dataout);
			
		//	
		});
		
	
	
	
}  
function dealwithFreeStickers(data){

	var ids = data.message.stickers[0].stickerUserId; 
	var stickername = data.message.stickers[0].assetSku; 
	var fullpath = "https://ynassets.younow.com/subscriptionsTiers/usersAssets/live/" + ids+"/" +stickername +"/web_" +stickername +".png?assetRevision=1 " ;
	var sent_user = data.message.stickers[0].profile;
	var imagedata= "<div class='msg'    style='width:200px;height:auto;font-size:15px;color:white' >" +sent_user+"  <br><img src='" + fullpath +"' style='color:white; width:50px;height:50px'/> </div>"

	displayIt(imagedata); 
 

}
function GetuserImage(data){


return   "https://ynassets.younow.com/user/live/" + data + "/" + data +".jpg"; 



}
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  if(sec <10 ){
	sec ="0"+sec

  }
  if(hour <10) {
	hour = "0" + hour;

  }
  if(min <10){
	min = "0" + min

  }
  var time =   hour + ':' + min ;
  return time;
}
function displayIt(data){

	dataout = data;
	var el2 =   document.getElementById("chatWin") ;
	el2.innerHTML =   el2.innerHTML  + dataout; 

}



function playAudio() { 
		var x = document.getElementById("myAudio"); 
	
		
	  var playPromise = x.play();
 
  if (playPromise !== undefined) {
    playPromise.then(_ => {
	console.log("playing");
	
      // Automatic playback started!
      // Show playing UI.
      // We can now safely pause video...
      x.pause();
    })
    .catch(error => {
	console.log(error);
	
      // Auto-play was prevented
      // Show paused UI.
    });
  }	
		
		
		
		
} 
function playSound(filename){
				var audio = new Audio(filename);
        audio.play();
					
	
}