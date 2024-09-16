let tick = 0,
  stars = [],
  containerRain,
  snowContainer,
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

let angle = 0;
let weather = 3;

let opacity = 225;

let trainX = -421;

let dotMusicX = width * 0.38;



function setup () {
  createCanvas(width, height);
  angleMode(DEGREES);

  stars.push(new Star(width * 0.026, height * 0.185, 360, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.2, height * 0.138, 360, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.15625, height * 0.1, 360, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.0625, height * 0.13, 300, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.119, height * 0.16, 200, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.18, height * 0.27, 200, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.15625, height * 0.21, 200, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.234375, height * 0.23, 200, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.3125, height * 0.18, 200, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.276, height * 0.1, 200, width * 0.005, height * 0.009));
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

  containerRain = new ContainerRain(0, height * 0.074, width * 0.5, height * 0.65);

  snowContainer = new SnowContainer(0, height * 0.074, width * 0.5, height * 0.65);

  for (let i = 0; i <= 40; i++) {
    containerRain.addDrop(new Drop(containerRain));
  }
}


function draw () {
  background('#000a23');

  if (weather === 3) {
    image(cloud, width * 0.01, height * 0.22, width * 0.134, height * 0.07);
    image(cloud, width * 0.15, height * 0.15, width * 0.083, height * 0.046);
    push();
    scale(-1, 1);
    image(cloud, -(width * 0.35), height * 0.25, width * 0.134375, height * 0.074);
    pop();
    push();
    for (let star of stars) {
      star.update();
      star.display();
    }
    pop()
  }


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

  // Weather
  push()
  if (weather === 1) {
    containerRain.updateDrops();
  }
  if (weather === 2) {
    snowContainer.update();
    snowContainer.display();
  }
  pop()

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

class SnowContainer {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.snowflakes = [];
  }

  update () {
    let t = frameCount / 60;
    for (let i = 0; i < random(2); i++) {
      this.snowflakes.push(new Snowflake(this.x, this.y, this.w, this.h));
    }
    for (let flake of this.snowflakes) {
      flake.update(t);
    }
  }

  display () {
    push();
    translate(this.x, this.y);
    for (let flake of this.snowflakes) {
      flake.display();
    }
    pop();
  }
}

class Snowflake {
  constructor(x, y, w, h) {
    this.posX = random(w);
    this.posY = random(-50, 0);
    this.size = random(2, 5);
    this.speed = random(1, 3);
    this.angle = random(TWO_PI);
    this.dir = random(0.01, 0.05);
    this.w = w;
    this.h = h;
  }

  update () {
    this.angle += this.dir;
    this.posY += this.speed;
    this.posX += sin(this.angle);

    if (this.posY > this.h) {
      this.posY = random(-50, 0);
      this.posX = random(this.w);
    }
  }


  display () {
    ellipse(this.posX, this.posY, this.size);
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

  if (key === 'S' || key === 's') {
    if (weather >= 3) {
      weather = 0
    }
    weather++;
  }

  if (key === 'D' || key === 'd') {
    if (weather >= 3) {
      weather = 0
    }
    weather++;
  }

  if (key === 'A' || key === 'a') {
    if (weather >= 3) {
      weather = 0
    }
    weather++;
  }
}

class Drop {
  constructor(container) {
    this.pos = createVector(random(container.x, container.x + container.width), container.y); // Random x within container
    this.vel = createVector(0, random(8, 11)); // Velocity
    this.length = random(10, 15); // Length of the drop
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

class ContainerRain {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.drops = [];
  }


  addDrop (drop) {

    this.drops.push(drop);
  }

  updateDrops () {
    strokeWeight(2);
    for (let drop of this.drops) {
      drop.update();
      drop.show();
    }
  }
}


class Star {
  constructor(x, y, angle, w, h) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.width = w;
    this.height = h;
    this.zoomSpeed = random(0.008, 0.01)
  }

  update () {
    let zoomFactor = sin(frameCount * this.zoomSpeed * 360);
    this.currentWidth = this.width + zoomFactor * (this.width / 2);
    this.currentHeight = this.height + zoomFactor * (this.height / 2);
  }
  display () {
    fill(255, 204, 0);
    noStroke();

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    this.drawStar(0, 0, this.currentWidth, this.currentHeight / 2, 5);
    pop();
  }

  drawStar (x, y, radius1, radius2, npoints) {
    let angle = 360 / npoints;
    let halfAngle = angle / 2.0;

    beginShape();
    for (let a = 0; a < 360; a += angle) {
      let sx = x + cos(a) * radius1;
      let sy = y + sin(a) * radius1;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius2;
      sy = y + sin(a + halfAngle) * radius2;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
