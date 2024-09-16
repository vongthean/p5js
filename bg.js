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
  clock,
  dot_clock,
  dot_music,
  btn_play,
  btn_stop,
  music,
  drops = [];


let ratio = window.innerWidth / window.innerHeight

let width = window.innerWidth

let height = width / 1.77;

console.log({ width, height, ratio });

let changeWallMid = true;
let changeWallRight = true;
let changeBrownBuild = true;
let changePurpleBuild = true;
let currentDot = 1;
let intervalDot = 30;
let changeDog = true;
let changeDotClock = true;

let opacity = 225;


let angle = 0;
let trainX = -421;

let dotMusicX = width * 0.38;



function setup () {
  createCanvas(width, height);

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
  clock = loadImage("./images/clock.png");
  dot_clock = loadImage("./images/dot-clock.png");
  dot_music = loadImage("./images/dot-music.png");
  btn_play = loadImage("./images/btn-play.png");
  btn_stop = loadImage("./images/btn-stop.png");
  currentPlay = btn_stop;
  music = loadSound("/music.mp3", function () { });

  container = new Container(0, 80, width * 0.5, height * 0.65);
  for (let i = 0; i <= 40; i++) {
    container.addDrop(new Drop(container));
  }
}


function draw () {
  background('#000a23');


  image(cloud, width * 0.01, height * 0.22, width * 0.134, height * 0.07);
  image(cloud, width * 0.15, height * 0.15, width * 0.083, height * 0.046);
  push();
  scale(-1, 1);
  image(cloud, -(width * 0.35), height * 0.25, width * 0.134375, height * 0.074);
  pop();

  push()
  if (frameCount % 80 == 0) {
    changeBrownBuild = !changeBrownBuild;
  }
  image(changeBrownBuild ? brown_build : brown_build_active, width * 0.054, height * 0.28, width * 0.06, height * 0.25);
  pop()



  image(city, 0, height * 0.35, width * 0.384, height * 0.25);


  push()
  image(train_line, 0, height * 0.51, width * 0.26, height * 0.225)
  image(train, trainX, height * 0.532, width * 0.2, height * 0.05)
  trainX += 2;

  if (trainX >= width * 0.3) {
    trainX = -420;
  }
  pop()

  push()
  if (frameCount % 100 == 0) {
    changePurpleBuild = !changePurpleBuild;
  }
  image(changePurpleBuild ? purple_build : purple_build_active, width * 0.2, height * 0.51, width * 0.19, height * 0.23);
  pop()


  // Update and show drops within the container
  container.updateDrops();

  image(bg_full, 0, 0, width, height);
  image(air_conditioner, width * 0.545, 0, width * 0.45, height * 0.5);
  image(clock, width * 0.73, height * 0.182, width * 0.08, height * 0.068);

  push()
  if (frameCount % 30 == 0) {
    changeDotClock = !changeDotClock;
  }
  if (changeDotClock) {
    opacity = 225;
  } else {
    opacity = 0;
  }

  tint(255, opacity);
  image(dot_clock, width * 0.765, height * 0.21, width * 0.005, height * 0.018);
  pop()

  push()
  if (frameCount % 80 == 0) {
    changeWallMid = !changeWallMid;
  }
  image(changeWallMid ? wall_mid : wall_mid_active, width * 0.42, height * 0.1, width * 0.19, height * 0.21);
  pop()

  push()
  if (frameCount % 100 == 0) {
    changeWallRight = !changeWallRight;
  }
  image(changeWallRight ? wall_right : wall_right_active, width * 0.89, height * 0.6, width * 0.093, height * 0.21);
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

  image(window_line, 0, height * 0.046, width * 0.4, height * 0.71);

  push()

  image(dog_tail, width * 0.268, height * 0.74, width * 0.014, height * 0.0259);
  if (frameCount % 40 == 0) {
    changeDog = !changeDog;
  }
  if (changeDog) {
    image(small_dog, width * 0.229, height * 0.738, width * 0.048, height * 0.069);
  } else {
    image(big_dog, width * 0.227, height * 0.73, width * 0.05, height * 0.0759);
  }
  image(dog, width * 0.17, height * 0.74, width * 0.125, height * 0.083);

  pop()

  image(table, width * 0.089, height * 0.759, width * 0.9, height * 0.24);
  image(main_monitor, width * 0.5, height * 0.527, width * 0.2, height * 0.296);
  image(pc_case, width * 0.69, height * 0.4, width * 0.15, height * 0.416);
  image(second_monitor, width * 0.36, height * 0.379, width * 0.19, height * 0.44);

  push()

  image(currentPlay, width * 0.41, height * 0.7, width * 0.029, height * 0.05);
  image(dot_music, dotMusicX, height * 0.68, width * 0.0083, height * 0.0129)

  if (currentPlay === btn_play) {
    dotMusicX += 0.5;
  }


  if (dotMusicX >= width * 0.46) {
    dotMusicX = width * 0.38;
  }
  pop()

  push()

  if (frameCount % intervalDot == 0) {
    currentDot = (currentDot % 3) + 1;
  }

  image(currentDot == 3 ? dot_green : dot_black, width * 0.717, height * 0.592, width * 0.0083, height * 0.0148);
  image(currentDot == 2 ? dot_yellow : dot_black, width * 0.728, height * 0.592, width * 0.0083, height * 0.0148);
  image(currentDot == 1 ? dot_yellow : dot_black, width * 0.739, height * 0.592, width * 0.0083, height * 0.0148);

  pop()

  push()
  imageMode(CENTER);
  translate(width * 0.815, height * 0.64);
  rotate(angle);
  image(fan, 0, 0, width * 0.03125, height * 0.05555555555555555);
  angle += 2;
  if (angle >= 360) {
    angle = 0;
  }
  pop()

  push()
  imageMode(CENTER);
  translate(width * 0.815, height * 0.705);
  rotate(angle);
  image(fan, 0, 0, width * 0.03125, height * 0.05555555555555555);
  angle += 2;
  if (angle >= 360) {
    angle = 0;
  }
  pop()

  push()
  imageMode(CENTER);
  translate(width * 0.815, height * 0.77);
  rotate(angle);
  image(fan, 0, 0, width * 0.03125, height * 0.05555555555555555);
  angle += 2;
  if (angle >= 360) {
    angle = 0;
  }
  pop()

  image(people, width * 0.46796875, height * 0.63, width * 0.16, height * 0.37);

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

function keyPressed () {
  if (key === 'W' || key === 'w') {
    if (music.isPlaying()) {
      currentPlay = btn_stop
      music.stop();
    } else {
      currentPlay = btn_play
      music.loop();
    }
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
