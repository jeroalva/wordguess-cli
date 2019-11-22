var letter = require("./Letter");

var word = function(wordToGuess){
    this.new = [];
    this.populateNew = function(){
        for(i=0;i<wordToGuess.length;i++){
            // console.log(wordToGuess[i])
            this.new.push(new letter(wordToGuess[i]));
        }
    }
    this.showWord = function(){
        var parsedWord = "";
        this.new.forEach(function(element){
            parsedWord = parsedWord + element.display()
        })
        return parsedWord;
    };
    this.guessOnWord = function(inputChar){
        this.new.forEach(function(element){
            element.guess(inputChar);
        })
    }
}

module.exports = word;