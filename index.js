var word=require("./word");
var inquirer = require("inquirer");
var animals=["Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison","Boar","Buffalo","Butterfly","Camel","Capybara","Caribou","Cassowary","Cat","Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Clam","Cobra","Cockroach","Cod","Cormorant","Coyote","Crab","Crane","Crocodile","Crow","Curlew","Deer","Dinosaur","Dog","Dogfish","Dolphin","Dotterel","Dove","Dragonfly","Duck","Dugong","Dunlin","Eagle","Echidna","Eel","Eland","Elephant","Elk","Emu","Falcon","Ferret","Finch","Fish","Flamingo","Fly","Fox","Frog","Gaur","Gazelle","Gerbil","Giraffe","Gnat","Gnu","Goat","Goldfinch","Goldfish","Goose","Gorilla","Goshawk","Grasshopper","Grouse","Guanaco","Gull","Hamster","Hare","Hawk","Hedgehog","Heron","Herring","Hippopotamus","Hornet","Horse","Human","Hummingbird","Hyena","Ibex","Ibis","Jackal","Jaguar","Jay","Jellyfish","Kangaroo","Kingfisher","Koala","Kookabura","Kouprey","Kudu","Lapwing","Lark","Lemur","Leopard","Lion","Llama","Lobster","Locust","Loris","Louse","Lyrebird","Magpie","Mallard","Manatee","Mandrill","Mantis","Marten","Meerkat","Mink","Mole","Mongoose","Monkey","Moose","Mosquito","Mouse","Mule","Narwhal","Newt","Nightingale","Octopus","Okapi","Opossum","Oryx","Ostrich","Otter","Owl","Oyster","Panther","Parrot","Partridge","Peafowl","Pelican","Penguin","Pheasant","Pig","Pigeon","Pony","Porcupine","Porpoise","Quail","Quelea","Quetzal","Rabbit","Raccoon","Rail","Ram","Rat","Raven","Reddeer","Redpanda","Reindeer","Rhinoceros","Rook","Salamander","Salmon","SandDollar","Sandpiper","Sardine","Scorpion","Seahorse","Seal","Shark","Sheep","Shrew","Skunk","Snail","Snake","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray","Stinkbug","Stork","Swallow","Swan","Tapir","Tarsier","Termite","Tiger","Toad","Trout","Turkey","Turtle","Viper","Vulture","Wallaby","Walrus","Wasp","Weasel","Whale","Wildcat","Wolf","Wolverine","Wombat","Woodcock","Woodpecker","Worm","Wren","Yak","Zebra"]
var theWord = "";
var numOfGuesses = 0;

var startGame = function(){
console.log("Let's start a new game!")
var randomAnimal = animals[Math.floor(Math.random()*animals.length)];
theWord = new word(randomAnimal);
theWord.populateNew();
numOfGuesses = randomAnimal.length;
showGuessLetter();
}

var showGuessLetter = function(){
    inquirer
    .prompt([
        {
            name: "inputLetter",
            message: "Type a letter: "
        }
    ]).then(function(info){
        theWord.guessOnWord(info.inputLetter);
        console.log(theWord.showWord());
        if(numOfGuesses>0 && (theWord.showWord().match(/_/g) || []).length >0){
            numOfGuesses--
            showGuessLetter();
        }
        else if(numOfGuesses === 0 && (theWord.showWord().match(/_/g) || []).length >0){
            youLoose();
        }
    })
}

var youLoose = function(){
    console.log("You have lost!")
    inquirer
    .prompt([
        {
            type: "list",
            name: "startNew",
            message: "Do you want to start a new game or quit?",
            choices: ["New","Quit"]
        }
    ]).then(function(answer){
        if(answer.startNew === "New"){
            startGame();
        }
    })
}

startGame();
