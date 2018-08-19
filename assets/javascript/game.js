//array of movie options
var potentialWords = ["Inception", "Primer", "Surrogates", "Aliens", "Serenity", "Signs", "Starman", "Spaceballs", "Gravity", "Arrival", "Akira", "Coma", "Innerspace", "Elysium", "Looper", "Tron", "Dune", "Avatar", "Interstellar", "Prometheus", "Skyline", "Brazil", "Westworld", "Sunshine", "Cloverfield", "Knowing", "Zathura", "Existenz", "Predator", "Frequency"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//global variables
var wins = 0;
var Counter = 12;
var guessTries = [];
var dash = "-";
var gamePlaying = true;

//when page loads
window.onload = function () {
    //random movie is picked from array
    var movie = potentialWords[Math.floor(Math.random() * potentialWords.length)];
    movie = movie.toUpperCase();
    var movieLetters = movie.split("");
    console.log(movieLetters);

    //function for picking random movie and joining the letters as a string
    function randomMovie() {
        movie = potentialWords[Math.floor(Math.random() * potentialWords.length)];
        movie = movie.toUpperCase();
        movieLetters = movie.split("");
        //return movieLetters;
        randomWord.textContent = movieLetters.join("");
        console.log(movieLetters);
    };

    //replaces movieLetters with the same number of dashes
    function dashWord() {
        var dash = "–";
        var dashes = dash.repeat(movieLetters.length);
        randomWord.textContent = dashes;
        return dashes.split("");
    };

    //sets dashWord() function equal to dashes variable
    dashes = dashWord();
    //shows the number of letters in the random movie title
    letterNumber.textContent = movieLetters.length;

    //when a key is typed
    document.onkeyup = function (event) {

        //userGuess equals the key pressed
        var userGuess = event.key.toUpperCase();

        //replaces dashes with letters as they are typed
        function replaceLetters(movieLetters) {
            for (var i = 0; i < movieLetters.length; i++) {
                if (movieLetters[i] === userGuess) {
                    dashes.splice(i, 1, userGuess);
                    console.log(dashes);
                    randomWord.textContent = dashes.join("");

                }
            };
        };

        //calls replaceLetters function
        replaceLetters(movieLetters);

        //reduces Counter by one every time you press a letter (only a letter) not in movieLetters and not already guessed
        if (Counter > 0 && !movieLetters.includes(userGuess) && !guessTries.includes(userGuess) && letters.includes(userGuess.toLowerCase())) {
            Counter--;
            guessCounter.textContent = Counter;
            //when Counter reaches 0, page reloads, resetting everything
        } else if (Counter === 0) {
            //resets movieLetters length to 0
            movieLetters.length = 0;
            //chooses different random movie and replaces letters with dashes
            randomMovie();
            dashes = dashWord();
            //resets Counter to 12, which shows in the HTML
            Counter = 12;
            guessCounter.textContent = Counter;
            //changes number of letters according to the new random movie title
            letterNumber.textContent = movieLetters.length;
            //empties guesses list and gets rid of afterWin message
            guesses.textContent = "";
            guessTries.length = 0;
        };

        //This function adds each key pressed to the guessTries array, as long as it hasn't been pressed already
        function guessList() {
            if (!guessTries.includes(userGuess) && letters.includes(userGuess.toLowerCase())) {
                guessTries.push(userGuess);
            };
            var printThis = "";
            for (var i = 0; i < guessTries.length; i++) {
                printThis += guessTries[i] + ", ";
            }
            return printThis;
        };

        //inserts the result of the above function into the HTML for list of guesses made
        document.querySelector("#guesses").innerHTML = guessList();

        //if game is being played
        if (gamePlaying) {
            //if movieLetters and dashes have all the same letters, wins increases by one, which shows in HTML
            if (movieLetters.toString() === dashes.toString()) {
                wins++;
                document.querySelector("#wins").innerHTML = wins;
                //adds text to afterWin in HTML
                afterWin.textContent = "Good job. Hit any key to play again.";
                //replaces #poster with the right movie poster from images
                document.querySelector("#poster").innerHTML = '<img src="assets/images/' + movieLetters.join("").toLowerCase() + '.jpg" height="300px" width="225px">';
                //game is done being played
                gamePlaying = false;
                //triggers ship flight across screen
                var shipMove = document.querySelector(".ship1");
                shipMove.style.animationName = "movement1";
            }
            //if game is done being played
        } else {
            //resets movieLetters length to 0
            movieLetters.length = 0;
            //chooses different random movie and replaces letters with dashes
            randomMovie();
            dashes = dashWord();
            //resets Counter to 12, which shows in the HTML
            Counter = 12;
            guessCounter.textContent = Counter;
            //sets game back to being played
            gamePlaying = true;
            //changes number of letters according to the new random movie title
            letterNumber.textContent = movieLetters.length;
            //empties guesses list and gets rid of afterWin message
            guesses.textContent = "";
            guessTries.length = 0;
            afterWin.textContent = "";
            //sets #poster back to default image
            document.querySelector("#poster").innerHTML = '<img src="assets/images/questionmark.jpg" height="300px" width="225px">';
            //resets flying ship so it will initiate after the next win
            var shipMove = document.querySelector(".ship1");
            shipMove.style.animationName = "noFly";
        }
    };
};


