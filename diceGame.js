// ~~~ Created By Jacob Taylor ~~~
"using strict";

function gameStart(){

	// begins the game loop
		let x = true;
		let y = true;
		gameSettings();
		userSettings(settingsData, x);
		boardGenerator(setttingsData, playerPackage);
		diceGame(diceCounter, playerCount, diceRoll, playerPackage, boardPackage);
		playerMovement(playerCount, y);
		return x;
}

function gameSettings(){ // All of these error catches I would like to change later to allow the script to still exicute
						 // by re-prompting the user for an valid input.

	let playerCount = prompt("How many players will there be? (2-4 allowed)");
		if (isNaN(playerCount)) throw "Error 300: Not a Number." && alert("Error 300: Not a Number.");
		if (playerCount == null) throw "Error 201: Null answer." && alert("Error 201: Null answer.");
		if (playerCount > 4) throw "That is too many players!" && alert("That is too many players!");
		if (playerCount < 2) throw "You can't play by yourself!" && alert("You can't play by yourself!");
		else{
			console.log("Your player count is: " + playerCount);
		}

	let boardSpaces = prompt("How many board spaces will there be? (10-100 allowed)");
		if (isNaN(boardSpaces)) throw "Error 300: Not a Number." && alert("Error 300: Not a Number.");
		if (boardSpaces == null) throw "Error 201: Null answer." && alert("Error 201: Null answer.");
		if (boardSpaces > 100 ) throw "That is too many board spaces!" && alert("That is too many board spaces!");
		if (boardSpaces < 10) throw "That is too little board spaces!" && alert("That is too little board spaces!");
		else{
			console.log("You have set the amount of board spaces equal to: " + boardSpaces);
		}

	let upgradeAllowance = (Math.ceil(boardSpaces * 0.2)); // 20% of boardspaces will be an dice upgrade space
		console.log("There are currently: " + upgradeAllowance + " dice upgrade spaces being added.");
	let percentileAllowance = (Math.ceil(boardSpaces * 0.1)); // 10% of boardspaces will get a percentile roll
		console.log("There are currently: " + percentileAllowance + " percentile spaces being added.");

	let settingsData = [];
	settingsData.push(upgradeAllowance);    // UA index = 0
	settingsData.push(percentileAllowance); // PA index = 1
	settingsData.push(boardSpaces);         // BS index = 2
	settingsData.push(playerCount);         // PC index = 3
	return settingsData;					// ^ References for later
}

function userSettings(settingsData, x){

	playerCount = settingsData[4];
	if (x === true){ // creating player arrays and setting everyone's starting dice to a d4
		let diceCounter = 0;

			if (playerCount == 2){
				playerPosition1 = 0;
				playerPosition2 = 0;
				player1 = [playerPosition1, diceCounter];
				player2 = [playerPosition2, diceCounter];
				playerPackage = [player1, player2];
				x = false;
				return playerPackage;
			}
			else if (playerCount = 3){
				playerPosition1 = 0;
				playerPosition2 = 0;
				playerPosition3 = 0;
				player1 = [playerPosition1, diceCounter];
				player2 = [playerPosition2, diceCounter];
				player3 = [playerPosition3, diceCounter];
				playerPackage = [player1, player2, player3];
				x = false;
				return playerPackage;
			}
			else (playerCount = 4){
				let playerPosition1 = 0;
				let playerPosition2 = 0;
				let playerPosition3 = 0;
				let playerPosition4 = 0;
				let player1 = [playerPosition1, diceCounter];
				let player2 = [playerPosition2, diceCounter];
				let player3 = [playerPosition3, diceCounter];
				let player4 = [playerPosition4, diceCounter];
				let playerPackage = [player1, player2, player3, player4];
				x = false;
				return playerPackage;
			}
			else {
			console.log("Error: Player count exeption. Check 'playerCount' and try again.");
			alert ("Error: Player count exeption. Check 'playerCount' and try again.")
		}
	}
	else 
}

function boardGenerator(settingsData, playerPackage){

	upgradeAllowance = settingsData[0];
	percentileAllowance = settingsData[1];
	boardSpaces = settingsData[2];

	let finalSpace = boardspaces;

	while (upgradeAllowance > 0){
		let uaPack.push(Math.floor((Math.random()* boardSpaces) + 1));
		upgradeAllowance--;

	while (percentileAllowance > 0){
		let paPack.push(Math.floor((Math.random()* boardSpaces) + 1));
		percentileAllowance--;
	}

	let boardPackage.push(uaPack);
	boardPackage.push(paPack);
	boardPackage.push(finalSpace);
	return boardPackage;
}

function diceGame(diceCounter, playerCount, diceRoll, playerPackage, boardPackage){

}

function rollHandler(diceCounter){

	let diceRoll = Number;

	if (diceCounter == 0){
		while (x > 4){
			x = Math.floor((Math.random()* 10) + 1);
		}
	}
	else if (diceCounter == 1){
		while (x > 6){
			x = Math.floor((Math.random()* 10) + 1);	
		}
	}
	else if (diceCounter == 2){
		while (x > 8){
			x = Math.floor((Math.random()* 10) + 1);
		}
	}
	else if (diceCounter == 3){
		while (x > 12){
			x = Math.floor((Math.random()* 20) + 1);
		}
	}
	else (diceCounter == 4){
		while (x > 20){
			x = Math.floor((Math.random()* 20) + 1);
		}
	}
	return diceRoll;
}

function upgradeHandler(diceCounter){

	let diceCounter = Number;

	if (diceCounter == 0){
		diceCounter = 1;
		return diceCounter;
	}
	else if (diceCounter == 1){
		diceCounter = 2;
		return diceCounter;
	}
	else if (diceCounter == 2){
		diceCounter = 3;
		return diceCounter;
	}
	else (diceCounter == 3){
		diceCounter = 4;
		return diceCounter;
	}
}

function playerMovement(playerCount, playerPackage){


}

function upgradeHelper{

}