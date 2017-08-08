// create variables
var wins = 0;
var losses = 0;
var yourTotal = 0;

// randomly generated number
var targetNumber = Math.floor((Math.random() * 102) + 19);
    $("#targetNumber").text(targetNumber);

var blueGemNumber =Math.floor((Math.random() * 12) + 1);
	//console.log(blueGemNumber);

var greenGemNumber =Math.floor((Math.random() * 12) + 1);
	//console.log(greenGemNumber);

var purpleGemNumber =Math.floor((Math.random() * 12) + 1);
	//console.log(purpleGemNumber);

var redGemNumber =Math.floor((Math.random() * 12) + 1);
	//console.log(redGemNumber);

$("#losses").text(losses);
$("#wins").text(wins);
$("#yourTotal").text(yourTotal);
	
function reload(){
	targetNumber = Math.floor((Math.random() * 102) + 19);
    $("#targetNumber").text(targetNumber);
    //console.log(yourTotal);

	yourTotal=0;
    
    redGemNumber =Math.floor((Math.random() * 12) + 1);

	blueGemNumber =Math.floor((Math.random() * 12) + 1);

	purpleGemNumber =Math.floor((Math.random() * 12) + 1);

	greenGemNumber =Math.floor((Math.random() * 12) + 1);

	$("#yourTotal").text(yourTotal);

};

	function win(){
		wins++;
		$("#wins").text(wins);
		reload();
};

	function lose(){
		losses++;
		$("#losses").text(losses);
		reload();
};

	$("#blueGem").on("click", function(){
		yourTotal = blueGemNumber + yourTotal;
		$("#yourTotal").text(yourTotal);

	if (yourTotal === targetNumber){
		wins++;
		$("#wins").text(wins);
		alert("You Won!  Congratulations!");
		reload();
	}

	else if (yourTotal > targetNumber){
		losses++;
		$("#losses").text(losses);
		alert("You Lost, try again!");
		reload();
	}

	})

	$("#redGem").on("click", function(){
		yourTotal = redGemNumber + yourTotal;
		$("#yourTotal").text(yourTotal);

	if (yourTotal === targetNumber){
		wins++;
		$("#wins").text(wins);
		alert("You Won!  Congratulations!");
		reload();
	}

	else if (yourTotal > targetNumber){
		losses++;
		$("#losses").text(losses);
		alert("You Lost, try again!");
		reload();
	}

	})

	$("#greenGem").on("click", function(){
		yourTotal = greenGemNumber + yourTotal;
		$("#yourTotal").text(yourTotal);

	if (yourTotal === targetNumber){
		wins++;
		$("#wins").text(wins);
		alert("You Won!  Congratulations!");
		reload();
	}

	else if (yourTotal > targetNumber){
		losses++;
		$("#losses").text(losses);
		alert("You Lost, try again!");
		reload();
	}

	})

	$("#purpleGem").on("click", function(){
		yourTotal = purpleGemNumber + yourTotal;
		$("#yourTotal").text(yourTotal);

	if (yourTotal === targetNumber){
		wins++;
		$("#wins").text(wins);
		alert("You Won!  Congratulations!");
		reload();
	}

	else if (yourTotal > targetNumber){
		losses++;
		$("#losses").text(losses);
		alert("You Lost, try again!");
		reload();
	}

	})








