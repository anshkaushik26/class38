var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4;
var cars;
var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  car1=createSprite(200,600,50,50)
  car2=createSprite(400,600,50,50)
  car3=createSprite(600,600,50,50)
  car4=createSprite(800,600,50,50)
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

  }


}
