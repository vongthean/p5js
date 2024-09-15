let tick = 0,
  stars = [],
  container,
  bg_full,
  table,
  main_monitor,
  second_monitor,
  people,
  pc_case,
  air_conditioner,
  window_line,
  wall_mid,
  wall_mid_active,
  wall_right,
  wall_right_active,
  cloud,
  dog,
  big_dog,
  city,
  small_dog,
  dog_tail,
  brown_build,
  brown_build_active,
  purple_build,
  purple_build_active,
  train_line,
  train,
  fan,
  dot_green,
  dot_yellow,
  dot_black,

  drops = [];

let changeWallMid = true;
let changeWallRight = true;
let changeBrownBuild = true;
let changePurpleBuild = true;
let currentDot = 1;
let intervalDot = 30;
let changeDog = true;

let angle = 0;
let trainX = -421;

function setup () {
  createCanvas(window.innerWidth, window.innerHeight);

  //By default, rotations are specified in radians
  angleMode(DEGREES);
}

function preload () {
  bg_full = loadImage("./images/bg-full.png");
  window_line = loadImage("./images/window-line.png");
  air_conditioner = loadImage("./images/air-conditioner.png");
  people = loadImage("./images/people.png");
  table = loadImage("./images/table.png");
  main_monitor = loadImage("./images/main-monitor.png");
  pc_case = loadImage("./images/case-pc.png");
  cloud = loadImage("./images/cloud.png");
  wall_mid = loadImage("./images/wall-mid-up.png");
  wall_mid_active = loadImage("./images/wall-mid-down.png");
  wall_right = loadImage("./images/wall-right-up.png");
  wall_right_active = loadImage("./images/wall-right-down.png");
  brown_build = loadImage("./images/brown-build-up.png");
  brown_build_active = loadImage("./images/brown-build-down.png");
  purple_build = loadImage("./images/purple-build-up.png");
  purple_build_active = loadImage("./images/purple-build-down.png");
  dog = loadImage("./images/dog.png");
  big_dog = loadImage("./images/big-dog.png");
  dog_tail = loadImage("./images/dog-tail.png");
  small_dog = loadImage("./images/small-dog.png");
  city = loadImage("./images/city.png");
  train_line = loadImage("./images/train-line.png");
  train = loadImage("./images/train.png");
  fan = loadImage("./images/fan.png");
  second_monitor = loadImage("./images/screen-2.png");
  dot_green = loadImage("./images/dot-green.png");
  dot_yellow = loadImage("./images/dot-yellow.png");
  dot_black = loadImage("./images/dot-black.png");
  container = new Container(0, 80, window.innerWidth * 0.5, window.innerHeight * 0.65);
  for (let i = 0; i <= 40; i++) {
    container.addDrop(new Drop(container));
  }
}


