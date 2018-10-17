//variablen initialiseren
var promptAnswer = '';
var promptText = '';
var correctAnswer = '';
var wrongAnswer = '';
var correctResult = '';
var wrongResult = '';
var score = 0;
var questionNumber = 0;

//functie
function Question(question) {
	questionNumber = question;
	// aan de hand van wat de question variable is worden er verschillende vragen en antwoorden gemaakt
	if (questionNumber == 1) {
		promptText = 'Youre in the boss room. Its a giant angel with 5 wings! Your party is at full health and you got the first move, what will you do? Type "attack" to attack or type "run" to run away';
		correctAnswer = 'attack';
		correctResult = 'You attack and the boss takes 10% of its health in damage. Nice job!';
		wrongAnswer = 'run';
		wrongResult = 'For some reason you decide to run away but it turns out you cant! The boss kills you when you try to open the backdoor.';
	} else if (questionNumber == 2) {
		promptText = 'The boss attacks your support, she is down to 60% health. Your assassin is pretty weak on her own. Type "heal" to have the support heal herself or type "support" to continue supporting your assassin';
		correctAnswer = 'support';
		correctResult = 'You continue supporting your assassin and she strikes a critical hit! nice. The boss takes another 15% damage and now is at 75%';
		wrongAnswer = 'heal';
		wrongResult = 'You try to heal your support back to full health when she could still survive another hit from the boss. Your assassin dies from the boss striking a critical hit';
	} else if (questionNumber == 3) {
		promptText = 'The boss attacks your support again and she is now down to 20%. You have to use a potion now. Type "invulnerability" to give your support 2 turns without taking damage or type "health" to give your support full health.';
		correctAnswer = 'health';
		correctResult = 'After your support is given full health the boss turns to your tank who just used a Taunt spell, the boss now has 65% health.';
		wrongAnswer = 'invulnerability';
		wrongResult = 'The invulnerability potion did not really do much since after 2 turns the boss still kills your support.';
	} else if (questionNumber == 4) {
		promptText = 'Good thing your tank has good items, he will last for a while. You wonder what spell you will now use. Type "darkness" to fire a darkness spell or type "holy" to fire a holy spell';
		correctAnswer = 'darkness';
		correctResult = 'You guessed it! Angels are weak to darkness so you deal another 15% damage! the boss is now down to 50%';
		wrongAnswer = 'holy';
		wrongResult = 'Why attack an angel with its own holy element? Since you now wasted a turn you cant kill the boss in time and you die.';
	} else if (questionNumber == 5) {
		promptText = 'At 50% health the boss starts to get mad and is channeling to use its special ability. Type "shield" to have your tank create a shield where you can try to hide behind or type "dodge" to try and dodge the attack.';
		correctAnswer = 'shield';
		correctResult = 'Good call, the angels attack turned out to be a giant holy explosion. Good thing you were shielded from the blast. You deal another 10% damage';
		wrongAnswer = 'dodge';
		wrongResult = 'Turns out that special ability was a gaint holy explosion. Of course you cant dodge that.';
	} else if (questionNumber == 6) {
		promptText = 'At 40% health the boss is almost dead but you need to make it quick before it withers down your team. Type "boost" to have your support boost the damage of your team or type "blast" to all attack at the same time';
		correctAnswer = 'boost';
		correctResult = 'Since your tank and support are not good at dealing damage, it was a good idea to have the support boost the team. You manage to deal a whopping 20% damage!';
		wrongAnswer = 'blast';
		wrongResult = 'Dummy, trying to attack with your healer and tank obviously doesnt work, they dont deal enough damage! You all die because you didnt deal enough damage.';
	} else if (questionNumber == 7) {
		promptText = 'The boss now has only 20% health and triggers its final form, preparing for another large attack. Type "assassinate" to try and kill the boss at low health with your assassin or type "range" to fire a long-ranged blast from behind your tanks shield';
		correctAnswer = 'range';
		correctResult = 'Your team was almost dead and the shield protected you well. You only deal 5% damage, but you live! The boss is now down to only 15%';
		wrongAnswer = 'assassinate';
		wrongResult = 'Since your team was almost dead, you died before being able to damage the boss to the point where your assasin could finish it.';
	} else if (questionNumber == 8) {
		promptText = 'Only 15% to go. You are sure you can kill it in one more hit but your party is on the brink of defeat. Type "tank" for your tank to absorb the hit or type "charge" to charge in with your entire party.';
		correctAnswer = 'charge';
		correctResult = 'Since the boss is now low enough on health, your assassin managed to kill it in one hit. You win! Congratulations!';
		wrongAnswer = 'tank';
		wrongResult = 'Your tank was almost dead and couldnt take another hit. Without a tank you die.';
	}

	// hier wordt de vraag van de huidige Question gevraagt en wordt het antwoord vergeleken met de correcte antwoorden
	// als het antwoord afwijkt krijg je een alert en vraagt het programma opnieuw de vraag
	// als het antwoord goed is dan gaat het script naar de volgende vraag
	promptAnswer = prompt(promptText);
	if (promptAnswer == correctAnswer) {
		alert(correctResult);
		questionNumber += 1;
		Question(questionNumber);
	} else if (promptAnswer == wrongAnswer) {
		alert(wrongResult);
		gameOver();
	} else {
		alert('Either this is spelled wrong, or you didnt fill in anything. Please try again!')
		Question(questionNumber);
	}
}

function gameOver() {
	alert('Game over! Refresh the page to try again! :)');
}

function victory() {
	alert('You win! Refresh the page to play the game again and try to find all the endings.');
}

//game code
if (questionNumber == 0) {
	alert('You are an adventurer in a world full of monsters. Your party consists of 3 other friends who all picked you as their leader. you have a Healer, an Assasin, a Tank and a Mage (you!). It is your job to defeat the final boss and win! (without getting anyone killed ofcourse)');
	Question(1);
	if (questionNumber > 8) {
		victory();
	}
}