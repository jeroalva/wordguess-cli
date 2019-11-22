var letter = require("./Letter");

var word = function(){
    this.new = [];
    this.showWord = function(){
        this.new.forEach(function(element){
            var newLetter = new letter(element);
            newLetter.display()
        })
    
    }
}