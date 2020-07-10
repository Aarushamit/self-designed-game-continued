class SpaceShip {

    constructor(x, y) {
      this.x = x; 
      this.y = y;
      this.width = 50;
      this.height = 50;  
      
      this.image = loadImage("spaceship1.jpg");

      
      
    }

    display() {
       // rect(this.x, this.y, 50, 50); 
       // rectMode(CENTER); 
        image(enemy1_img, 100, 40, 80, 80);
        
        
        
    }

}