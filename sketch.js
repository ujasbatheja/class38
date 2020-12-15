var gameState = 0;
var playerCount = 0;
var form, player, game;
var database;
var allPlayers;
var distance = 0;
var car1,car2,car3,car4;
var cars;

function setup(){
    createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();
    console.log(database);
}

function draw(){
    background("white");
    if (playerCount===4){
        game.setGameState(1);
    }
    
    if(gameState===1){
        game.play();
    }
    
}