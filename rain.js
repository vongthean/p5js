drops = []
let astronaut;
function setup() {
  createCanvas(500, 500);
  p = createVector(random(width), 200)
  
 
}

function preload(){
    astronaut = loadImage("astronaut.png");
}

function draw() {
    image(astronaut, 0, 0, 290, 290);
    image(astronaut, 10, 10, 290, 290);
    image(astronaut, 20, 20, 290, 290);
    image(astronaut, 30, 30, 290, 290);
   for (let i = 0; i < 5; i++){
    drops.push(new Drop(random(width), 0, 0))
  }
  
  for (let d of drops){
    d.show()
    d.update()
  }

}

class Drop{
  constructor(x, y){
    this.pos = createVector(x, y)
    this.vel = createVector(0, random(8, 11))
    this.length = random(20, 40)
    this.strength = random(255)
  }
  show(){
    stroke(255, this.strength)
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y-this.length)
  }
  
  update(){
    this.pos.add(this.vel)
    if (this.pos.y > height + 100){
      drops.shift()
    }
  }
  
}