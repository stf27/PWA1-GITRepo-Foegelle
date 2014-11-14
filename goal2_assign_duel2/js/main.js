/**
 * Shelby Foegelle
 * 11/14/14
 * Week 3 - The Duel #3
*/

// self-executing function
(function(){ // self-executing function

    console.log("FIGHT!!!"); // outputs "FIGHT!!!" to the console

    // Arrays holding each players Name, Damage, and Health (respectively). Index 0 = Name, Index 1 = Damage, Index 2 = Health
    //var playerOne = ["Cuddles", 21, 100]; // player one name, damage, and health
    //var playerTwo = ["Toothy", 20, 90]; // player two name, damage, and health

    // Object that holds player one's information
    var playerOne = {
        name: "Cuddles", // player one name
        damage: 20, // player one damage
        health: 120 // player one health
    };
    // Object that holds player two's information
    var playerTwo = {
        name: "Toothy", // player two name
        damage: 24, // player two damage
        health: 100 // player two health
    };

    var playerInformation = [playerOne, playerTwo]; // array holding playerOne and playerTwo objects

    //initiate round
    var round = 0; // variable that keeps track of current round

    function fight(){ // Start of the fight function. This function calculates the damage each player deals in a turn.
        alert(playerInformation[0].name + ": " + playerInformation[0].health + "  *START*  " + playerInformation[1].name + ": " + playerInformation[1].health); // alerts the user of the name and health of both players and that the fight is starting
        for (var i = 0; i < 10; i++) // for loop that calculates the damage done to each player every round. The loop ends after 10 rounds
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerInformation[0].damage * .5; // variable that calculates the minimum damage player one can deal depending on their base damage
            var minDamage2 = playerInformation[1].damage * .5; // variable that calculates the minimum damage player two can deal depending on their base damage

            // Variable generates a random number between 0 (inclusive) and 1 (exclusive), multiplies that by half of the player's damage, and adds the players minimum damage back to that.
            // From there, floor is used to round the result down to the nearest whole number.
            var f1 = Math.floor(Math.random() * (playerInformation[0].damage - minDamage1) + minDamage1); // variable that calculates the damage player one does in the current round
            var f2 = Math.floor(Math.random() * (playerInformation[1].damage - minDamage2) + minDamage2); // variable that calculates the damage player two does in the current round

            //inflict damage
            playerInformation[0].health -= f1; // subtracts the damage done by player one in this round from player one's current health. What? Why?
            playerInformation[1].health -= f2; // subtracts the damage done by player two in this round from player two's current health. What? Why?

            console.log(playerInformation[0].name + ": " + playerInformation[0].health + " " + playerInformation[1].name + ": " + playerInformation[1].health); // outputs both player's current health for the round to the console

            //check for victor
            var result = winnerCheck(); // variable that stores whether or not a player has won yet using the function winnerCheck
            console.log(result); // outputs the variable result
            if (result === "no winner") // checks if there is no current winner
            {
                round++; // increments the round variable
                alert(playerInformation[0].name + ": " + playerInformation[0].health + "  *ROUND " + round + " OVER" + "*  " + playerInformation[1].name + ": " + playerInformation[1].health); // alerts the user to each player's current health and the round they were in

            } else{ // if result is something besides "no winner" (there is a winner or a tie), alert the user
                alert(result); // alerts the user of the outcome of the fight
                break; // exits the program
            } // closes the if else

          } // closes the for loop
    } // closes the fight() function

    function winnerCheck(){ // function that checks if there is a winner each round and returns whether there is or not
        var result = "no winner"; // variable declaring the default state of the match: that there is no winner yet
        if (playerInformation[0].health < 1 && playerInformation[1].health < 1) // checks if both player's health is 0 or less
        {
            result = "You Both Die"; // if both player's health is 0 or less, change result to "You Both Die"
        } else if(playerInformation[0].health < 1){ // checks if player one's health is 0 or less
            result = playerInformation[1].name + " WINS!!!"; // sets result value to player two's name and that they win
        } else if (playerInformation[1].health < 1) { // checks if player two's health is 0 or less
            result = playerInformation[0].name + " WINS!!!"; // sets result value to player one's name and that they win
        } // closes the if else
       return result; // returns the value of result: if someone has won or not
    } // closes the winnerCheck() function

    /*******  The program gets started below *******/
    fight(); // calls the function fight() to start simulating the fight

})(); // closes the self-executing function