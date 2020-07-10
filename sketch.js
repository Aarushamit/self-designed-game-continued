var enemy1, enemy2, enemy3, enemy1_img, enemy2_img, enemy3_img, background_img;

var bg;

var player, player_img;


function preload() {
enemy1_img = loadImage("spaceship1.jpg");
enemy2_img = loadImage("spaceship1.jpg");
enemy3_img = loadImage("spaceship2.jpg");
background_img = loadImage("download.jpeg");
player_img = loadImage("player.png");



}

function setup() {
  createCanvas(1200, 600);

  player = createSprite(600, 550);
  player.addImage("p1", player_img);
  player.scale = 0.2;
  

  
  
  enemy1 = new SpaceShip(400, 200);
  enemy2 = new SpaceShip(300, 200);
  enemy3 = new SpaceShip(200, 200);

  bg = createSprite(600, 300, 1200, 600);
  bg.addImage("bg", background_img);
bg.scale = 7;


 

}

function draw() {
  
  background("black");
 
 
 bg.depth = bg.depth-2;

 player.x = mouseX;
 player.y = 550;


  bg.velocityY = 7;

  if(bg.y>500) {
    bg.y = bg.height/2;
  }

  player.depth = bg.depth+1;
  enemy1.depth = bg.depth+1;
  enemy2.depth = bg.depth+1;
  enemy3.depth = bg.depth+1;

  enemy1.display();
  enemy2.display();
  enemy3.display();



 
 
 
drawSprites();

}