function draw () {
  background('#000a23');


  image(cloud, window.innerWidth * 0.01, window.innerHeight * 0.22, 258, 80);
  image(cloud, window.innerWidth * 0.15, window.innerHeight * 0.15, 160, 50);
  push();
  scale(-1, 1);
  image(cloud, -(window.innerWidth * 0.35), window.innerHeight * 0.25, 258, 80);
  pop();

  push()
  if (frameCount % 30 == 0) {
    changeBrownBuild = !changeBrownBuild;
  }
  image(changeBrownBuild ? brown_build : brown_build_active, window.innerWidth * 0.054, window.innerHeight * 0.28, window.innerWidth * 0.06, window.innerHeight * 0.25);
  pop()



  image(city, 0, window.innerHeight * 0.35, window.innerWidth * 0.384, window.innerHeight * 0.25);


  push()
  image(train_line, 0, window.innerHeight * 0.51, window.innerWidth * 0.26, window.innerHeight * 0.225)
  image(train, trainX, window.innerHeight * 0.534, window.innerWidth * 0.2, window.innerHeight * 0.05)
  trainX += 2;

  if (trainX >= window.innerWidth * 0.3) {
    trainX = -420;
  }
  pop()

  push()
  if (frameCount % 35 == 0) {
    changePurpleBuild = !changePurpleBuild;
  }
  image(changePurpleBuild ? purple_build : purple_build_active, window.innerWidth * 0.2, window.innerHeight * 0.51, window.innerWidth * 0.19, window.innerHeight * 0.23);
  pop()


  // Update and show drops within the container
  container.updateDrops();

  image(bg_full, 0, 0, window.innerWidth, window.innerHeight);
  image(air_conditioner, window.innerWidth - innerWidth * 0.35, 0, window.innerWidth * 0.35, window.innerHeight * 0.4);
  push()
  if (frameCount % 20 == 0) {
    changeWallMid = !changeWallMid;
  }
  image(changeWallMid ? wall_mid : wall_mid_active, (window.innerWidth - 364) / 2 + 30, window.innerHeight * 0.1, 364, 230);
  pop()

  push()
  if (frameCount % 30 == 0) {
    changeWallRight = !changeWallRight;
  }
  image(changeWallRight ? wall_right : wall_right_active, (window.innerWidth - 180) - 30, window.innerHeight * 0.48, 180, 230);
  pop()

  // if (tick % 8 === 0) {
  //   stars.push(new Star());
  // }

  // // Makes an array of the indices of stars that have gone offscreen.
  // // This keeps the stars array clean, with only "live" stars.
  // let removes = [];
  // for (let i = 0; i < stars.length; i++) {
  //   let star = stars[i];
  //   star.update();
  //   if (star.y > height) {
  //     removes.push(i);
  //   }
  // }

  // // Remove stars from highest to lowest index to avoid removing on-screen stars.
  // removes
  //   .sort((a, b) => b - a)
  //   .forEach((idx) => {
  //     stars.splice(idx, 1);
  //   });

  // tick++;

  image(window_line, 0, 50, window.innerWidth * 0.4, window.innerHeight * 0.71);

  push()

  image(dog_tail, 515, (window.innerHeight - 28) - 250, 28, 28);
  if (frameCount % 40 == 0) {
    changeDog = !changeDog;
  }
  if (changeDog) {
    image(small_dog, 440, (window.innerHeight - 82) - 200, 93, 75);
  } else {
    image(big_dog, 434, (window.innerHeight - 82) - 210, 103, 82);
  }

  image(dog, 330, (window.innerHeight - 90) - 190, 240, 90);
  image(dog, 330, (window.innerHeight - 90) - 190, 240, 90);
  pop()

  image(table, window.innerWidth - (window.innerWidth * 0.9) - 20, window.innerHeight - 260, window.innerWidth * 0.9, 260);
  image(main_monitor, window.innerWidth * 0.5, window.innerHeight * 0.529, 380, 320);
  image(pc_case, window.innerWidth * 0.69, window.innerHeight * 0.408, 290, 450);
  image(second_monitor, window.innerWidth * 0.36, window.innerHeight * 0.38, 370, 480);

  push()

  if (frameCount % intervalDot == 0) {
    currentDot = (currentDot % 3) + 1;
  }

  image(currentDot == 1 ? dot_green : dot_black, window.innerWidth * 0.717, window.innerHeight * 0.59, 16, 16);
  image(currentDot == 2 ? dot_yellow : dot_black, window.innerWidth * 0.728, window.innerHeight * 0.59, 16, 16);
  image(currentDot == 3 ? dot_yellow : dot_black, window.innerWidth * 0.739, window.innerHeight * 0.59, 16, 16);

  pop()

  push()
  imageMode(CENTER);
  translate(window.innerWidth * 0.815, window.innerHeight * 0.64);
  rotate(angle);
  image(fan, 0, 0, 60, 60);
  angle += 2;
  if (angle >= 360) {
    angle = 0;
  }
  pop()

  push()
  imageMode(CENTER);
  translate(window.innerWidth * 0.815, window.innerHeight * 0.708);
  rotate(angle);
  image(fan, 0, 0, 60, 60);
  angle += 2;
  if (angle >= 360) {
    angle = 0;
  }
  pop()

  push()
  imageMode(CENTER);
  translate(window.innerWidth * 0.815, window.innerHeight * 0.775);
  rotate(angle);
  image(fan, 0, 0, 60, 60);
  angle += 2;
  if (angle >= 360) {
    angle = 0;
  }
  pop()

  image(people, (window.innerWidth - 303) / 2 + 90, window.innerHeight - 401, 303, 401);

}

