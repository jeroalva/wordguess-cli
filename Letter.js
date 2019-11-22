var letter = function(character){
    this.character = character;
    this.guessed = false;
    this.display = function(){
        if(this.guessed){
            return  this.character;
        }
        else{
            return " _ "
        }
    }
    this.guess = function(char){
        if(char.toLowerCase() === this.character.toLowerCase()){
            this.guessed = true;
        }
    }
};

module.exports = letter;