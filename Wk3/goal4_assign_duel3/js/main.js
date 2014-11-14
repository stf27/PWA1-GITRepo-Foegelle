/**
 * Shelby Foegelle
 * 11/14/14
 * Week 3 - The Duel #3
*/

// self-executing function
(function(){ // self-executing function

    var button = document.getElementById("fight_btn"); // variable to access the HTML button
    var playerOne_txt = document.getElementById("cuddles").querySelector("p"); // variable to access the HTML paragraph tag for player one text
    var playerTwo_txt = document.getElementById("toothy").querySelector("p"); // variable to access the HTML paragraph tag for player two text
    var round_txt = document.getElementById("round"); // variable to access the HTML header tag for the round text

    button.addEventListener("click", fight, false); // adds a listener for when the button is pressed
    console.log("FIGHT!!!"); // outputs "FIGHT!!!" to the console

    // Object that holds player one's information
    var playerOne = {
        name: "Cuddles", // player one name
        damage: 20, // player one damage
        health: 100 // player one health
    };
	
    // Object that holds player two's information
    var playerTwo = {
        name: "Toothy", // player two name
        damage: 20, // player two damage
        health: 100 // player two health
    };

    var playerInformation = [playerOne, playerTwo]; // array holding playerOne and playerTwo objects

    //initiate round
    var round = 1; // variable that keeps track of current round

    round_txt.innerHTML = "Click To Start Fight!"; // sets the default round information to the HTML
    playerOne_txt.innerHTML = playerInformation[0].name + ": " + playerInformation[0].health; // sets the default player one information to the HTML
    playerTwo_txt.innerHTML = playerInformation[1].name + ": " + playerInformation[1].health; // sets the default player two information to the HTML

    function fight(){ // Start of the fight function. This function calculates the damage each player deals in a turn.
        //random formula is - Math.floor(Math.random() * (max - min) + min);
        var minDamage1 = playerInformation[0].damage * .5; // variable that calculates the minimum damage player one can deal depending on their base damage
        var minDamage2 = playerInformation[1].damage * .5; // variable that calculates the minimum damage player two can deal depending on their base damage

        // Variable generates a random number between 0 (inclusive) and 1 (exclusive), multiplies that by half of the player's damage, and adds the players minimum damage back to that.
        // From there, floor is used to round the result down to the nearest whole number.
        var f1 = Math.floor(Math.random() * (playerInformation[0].damage - minDamage1) + minDamage1); // variable that calculates the damage player one does in the current round
        var f2 = Math.floor(Math.random() * (playerInformation[1].damage - minDamage2) + minDamage2); // variable that calculates the damage player two does in the current round

        //inflict damage
        playerInformation[1].health -= f1; // subtracts the damage done by player one in this round from player two's current health.
        playerInformation[0].health -= f2; // subtracts the damage done by player two in this round from player one's current health.

        console.log(playerInformation[0].name + ": " + playerInformation[0].health + " " + playerInformation[1].name + ": " + playerInformation[1].health); // outputs both player's current health for the round to the console

        //check for victor
        var result = winnerCheck(); // variable that stores whether or not a player has won yet using the function winnerCheck
        console.log(result); // outputs the variable result
        round_txt.innerHTML = "Round " + round + " Complete"; // updates the round number to the HTML

        if (result === "no winner") // checks if there is no current winner
        {
            round++; // increments the round variable
            playerOne_txt.innerHTML = playerInformation[0].name + ": " + playerInformation[0].health; // updates player one's health to the HTML
            playerTwo_txt.innerHTML = playerInformation[1].name + ": " + playerInformation[1].health; // updates player two's health to the HTML
        } else{ // if result is something besides "no winner" (there is a winner or a tie), alert the user
            playerOne_txt.innerHTML = result; // outputs the winner to the HTML (set in player one's field)
            playerTwo_txt.innerHTML = ""; // clears player two's field in the HTML to make the winner output clean
            playerOne_txt.style.padding = "0px 0px 0px 58%"; // updates the padding of player one div to center it
            playerTwo_txt.style.margin = "0px 0px 0px 0px"; // removes margin for player two to prevent overlap
            button.removeEventListener("click", fight, false); // removes the listener event to stop the user from being able to press the button when the fight is over
            document.querySelector(".buttonblue").innerHTML = "Done!!!"; // updates the button's text to say the fight is over
        } // closes the if else
    } // closes the fight() function

    function winnerCheck(){ // function that checks if there is a winner each round and returns whether there is or not
        var result = "no winner"; // variable declaring the default state of the match: that there is no winner yet
        if (playerInformation[0].health < 1 && playerInformation[1].health < 1) // checks if both player's health is 0 or less
        {
            result = "You Both Die!"; // if both player's health is 0 or less, change result to "You Both Die"
        } else if(playerInformation[0].health < 1){ // checks if player one's health is 0 or less
            result = playerInformation[1].name + " Wins!"; // sets result value to player two's name and that they win
        } else if(playerInformation[1].health < 1) { // checks if player two's health is 0 or less
            result = playerInformation[0].name + " Wins!"; // sets result value to player one's name and that they win
        } else if(round >= 10) { // checks if the fight has reached 10 round before there is a winner
            result = "Fight Over! No Winner!"; // outputs that the fight has reached the total number of rounds and that the fight is over
        } // closes the if else
       return result; // returns the value of result: if someone has won or not
    } // closes the winnerCheck() function

})(); // closes the self-executing function