// Using a class to contain all of the star logic instead of creating objects in the draw function.
class Star {
  constructor(x, y, line) {
    this.x = x;
    this.y = y;
    this.time = 1;
    this.random = map(random(), 0, 1, -5, 5); // Adding some random spin to the stars.
    this.angle = 0;
    this.acceleration =
      Math.floor(Math.abs(this.random)) !== 0 ? this.random : 1; // Acceleration is > 0;
    this.color1 = color(255, 248, 166);
    this.color2 = color(250, 250, 250);
    this.color = lerpColor(this.color1, this.color2, random()); // Randomize star color.
    this.filled = random() > 0.5 ? true : false;


  }



  create (cx, cy) {

    strokeWeight(6);
    stroke(this.color);
    if (this.filled) {
      fill(this.color);
    } else {
      noFill();
    }
    strokeJoin(ROUND);
    // Star shape code from https://stackoverflow.com/a/25840319
    let rot = (PI / 2) * 3;
    let x = cx;
    let y = cy;
    let step = PI / 5;
    let outerRadius = 40;
    let innerRadius = 20;

    beginShape();
    for (let i = 0; i < 5; i++) {
      x = cx + cos(rot) * outerRadius;
      y = cy + sin(rot) * outerRadius;
      vertex(x, y);
      rot += step;

      x = cx + cos(rot) * innerRadius;
      y = cy + sin(rot) * innerRadius;
      vertex(x, y);
      rot += step;
    }
    vertex(x, y);
    endShape(CLOSE);
  }

  update () {
    frameRate(30)
    push();
    angleMode(DEGREES);
    translate(this.x, this.y);
    rotate(this.angle);
    scale(noise(this.time * 0.01)); // Scale the stars to make them twinkle!
    angleMode(RADIANS);
    this.create(0, 0);
    // this.y += this.time * 0.01;
    this.time += Math.abs(this.acceleration);
    this.angle += this.acceleration;
    pop();
  }
}



function createGradientBackground () {
  strokeWeight(2);
  let c1 = color(11, 32, 66);
  let c2 = color(178, 211, 219);
  // Create a background gradient by drawing lines across
  // the screen that gradually get lighter.
  for (let y = 0; y < height; y++) {
    let n = map(y, 0, height, 0, 1);
    let gradient = lerpColor(c1, c2, n);
    stroke(gradient);
    line(0, y, width, y);
  }
}



class Drop {
  constructor(container) {
    this.pos = createVector(random(container.x, container.x + container.width), container.y); // Random x within container
    this.vel = createVector(0, random(8, 11)); // Velocity
    this.length = random(5, 10); // Length of the drop
    this.strength = random(255); // Opacity strength
    this.container = container;  // Reference to the container
  }

  show () {
    stroke(255, this.strength);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.length);
  }

  update () {
    this.pos.add(this.vel);

    // Constrain the drops to stay within the container's width and height
    this.pos.x = constrain(this.pos.x, this.container.x, this.container.x + this.container.width);


    // Reset drop when it reaches the bottom of the container
    if (this.pos.y > this.container.y + this.container.height) {
      this.pos.y = this.container.y;  // Reset y position to the top of the container
      this.pos.x = random(this.container.x, this.container.x + this.container.width); // Randomize x within the container
    }
  }
}

class Container {
  constructor(x, y, width, height) {
    this.x = x;       // x position of the container
    this.y = y;       // y position of the container
    this.width = width; // Width of the container
    this.height = height; // Height of the container
    this.drops = [];  // Array to hold drop objects
  }

  // Method to add drops to the container
  addDrop (drop) {

    this.drops.push(drop);
  }



  // Update and display all drops within the container
  updateDrops () {
    strokeWeight(2);
    for (let drop of this.drops) {
      drop.update();
      drop.show();
    }
  }
}
