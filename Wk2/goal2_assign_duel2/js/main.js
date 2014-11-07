/**
 * Shelby Foegelle
 * 11/7/14
 * Week 2 - Develop Duel #2
*/

// self-executing function
(function(){ // self-executing function

    console.log("FIGHT!!!"); // outputs "FIGHT!!!" to the console

    // Arrays holding each players Name, Damage, and Health (respectively). Index 0 = Name, Index 1 = Damage, Index 2 = Health
    var playerOne = ["Cuddles", 20, 100]; // player one name, damage, and health
    var playerTwo = ["Toothy", 20, 100]; // player two name, damage, and health

    //initiate round
    var round = 0; // variable that keeps track of current round

    function fight(){ // Start of the fight function. This function calculates the damage each player deals in a turn.
        alert(playerOne[0] + ": " + playerOne[2] + "  *START*  " + playerTwo[0] + ": " + playerTwo[2]); // alerts the user of the name and health of both players and that the fight is starting
        for (var i = 0; i < 10; i++) // for loop that calculates the damage done to each player every round. The loop ends after 10 rounds
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5; // variable that calculates the minimum damage player one can deal depending on their base damage
            var minDamage2 = playerTwo[1] * .5; // variable that calculates the minimum damage player two can deal depending on their base damage

            // Variable generates a random number between 0 (inclusive) and 1 (exclusive), multiplies that by half of the player's damage, and adds the players minimum damage back to that.
            // From there, floor is used to round the result down to the nearest whole number.
            var f1 = Math.floor(Math.random() * (playerOne[1] - minDamage1) + minDamage1); // variable that calculates the damage player one does in the current round
            var f2 = Math.floor(Math.random() * (playerTwo[1] - minDamage2) + minDamage2); // variable that calculates the damage player two does in the current round

            //inflict damage
            playerOne[2]-=f1; // subtracts the damage done by player one in this round from player one's current health. What? Why?
            playerTwo[2]-=f2; // subtracts the damage done by player two in this round from player two's current health. What? Why?

            console.log(playerOne[0] + ": " + playerOne[2] + " " + playerTwo[0] + ": " + playerTwo[2]); // outputs both player's current health for the round to the console

            //check for victor
            var result = winnerCheck(); // variable that stores whether or not a player has won yet using the function winnerCheck
            console.log(result); // outputs the variable result
            if (result === "no winner") // checks if there is no current winner
            {
                round++; // increments the round variable
                alert(playerOne[0] + ": " + playerOne[2] + "  *ROUND " + round + " OVER" + "*  " + playerTwo[0] + ": " + playerTwo[2]); // alerts the user to each player's current health and the round they were in

            } else{ // if result is something besides "no winner" (there is a winner or a tie), alert the user
                alert(result); // alerts the user of the outcome of the fight
                break; // exits the program
            } // closes the if else

          } // closes the for loop
    } // closes the fight() function

    function winnerCheck(){ // function that checks if there is a winner each round and returns whether there is or not
        var result = "no winner"; // variable declaring the default state of the match: that there is no winner yet
        if (playerOne[2] < 1 && playerTwo[2] < 1) // checks if both player's health is 0 or less
        {
            result = "You Both Die"; // if both player's health is 0 or less, change result to "You Both Die"
        } else if(playerOne[2] < 1){ // checks if player one's health is 0 or less
            result = playerTwo[0] + " WINS!!!"; // sets result value to player two's name and that they win
        } else if (playerTwo[2] < 1) // checks if player two's health is 0 or less
        {
            result = playerOne[0] + " WINS!!!"; // sets result value to player one's name and that they win
        } // closes the if else
       return result; // returns the value of result: if someone has won or not
    } // closes the winnerCheck() function

    /*******  The program gets started below *******/
    fight(); // calls the function fight() to start simulating the fight

})(); // closes the self-executing function