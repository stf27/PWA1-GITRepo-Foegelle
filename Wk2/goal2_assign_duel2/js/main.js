/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13
 * Assignment 1
 * Part 1/3 of series
 *
 * Shelby Foegelle
 * 11/7/14
 * Week 2 - Develop Duel #2
*/

// self-executing function
(function(){ // self-executing function

    console.log("FIGHT!!!"); // outputs "FIGHT!!!" to the console

    //player name
    var playerOneName = "Cuddles"; // variable declaring player one name
    var playerTwoName = "Toothy"; // variable declaring player two name

    //player damage
    var player1Damage = 20; // variable declaring player one damage
    var player2Damage = 20; // variable declaring player two damage

    //player health
    var playerOneHealth = 100; // variable declaring player one starting health
    var playerTwoHealth = 100; // variable declaring player two starting health

    //initiate round
    var round=0; // variable that keeps track of current round

    function fight(){ // Start of the fight function. This function calculates the damage each player deals in a turn.
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); // alerts the user of the name and health of both players and that the fight is starting
        for (var i = 0; i < 10; i++) // for loop that calculates the damage done to each player every round. The loop ends after 10 rounds
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; // variable that calculates the minimum damage player one can deal depending on their base damage
            var minDamage2 = player2Damage * .5; // variable that calculates the minimum damage player two can deal depending on their base damage

            // Variable generates a random number between 0 (inclusive) and 1 (exclusive), multiplies that by half of the player's damage, and adds the players minimum damage back to that.
            // From there, floor is used to round the result down to the nearest whole number.
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); // variable that calculates the damage player one does in the current round
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); // variable that calculates the damage player two does in the current round

            //inflict damage
            playerOneHealth-=f1; // subtracts the damage done by player one in this round from player one's current health. What? Why?
            playerTwoHealth-=f2; // subtracts the damage done by player two in this round from player two's current health. What? Why?

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); // outputs both player's current health for the round to the console

            //check for victor
            var result = winnerCheck(); // variable that stores whether or not a player has won yet using the function winnerCheck
            console.log(result); // outputs the variable result
            if (result==="no winner") // checks if there is no current winner
            {
                round++; // increments the round variable
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); // alerts the user to each player's current health and the round they were in

            } else{ // if result is something besides "no winner" (there is a winner or a tie), alert the user
                alert(result); // alerts the user of the outcome of the fight
                break; // exits the program
            }; // closes the if else

          }; // closes the for loop
    }; // closes the fight() function

    function winnerCheck(){ // function that checks if there is a winner each round and returns whether there is or not
        var result="no winner"; // variable declaring the default state of the match: that there is no winner yet
        if (playerOneHealth<1 && playerTwoHealth<1) // checks if both player's health is 0 or less
        {
            result = "You Both Die"; // if both player's health is 0 or less, change result to "You Both Die"
        } else if(playerOneHealth<1){ // checks if player one's health is 0 or less
            result =playerTwoName+" WINS!!!"; // sets result value to player two's name and that they win
        } else if (playerTwoHealth<1) // checks if player two's health is 0 or less
        {
            result = playerOneName+" WINS!!!"; // sets result value to player one's name and that they win
        }; // closes the if else
       return result; // returns the value of result: if someone has won or not
    }; // closes the winnerCheck() function

    /*******  The program gets started below *******/
    fight(); // calls the function fight() to start simulating the fight

})(); // closes the self-executing function