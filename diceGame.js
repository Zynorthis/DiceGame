// ~~~ Created By Jacob Taylor ~~~
"using strict";

function gameStart(){

	// begins the game loop
		let x = true;
		let y = true;
		let settingsData = gameSettings();
		let playerPackage = userSettings(settingsData, x);
		boardGenerator(settingsData, playerPackage);
		diceGame(playerPackage, boardPackage);
		return x;
}

function gameSettings(){ // All of these error catches I would like to change later to allow the script to still exicute
						 			 // by re-prompting the user for an valid input.
	let playerCount = Number;
	let boardSpaces = Number;

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
	settingsData.push(upgradeAllowance, percentileAllowance, boardSpaces, playerCount);
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
		let playerPackage = [playerPosition, diceCounter];
			x = false;
			return playerPackage;
}

function boardGenerator(settingsData, playerPackage){

	upgradeAllowance = settingsData[0];
	percentileAllowance = settingsData[1];
	boardSpaces = settingsData[2];

	let finalSpace = boardspaces;

	while (upgradeAllowance > 0){
		uaPack.push(Math.floor(Math.random() * boardSpaces) + 1);
		upgradeAllowance--;
	}

	while (percentileAllowance > 0){
		paPack.push(Math.floor(Math.random() * boardSpaces) + 1);
		percentileAllowance--;
	}

	boardPackage.push(uaPack, paPack, finalSpace, boardSpaces);
	return boardPackage; // uaP = 0, paP = 1, fs = 2, bs = 3
}

function diceGame(playerPackage, boardPackage, b, y){

	// Main function handling most of the actual dice game (after settings have been established)

	if (b === true){
		let player1 = player.map(playerMapper); // players being copied into new arrays
		let player2 = player.map(playerMapper); // new player arrays are handled just
		let player3 = player.map(playerMapper); // inside of this function
		let player4 = player.map(playerMapper);
		let b = false;
		return b;
	}

	for (playerActions; playerActions <= playerCount; playerActions++){
		turnHandler(playerActions, playerCount);
		if (y === false){
			player1[0] = player1[0] + rollConditional(diceRoll);
			if (player1[0] = finalSpace){
				console.log ("Player 1 wins!");
			}
			else if (player1[0] = upgradeSpace){
				player1[1] = upgradeHandler(diceCounter);
			}
			else if (player1[0] = percentSpace){
				player1[0] = rollConditional(percentRoll);
			}
		}
	}
}

function rollConditional(diceCounter){
	let a = diceCounter;
	let diceRoll = rollHandler();

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

	if (percentRoll === true){
			let a = Math.floor(boardSpaces * (diceRoll * 0.01)); // converts dice roll into a decimal then multiplys it by the total boardSpace and returns the value
			return a; // this will be the new space the player will be moved to.
	}
}

function rollHandler(){

	let diceRoll = Number;
	let diceRoll = Math.floor((Math.random()* 100) + 1); // returns a number 1 out of 100
	return diceRoll;
}

function upgradeHandler(diceCounter){

	diceCounter += diceCounter;
		return diceCounter;
	}
}

// playerPackage[0] = playerMovement(playerPackage[0])
// playerPackage[1] = playerMovement(playerPackage[1])

function playerMovement(player, diceRoll){
	player[0] += diceRoll;
	return player;
}

	//let a = playerPackage[0][0]; // "a" is representitive of current position
	//a = (a + diceRoll); // moving player forward by whatever the dice roll was equal to
	//playerPackage.unshift([0][0]);
	//playerPackage.shift(a); // updating new postion
	//return playerPackage;


function turnHandler(playerActions, playerCount){

	while (playerActions < playerCount){
		let y = false;
		return y;
	}
	y = true;
	return y;
}

function playerMapper(value, index, array){
	return player;
}