// ~~~ Created By Jacob Taylor ~~~
"using strict";

function gameStart(){

	// begins the game loop
		let x = true;
		let y = true;
		let settingsData = gameSettings();
		let playerPackage = userSettings(settingsData, x);
		let boardPackage = boardGenerator(settingsData, playerPackage);
		console.log("Setup complete.") && alert("Setup complete.")
		diceGame(playerPackage, boardPackage, settingsData, y);
		return x;
}

function gameSettings(){ // All of these error catches I would like to change later to allow the script to still exicute
						 // by re-prompting the user for an valid input.

	let playerCount = Number;
	let boardSpaces = Number;
	let b = true;

	playerCount = prompt("How many players will there be? (2-4 allowed)");
		if (isNaN(playerCount)) throw "Error 300: Not a Number." && alert("Error 300: Not a Number.");
		if (playerCount == null) throw "Error 201: Null answer." && alert("Error 201: Null answer.");
		if (playerCount > 4) throw "That is too many players!" && alert("That is too many players!");
		if (playerCount < 2) throw "You can't play by yourself!" && alert("You can't play by yourself!");
		else{
			console.log("Your player count is: " + playerCount);
		}

	boardSpaces = prompt("How many board spaces will there be? (10-100 allowed)");
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
	settingsData.push(upgradeAllowance, percentileAllowance, boardSpaces, playerCount, b);
	return settingsData; // ua = 0, pa = 1, bs = 2, pc = 3
}

function userSettings(settingsData, x, playerCount){

	playerCount = settingsData[3];
	if (playerCount > 4 || playerCount < 2){
		console.log("Error: Player count exeption. Check 'playerCount' and try again.");
		alert ("Error: Player count exeption. Check 'playerCount' and try again.")
	}

	if (x === true){ // creating player arrays and setting everyone's starting dice to a d4
		let diceCounter = 0;
		let playerPosition = 0;
		let playerPackage = [playerPosition, diceCounter, playerCount];
			x = false;
			return playerPackage;
	}
}

function boardGenerator(settingsData, playerPackage){

	upgradeAllowance = settingsData[0];
	percentileAllowance = settingsData[1];
	boardSpaces = settingsData[2];

	let finalSpace = boardSpaces;
	let paPack = [];
	let uaPack = [];
	let boardPackage = [];

	while (upgradeAllowance > 0){
		uaPack.push(Math.floor(Math.random() * boardSpaces) + 1);
		upgradeAllowance--;
	}

	while (percentileAllowance > 0){
		paPack.push(Math.floor(Math.random() * boardSpaces) + 1);
		percentileAllowance--;
	}

	boardPackage.push(uaPack, paPack, finalSpace);
	return boardPackage; // uaP = 0, paP = 1, fs = 2
}

function diceGame(playerPackage, boardPackage, settingsData, y){ 
// Main function handling most of the actual dice game (after settings have been established)

	let playerCount = playerPackage[2];
	let finalSpace = boardPackage[2];
	let upPack = [];
	let perPack = [];
	let player = [];
		let player1 = [];
		let player2 = [];
		let player3 = [];
		let player4 = [];
	upPack = boardPackage[0];
	perPack = boardPackage[1];

	gameFinalSetup(player, playerPackage, boardPackage, settingsData);

	for (let playerRotation = 1; playerRotation <= playerCount; playerRotation++){
		playerRotate(playerRotation, player1, player2, player3, player4);
		// diceGame(playerPackage, boardPackage, settingsData, y);
	}
}

function gameFinalSetup(player, playerPackage, boardPackage, settingsData){
	let b = settingsData[4];
	if (b === true){
		settingsData.pop();
		player = playerPackage.map(playerMapper);
		player1 = player.map(playerMapper); // players being copied into new arrays 
		player2 = player.map(playerMapper); // new player arrays are scoped to just
		player3 = player.map(playerMapper); // be inside of this function
		player4 = player.map(playerMapper);
		let b = false;
	}
}

function playerRotate(playerRotation, player1, player2, player3, player4, settingsData, y){
	let i =[];
	if (playerRotation = 1){
		let i = player1.map(playerMapper);
		playerManipulation(i, settingsData, y);
	}
	else if (playerRotation = 2){
		let i = player2.map(playerMapper);
		playerManipulation(i, settingsData, y);
	}
	else if (playerRotation = 3){
		let i = player3.map(playerMapper);
		playerManipulation(i, settingsData, y);
	}
	else if (playerRotation = 4){
		let i =  player4.map(playerMapper);
		playerManipulation(i, settingsData, y);
	}
}

function playerManipulation(player, settingsData, y, a){
	// turnHandler(playerRotation, playerCount);
	let diceCounter = player[1];

	if (y === true){
		player[0] = player[0] + rollCondition(diceCounter);

		if (player[0] >= finalSpace){
			console.log(player + " wins!");
		}
		else if (player[0] = upgradeSpace){
			player[1] = upgradeHandler(diceCounter);
		}
		else if (player[0] = percentSpace){
			player[0] = rollCondition(percentileCheck);	
		}
	}
}

function rollCondition(diceCounter, percentileCheck){
	diceRoll = rollHandler();

	while (diceCounter == 0 || diceRoll > 4){
		rollHandler();
	}
	while (diceCounter == 1 || diceRoll > 6){
		rollHandler();
	}
	while (diceCounter == 2 || diceRoll > 8){
		rollHandler();
	}
	while (diceCounter == 3 || diceRoll > 12){
		rollHandler();
	}
	while (diceCounter == 4 || diceRoll > 20){
		rollHandler();
	}

	if (percentileCheck === true){
			let a = Math.floor(boardSpaces * (diceRoll * 0.01)); 
					  // converts dice roll into a decimal then multiplys it by the total boardSpace and returns the value
			return a; // this will be the new space the player will be moved to.
	}
}

function rollHandler(){

	let diceRoll = Number;
	diceRoll = Math.floor((Math.random()* 100) + 1); // returns a number 1 out of 100
	return diceRoll;
}

function upgradeHandler(diceCounter){

	let diceCounter = Number;
	diceCounter += diceCounter;
		return diceCounter;

}

function playerMapper(value, index, array){
	value * 1
	return value;
}