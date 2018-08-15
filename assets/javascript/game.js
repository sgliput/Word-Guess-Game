
        var potentialWords = ["Inception", "Primer", "Surrogates", "Aliens", "Serenity", "Signs", "Starman", "Spaceballs", "Gravity", "Arrival", "Akira", "Coma", "Innerspace", "Elysium", "Looper", "Avatar", "Interstellar", "Prometheus", "Skyline", "Cloverfield", "Knowing", "Zathura", "Existenz", "Predator", "Frequency"];
        var wins = 0;
        var Counter = 12;
        var guessTries = [];
        var dash = "-";
        var gamePlaying = true;


        window.onload = function () {
            var movie = potentialWords[Math.floor(Math.random() * potentialWords.length)];
            movie = movie.toUpperCase();
            var movieLetters = movie.split("");
            console.log(movieLetters);
            function randomMovie() {
                movie = potentialWords[Math.floor(Math.random() * potentialWords.length)];
                movie = movie.toUpperCase();
                movieLetters = movie.split("");
                //return movieLetters;
                randomWord.textContent = movieLetters.join("");
                console.log(movieLetters);
            };

            function dashWord() {
                var dash = "-";
                var dashes = dash.repeat(movieLetters.length);
                //var removedLetters = movieLetters.splice(0, movieLetters.length, dashes);
                randomWord.textContent = dashes;
                return dashes.split("");
            };
            //randomWord.textContent = movieLetters;
            movieLetters.forEach(dashWord);
            //console.log("Removed: " + removedLetters);
            dashes = dashWord();



            document.onkeyup = function (event) {


                //userGuess equals the key pressed and appears in HTML
                var userGuess = event.key.toUpperCase();


                //This function adds each key pressed to the guessTries array
                function guessList() {
                    guessTries.push(userGuess);
                    var printThis = "";
                    for (var i = 0; i < guessTries.length; i++) {
                        printThis += guessTries[i] + ", ";
                    }
                    return printThis;
                };

                //inserts the result of the above function into the HTML for list of guesses made
                document.querySelector("#guesses").innerHTML = guessList();




                function replaceLetters(movieLetters) {
                    for (var i = 0; i < movieLetters.length; i++) {
                        //var index = movieLetters.indexOf(userGuess);
                        if (movieLetters[i] === userGuess) {
                            dashes.splice(i, 1, userGuess);
                            console.log(dashes);
                            randomWord.textContent = dashes.join("");

                        }
                    };
                };

                replaceLetters(movieLetters);
                if (Counter > 0) {
                    Counter--;
                    guessCounter.textContent = Counter;
                } else if (Counter === 0) {
                    location.reload();
                };

                if (gamePlaying) {
                    if (movieLetters.toString() === dashes.toString()) {
                        wins++;
                        document.querySelector("#wins").innerHTML = wins;
                        afterWin.textContent = "Good job. Hit any key to play again.";
                        document.querySelector("#poster").innerHTML = '<img src="assets/images/' + movieLetters.join("").toLowerCase() + '.jpg" height="300px" width="225px">';
                        gamePlaying = false;
                        //document.body.addEventListener('keypress', randomMovie());
                        //dashWord();
                    }
                } else {
                    movieLetters.length = 0;
                    
                    randomMovie();
                    dashes = dashWord();
                    Counter = 12;
                    guessCounter.textContent = Counter;
                    gamePlaying = true;
                    guesses.textContent = "";
                    guessTries.length = 0;
                    afterWin.textContent = "";
                    document.querySelector("#poster").innerHTML = '<img src="assets/images/questionmark.jpg" height="300px" width="225px">';
                }
            };
        };


