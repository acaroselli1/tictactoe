


var turn = 0;
var round = 1;
var oWinCount = 0;
var xWinCount = 0;	

function chooseCell (location) {

	var square = location.target;
	
	if (turn%2 === 0){	
		square.setAttribute("class","X");
	} else if (turn%2 !== 0){
		square.setAttribute("class","O");
	}
	
	turn++;
		
		
		var one = document.getElementById("1");
		
		var two = document.getElementById("2");
		
		var three = document.getElementById("3");
		var four = document.getElementById("4");
		var five = document.getElementById("5");
		var six = document.getElementById("6");
		var seven = document.getElementById("7");
		var eight = document.getElementById("8");
		var nine = document.getElementById("9");
	
		

		
		var oneCheck = one.getAttribute("class");
		
		var twoCheck = two.getAttribute("class");
		
		var threeCheck = three.getAttribute("class");
		var fourCheck = four.getAttribute("class");
		var fiveCheck = five.getAttribute("class");	
		var sixCheck = six.getAttribute("class");
		var sevenCheck = seven.getAttribute("class");
		var eightCheck = eight.getAttribute("class");
		var nineCheck = nine.getAttribute("class");
			
		if ((oneCheck == "O" && twoCheck == "O" && threeCheck == "O") || 
		   (fourCheck == "O" && fiveCheck == "O" && sixCheck == "O") || 	
		   (sevenCheck == "O" && eightCheck == "O" && nineCheck == "O") || 
		   (oneCheck == "O" && fourCheck == "O" && sevenCheck == "O") || 
		   (twoCheck == "O" && fiveCheck == "O" && eightCheck == "O") || 	
		   (threeCheck == "O" && sixCheck == "O" && nineCheck == "O") || 
		   (oneCheck == "O" && fiveCheck == "O" && nineCheck == "O") || 
		   (threeCheck == "O" && fiveCheck == "O" && sevenCheck == "O")){
		
		
			stateWinnerO();
                        round++;
			oWinCount++;
			
		} else if ((oneCheck == "X" && twoCheck == "X" && threeCheck == "X") || 
		   (fourCheck == "X" && fiveCheck == "X" && sixCheck == "X") || 	
		   (sevenCheck == "X" && eightCheck == "X" && nineCheck == "X") || 
		   (oneCheck == "X" && fourCheck == "X" && sevenCheck == "X") || 
		   (twoCheck == "X" && fiveCheck == "X" && eightCheck == "X") || 	
		   (threeCheck == "X" && sixCheck == "X" && nineCheck == "X") || 
		   (oneCheck == "X" && fiveCheck == "X" && nineCheck == "X") || 
		   (threeCheck == "X" && fiveCheck == "X" && sevenCheck == "X")){
	
	                stateWinnerX();
			round++;
			xWinCount++;
		}
	
}


function resetStateWinner (){

    
	var winner = document.getElementById("declareWinner");
	winner.innerHTML = "Who will win round " + round +"?";
}






function  resetCells (){
	

	var cells = document.getElementsByTagName("td");
	
	for(i=0; i< cells.length; i++){

		cells[i].setAttribute("class","");
 			
		
	}

	var winner = document.getElementById("declareWinner");
	winner.innerHTML = "Who will win round " + round +"?";
	
}

function stateWinnerO (){

	
	var winner = document.getElementById("declareWinner");
	winner.innerHTML = "<img src =\"smallo.png\"> wins!";
	var dingDingDing = document.getElementById("winSound");
	dingDingDing.play();
}

function stateWinnerX (){

	
	var winner = document.getElementById("declareWinner");
	winner.innerHTML = "<img src=\"smallx.png\"> wins!";
	var dingDingDing = document.getElementById("winSound");
	dingDingDing.play();
}


function tallyResults(){

	var winner = document.getElementById("declareWinner");
	if (xWinCount == oWinCount){
		winner.innerHTML = "<img src =\"smallo.png\"> & <img src =\"smallx.png\"> are tied at " + xWinCount + " win(s)!";
		var xWincount = 0;
		var oWincount = 0;

	} else if (xWinCount > oWinCount){
		winner.innerHTML = "<img src =\"smallx.png\"> is winning this series with " + xWinCount + " win(s) to " + oWinCount + " <img src =\"smallo.png\">  win(s)!";
		var xWincount = 0;
		var oWincount = 0;
	} else {
		winner.innerHTML = "<img src =\"smallo.png\"> is winning this series with " + oWinCount + " win(s) to " + xWinCount + " <img src =\"smallx.png\">  win(s)!";
		var xWincount = 0;
		var oWincount = 0;
	}

	
}      
window.onload = init;


function resetWholeGame (){


	

	var cells = document.getElementsByTagName("td");
	
	for(i=0; i< cells.length; i++){

		cells[i].setAttribute("class","");
 			
		
	}

	var winner = document.getElementById("declareWinner");
	winner.innerHTML = "Who will win round 1?";

	  turn = 0;
	  round = 1;
	  oWinCount = 0;	
	  xWinCount = 0;


}
	
function init (){
	
	
	var mozart = document.getElementById("song");
	
	mozart.play();

	var cells = document.getElementsByTagName("td");

	for(i=0; i< cells.length; i++){
	
		cells[i].onclick = chooseCell;
	}

        var button = document.getElementById("newGame");
 
	button.onclick = resetCells;

        var resultsButton = document.getElementById("results");
	
	resultsButton.onclick = tallyResults;

        var startOverButton = document.getElementById("startOver");
	
	startOverButton.onclick = resetWholeGame;

}