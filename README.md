# Word-Guess-Game

### Overview

This README file is to explain my Word-Guess-Game assignment, which includes index.html, style.css and reset.css in the css folder, game.js in the javascript folder, and a collection of images in the images folder.

The game.js file contains the JavaScript that allows the Hangman game in index.html to function, including the list of one-word sci-fi movies to be inserted, the functions to select one at random and replace its letters with dashes, and the conditional statements for what happens when.

### Gameplay

1.  When the game is open, simply type a letter on the keyboard. If the random movie's name contains that letter, it will replace the corresponding dash with the letter. If the movie's name does not contain the letter, it will reduce the guess counter by one. The key will be added to the guess list regardless if it is right or wrong.

2. If the guess counter reaches 0 without completing the movie name, the page reloads and resets everything.

3. When the movie's letters are all filled in, the wins counter goes up, the Enterprise flies across the screen (courtesy of a CSS animation triggered by JavaScript), a "Good job" message appears and says to click any key to play again, and the question mark image is replaced by a poster for the random movie you completed.

4. When a key is pressed after a win, a new random movie is selected, with its length displayed after the dashes. The question mark image returns, the "Good job" message disappears, the guess counter resets to 12, and the list of guessed letters is emptied. You're now free to play again!

