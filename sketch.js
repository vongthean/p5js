// music
let song;

// planets
let radius = 100;
let rotateEnabled = true;

let numDashes1 = 15;
let dashLength1 = 30;
let rotationAngle1 = 0;

let numDashes2 = 15;
let dashLength2 = 18;
let rotationAngle2 = 0;

let numDashes3 = 13;
let dashLength3 = 13;
let rotationAngle3 = 0;

let numDashes4 = 18;
let dashLength4 = 18;
let rotationAngle4 = 0;

let numDashes5 = 20;
let dashLength5 = 23;
let rotationAngle5 = 0;

let numDashes6 = 50;
let dashLength6 = 8;
let rotationAngle6 = 0;

let numDashes7 = 50;
let dashLength7 = 8;
let rotationAngle7 = 0;

let numDashes8 = 45;
let dashLength8 = 8;
let rotationAngle8 = 0;

let numDashes9 = 40;
let dashLength9 = 8;
let rotationAngle9 = 0;

let numDashes10 = 30;
let dashLength10 = 8;
let rotationAngle10 = 0;

let numDashes11 = 20;
let dashLength11 = 8;
let rotationAngle11 = 0;

let numDashes12 = 15;
let dashLength12 = 8;
let rotationAngle12 = 0;

let numDashes13 = 18;
let dashLength13 = 10;
let rotationAngle13 = 0;

let numDashes14 = 20;
let dashLength14 = 15;
let rotationAngle14 = 0;

let numDashes15 = 20;
let dashLength15 = 23;
let rotationAngle15 = 0;

let numDashes16 = 20;
let dashLength16 = 23;
let rotationAngle16 = 0;

let numDashes17 = 15;
let dashLength17 = 15;
let rotationAngle17 = 0;

let numDashes18 = 20;
let dashLength18 = 15;
let rotationAngle18 = 0;

let numDashes19 = 25;
let dashLength19 = 15;
let rotationAngle19 = 0;

let numDashes20 = 23;
let dashLength20 = 17;
let rotationAngle20 = 0;

let numDashes21 = 25;
let dashLength21 = 17;
let rotationAngle21 = 0;

let numDashes22 = 25;
let dashLength22 = 17;
let rotationAngle22 = 0;

let numDashes23 = 22;
let dashLength23 = 17;
let rotationAngle23 = 0;

let numDashes24 = 21;
let dashLength24 = 17;
let rotationAngle24 = 0;

let numDashes25 = 20;
let dashLength25 = 17;
let rotationAngle25 = 0;

let numDashes26 = 20;
let dashLength26 = 20;
let rotationAngle26 = 0;

let numDashes27 = 20;
let dashLength27 = 20;
let rotationAngle27 = 0;

let numDashes28 = 40;
let dashLength28 = 10;
let rotationAngle28 = 0;

let numDashes29 = 35;
let dashLength29 = 10;
let rotationAngle29 = 0;

let numDashes30 = 25;
let dashLength30 = 10;
let rotationAngle30 = 0;

let numDashes31 = 20;
let dashLength31 = 10;
let rotationAngle31 = 0;

let numDashes32 = 12;
let dashLength32 = 17;
let rotationAngle32 = 0;

let numDashes33 = 15;
let dashLength33 = 23;
let rotationAngle33 = 0;

let numDashes34 = 15;
let dashLength34 = 25;
let rotationAngle34 = 0;

let numDashes35 = 10;
let dashLength35 = 25;
let rotationAngle35 = 0;

let numDashes36 = 12;
let dashLength36 = 27;
let rotationAngle36 = 0;

let numDashes37 = 9;
let dashLength37 = 27;
let rotationAngle37 = 0;

let numDashes38 = 15;
let dashLength38 = 20;
let rotationAngle38 = 0;

let numDashes39 = 8;
let dashLength39 = 20;
let rotationAngle39 = 0;

// bg dots
const dots = []
let isMoving = true;

// astronaut
let astronaut;
let x = 0;
let y = 0;


function preload() {
    astronaut = loadImage("astronaut.png");
    song = loadSound('Music.mp3');

}


function setup() {
    createCanvas(windowWidth, windowHeight);

    // music
    song.loop();
    // dots

    for (let i = 0; i < 25; i++) {
        dots.push(new Dot(1));
        dots.push(new Dot(2));
        dots.push(new Dot(3));
        dots.push(new Dot(4));
    }

}

function draw() {
    background(4, 0, 44);

    //BG DOTS
    for (const dot of dots) {
        if (isMoving) {
            dot.move();
        }
        dot.draw();
    }

    // PLANETS
    //dashed circle bg 6
    push();
    translate(253, 113);
    if (rotateEnabled) {
        rotationAngle6 -= radians(0.4);
    }
    let dashAngle6 = (TWO_PI / numDashes6);
    noFill();
    for (let i = 0; i < numDashes6; i++) {
        let startAngle = i * dashAngle6 + rotationAngle6;
        let endAngle = startAngle + dashLength6 / radius;
        arc(0, 0, radius * 3.7, radius * 3.7, startAngle, endAngle);
    }
    pop();

    //dashed circle bg 7
    push();
    translate(253, 113);
    if (rotateEnabled) {
        rotationAngle7 += radians(0.35);
    }
    let dashAngle7 = (TWO_PI / numDashes7);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes7; i++) {
        let startAngle = i * dashAngle7 + rotationAngle7;
        let endAngle = startAngle + dashLength7 / radius;
        arc(0, 0, radius * 3.9, radius * 3.9, startAngle, endAngle);
    }
    pop();

    //dashed circle bg 8
    push();
    translate(253, 113);
    if (rotateEnabled) {
        rotationAngle8 -= radians(0.23);
    }
    let dashAngle8 = (TWO_PI / numDashes8);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes8; i++) {
        let startAngle = i * dashAngle8 + rotationAngle8;
        let endAngle = startAngle + dashLength8 / radius;
        arc(0, 0, radius * 4.6, radius * 4.6, startAngle, endAngle);
    }
    pop();

    //dashed circle bg 9
    push();
    translate(253, 113);
    if (rotateEnabled) {
        rotationAngle9 += radians(0.1);
    }
    let dashAngle9 = (TWO_PI / numDashes9);
    noFill();
    for (let i = 0; i < numDashes9; i++) {
        let startAngle = i * dashAngle9 + rotationAngle9;
        let endAngle = startAngle + dashLength9 / radius;
        arc(0, 0, radius * 4.65, radius * 4.65, startAngle, endAngle);
    }
    pop(); 6
    //dashed circle bg 10
    push();
    translate(253, 113);
    if (rotateEnabled) {
        rotationAngle10 -= radians(0.03);
    }
    let dashAngle10 = (TWO_PI / numDashes10);
    noFill();
    for (let i = 0; i < numDashes10; i++) {
        let startAngle = i * dashAngle10 + rotationAngle10;
        let endAngle = startAngle + dashLength10 / radius;
        arc(0, 0, radius * 5.1, radius * 5.1, startAngle, endAngle);
    }
    pop();

    //dashed circle bg 11
    push();
    translate(253, 113);
    stroke(57, 57, 91);
    strokeWeight(1);
    if (rotateEnabled) {
        rotationAngle11 += radians(0.2);
    }
    let dashAngle11 = (TWO_PI / numDashes11);
    noFill();
    for (let i = 0; i < numDashes11; i++) {
        let startAngle = i * dashAngle11 + rotationAngle11;
        let endAngle = startAngle + dashLength11 / radius;
        arc(0, 0, radius * 5.5, radius * 5.5, startAngle, endAngle);
    }
    pop();

    //dashed circle bg 12
    push();
    translate(253, 113);
    stroke(57, 57, 91);
    strokeWeight(1);
    if (rotateEnabled) {
        rotationAngle12 -= radians(0.07);
    }
    let dashAngle12 = (TWO_PI / numDashes12);
    noFill();
    for (let i = 0; i < numDashes12; i++) {
        let startAngle = i * dashAngle12 + rotationAngle12;
        let endAngle = startAngle + dashLength12 / radius;
        arc(0, 0, radius * 6, radius * 6, startAngle, endAngle);
    }
    pop();

    // 2nd blue planet dashed circle bg
    push();
    translate(1140, 713);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes12; i++) {
        let startAngle = i * dashAngle12 + rotationAngle12;
        let endAngle = startAngle + dashLength12 / radius;
        arc(0, 0, radius * 7.3, radius * 7.3, startAngle, endAngle);
    }
    pop();

    push();
    translate(1140, 713);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes10; i++) {
        let startAngle = i * dashAngle10 + rotationAngle10;
        let endAngle = startAngle + dashLength10 / radius;
        arc(0, 0, radius * 5.8, radius * 5.8, startAngle, endAngle);
    }
    pop();

    push();
    translate(1140, 713);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes8; i++) {
        let startAngle = i * dashAngle8 + rotationAngle8;
        let endAngle = startAngle + dashLength8 / radius;
        arc(0, 0, radius * 4.8, radius * 4.8, startAngle, endAngle);
    }
    pop();

    push();
    translate(1140, 713);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes6; i++) {
        let startAngle = i * dashAngle6 + rotationAngle6;
        let endAngle = startAngle + dashLength6 / radius;
        arc(0, 0, radius * 4.2, radius * 4.2, startAngle, endAngle);
    }
    pop();

    // sun dashed circle bg
    push();
    translate(1133, 124);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes12; i++) {
        let startAngle = i * dashAngle12 + rotationAngle12;
        let endAngle = startAngle + dashLength12 / radius;
        arc(0, 0, radius * 11.3, radius * 11.3, startAngle, endAngle);
    }
    pop();

    push();
    translate(1133, 124);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes11; i++) {
        let startAngle = i * dashAngle11 + rotationAngle11;
        let endAngle = startAngle + dashLength11 / radius;
        arc(0, 0, radius * 9.8, radius * 9.8, startAngle, endAngle);
    }
    pop();

    push();
    translate(1133, 124);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes10; i++) {
        let startAngle = i * dashAngle10 + rotationAngle10;
        let endAngle = startAngle + dashLength10 / radius;
        arc(0, 0, radius * 8.7, radius * 8.7, startAngle, endAngle);
    }
    pop();

    push();
    translate(1133, 124);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes11; i++) {
        let startAngle = i * dashAngle11 + rotationAngle11;
        let endAngle = startAngle + dashLength11 / radius;
        arc(0, 0, radius * 7.8, radius * 7.8, startAngle, endAngle);
    }
    pop();

    push();
    translate(1133, 124);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes10; i++) {
        let startAngle = i * dashAngle10 + rotationAngle10;
        let endAngle = startAngle + dashLength10 / radius;
        arc(0, 0, radius * 7.07, radius * 7.07, startAngle, endAngle);
    }
    pop();

    push();
    translate(1133, 124);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes9; i++) {
        let startAngle = i * dashAngle9 + rotationAngle9;
        let endAngle = startAngle + dashLength9 / radius;
        arc(0, 0, radius * 6.4, radius * 6.4, startAngle, endAngle);
    }
    pop();

    push();
    translate(1133, 124);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes8; i++) {
        let startAngle = i * dashAngle8 + rotationAngle8;
        let endAngle = startAngle + dashLength8 / radius;
        arc(0, 0, radius * 6, radius * 6, startAngle, endAngle);
    }
    pop();

    // red planet dashed circle bg
    push();
    translate(13, 1011);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes12; i++) {
        let startAngle = i * dashAngle12 + rotationAngle12;
        let endAngle = startAngle + dashLength12 / radius;
        arc(0, 0, radius * 15.5, radius * 15.5, startAngle, endAngle);
    }
    pop();

    push();
    translate(13, 1011);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes11; i++) {
        let startAngle = i * dashAngle11 + rotationAngle11;
        let endAngle = startAngle + dashLength11 / radius;
        arc(0, 0, radius * 13.78, radius * 13.78, startAngle, endAngle);
    }
    pop();

    push();
    translate(13, 1011);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes8; i++) {
        let startAngle = i * dashAngle8 + rotationAngle8;
        let endAngle = startAngle + dashLength8 / radius;
        arc(0, 0, radius * 12.35, radius * 12.35, startAngle, endAngle);
    }
    pop();

    // 1st white planet dashed circle bg
    push();
    translate(476, 424);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes11; i++) {
        let startAngle = i * dashAngle11 + rotationAngle11;
        let endAngle = startAngle + dashLength11 / radius;
        arc(0, 0, radius * 3.4, radius * 3.4, startAngle, endAngle);
    }
    pop();

    push();
    translate(476, 424);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes10; i++) {
        let startAngle = i * dashAngle10 + rotationAngle10;
        let endAngle = startAngle + dashLength10 / radius;
        arc(0, 0, radius * 2.8, radius * 2.8, startAngle, endAngle);
    }
    pop();

    push();
    translate(476, 424);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes9; i++) {
        let startAngle = i * dashAngle9 + rotationAngle9;
        let endAngle = startAngle + dashLength9 / radius;
        arc(0, 0, radius * 2.3, radius * 2.3, startAngle, endAngle);
    }
    pop();

    // 2nd white planet dashed circle bg
    push();
    translate(683, 711);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes12; i++) {
        let startAngle = i * dashAngle12 + rotationAngle12;
        let endAngle = startAngle + dashLength12 / radius;
        arc(0, 0, radius * 3.3, radius * 3.3, startAngle, endAngle);
    }
    pop();

    push();
    translate(683, 711);
    stroke(57, 57, 91);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes11; i++) {
        let startAngle = i * dashAngle11 + rotationAngle11;
        let endAngle = startAngle + dashLength11 / radius;
        arc(0, 0, radius * 2.2, radius * 2.2, startAngle, endAngle);
    }
    pop();

    push();
    translate(683, 711);
    stroke(57, 57, 91,);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes10; i++) {
        let startAngle = i * dashAngle10 + rotationAngle10;
        let endAngle = startAngle + dashLength10 / radius;
        arc(0, 0, radius * 1.5, radius * 1.5, startAngle, endAngle);
    }
    pop();

    //blue planet 1
    push();
    smooth();
    stroke(255, 249, 227, 240);
    strokeWeight(4)
    fill(71, 180, 204, 240);
    ellipse(253, 113, 277, 277);
    pop();

    push();
    smooth();
    stroke(232, 69, 92, 240);
    strokeWeight(4);
    noFill();
    ellipse(253, 113, 298, 298);
    pop();

    push();
    smooth();
    stroke(71, 180, 204, 240);
    strokeWeight(4)
    noFill();
    ellipse(253, 113, 323, 323);
    pop();

    // dashed circle 1
    push();
    translate(253, 113);
    if (rotateEnabled) {
        rotationAngle1 += radians(0.3);
    }
    let dashAngle1 = (TWO_PI / numDashes1);
    stroke(255, 249, 227, 240);
    strokeWeight(3.5);
    noFill();
    for (let i = 0; i < numDashes1; i++) {
        let startAngle = i * dashAngle1 + rotationAngle1;
        let endAngle = startAngle + dashLength1 / radius;
        arc(0, 0, radius * 3.57, radius * 3.57, startAngle, endAngle);
    }
    pop();

    //dashed circle 2
    push();
    translate(253, 113);
    if (rotateEnabled) {
        rotationAngle2 -= radians(0.25);
    }
    let dashAngle2 = (TWO_PI / numDashes2);
    stroke(71, 180, 204, 240);
    strokeWeight(2.5);
    noFill();
    for (let i = 0; i < numDashes2; i++) {
        let startAngle = i * dashAngle2 + rotationAngle2;
        let endAngle = startAngle + dashLength2 / radius;
        arc(0, 0, radius * 4.16, radius * 4.16, startAngle, endAngle);
    }
    pop();

    //dashed circle inside 3
    push();
    translate(253, 113);
    if (rotateEnabled) {
        rotationAngle3 -= radians(0.1);
    }
    let dashAngle3 = (TWO_PI / numDashes3);
    stroke(255, 249, 227, 240);
    strokeWeight(3.5);
    noFill();
    for (let i = 0; i < numDashes3; i++) {
        let startAngle = i * dashAngle3 + rotationAngle3;
        let endAngle = startAngle + dashLength3 / radius;
        arc(0, 0, radius * 2.05, radius * 2.05, startAngle, endAngle);
    }
    pop();

    //dashed circle inside 4
    push();
    translate(253, 113);
    if (rotateEnabled) {
        rotationAngle4 += radians(0.2);
    }
    let dashAngle4 = (TWO_PI / numDashes4);
    stroke(255, 249, 227, 240);
    strokeWeight(3.5);
    noFill();
    for (let i = 0; i < numDashes4; i++) {
        let startAngle = i * dashAngle4 + rotationAngle4;
        let endAngle = startAngle + dashLength4 / radius;
        arc(0, 0, radius * 2.35, radius * 2.35, startAngle, endAngle);
    }
    pop();

    //dashed circle inside 5
    push();
    translate(253, 113);
    if (rotateEnabled) {
        rotationAngle5 -= radians(0.3);
    }
    let dashAngle5 = (TWO_PI / numDashes5);
    stroke(255, 249, 227, 240);
    strokeWeight(3.5);
    noFill();
    for (let i = 0; i < numDashes5; i++) {
        let startAngle = i * dashAngle5 + rotationAngle5;
        let endAngle = startAngle + dashLength5 / radius;
        arc(0, 0, radius * 2.57, radius * 2.57, startAngle, endAngle);
    }
    pop();

    //blue planet 2
    push();
    smooth();
    stroke(232, 69, 92, 220);
    strokeWeight(4)
    fill(71, 180, 204, 220);
    ellipse(1140, 713, 320, 320);
    pop();

    push();
    smooth();
    stroke(255, 249, 227, 220);
    strokeWeight(4)
    noFill();
    ellipse(1140, 713, 343, 343);
    pop();

    push();
    smooth();
    stroke(71, 180, 204, 220);
    strokeWeight(4)
    noFill();
    ellipse(1140, 713, 366, 366);
    pop();

    // dashed circle of the 2nd blue planet 13
    push();
    translate(1140, 713);
    if (rotateEnabled) {
        rotationAngle13 += radians(0.4);
    }
    let dashAngle13 = (TWO_PI / numDashes13);
    stroke(232, 69, 92, 220);
    strokeWeight(3.5);
    noFill();
    for (let i = 0; i < numDashes13; i++) {
        let startAngle = i * dashAngle13 + rotationAngle13;
        let endAngle = startAngle + dashLength13 / radius;
        arc(0, 0, radius * 2.56, radius * 2.56, startAngle, endAngle);
    }
    pop();

    // dashed circle of the 2nd blue planet 14
    push();
    translate(1140, 713);
    if (rotateEnabled) {
        rotationAngle14 -= radians(0.3);
    }
    let dashAngle14 = (TWO_PI / numDashes14);
    stroke(232, 69, 92, 220);
    strokeWeight(3.5);
    noFill();
    for (let i = 0; i < numDashes14; i++) {
        let startAngle = i * dashAngle14 + rotationAngle14;
        let endAngle = startAngle + dashLength14 / radius;
        arc(0, 0, radius * 2.82, radius * 2.82, startAngle, endAngle);
    }
    pop();

    // dashed circle of the 2nd blue planet 15
    push();
    translate(1140, 713);
    if (rotateEnabled) {
        rotationAngle15 += radians(0.4);
    }
    let dashAngle15 = (TWO_PI / numDashes15);
    stroke(232, 69, 92, 220);
    strokeWeight(3.5);
    noFill();
    for (let i = 0; i < numDashes15; i++) {
        let startAngle = i * dashAngle15 + rotationAngle15;
        let endAngle = startAngle + dashLength15 / radius;
        arc(0, 0, radius * 3.05, radius * 3.05, startAngle, endAngle);
    }
    pop();

    // dashed circle of the 2nd blue planet 16
    push();
    translate(1140, 713);
    if (rotateEnabled) {
        rotationAngle16 -= radians(0.3);
    }
    let dashAngle16 = (TWO_PI / numDashes16);
    stroke(232, 69, 92, 220);
    strokeWeight(3.5);
    noFill();
    for (let i = 0; i < numDashes16; i++) {
        let startAngle = i * dashAngle16 + rotationAngle16;
        let endAngle = startAngle + dashLength16 / radius;
        arc(0, 0, radius * 4, radius * 4, startAngle, endAngle);
    }
    pop();

    // dashed circle of the 2nd blue planet 17
    push();
    translate(1140, 713);
    if (rotateEnabled) {
        rotationAngle17 += radians(0.25);
    }
    let dashAngle17 = (TWO_PI / numDashes17);
    stroke(71, 180, 204, 220);
    strokeWeight(2.5);
    noFill();
    for (let i = 0; i < numDashes17; i++) {
        let startAngle = i * dashAngle17 + rotationAngle17;
        let endAngle = startAngle + dashLength17 / radius;
        arc(0, 0, radius * 4.6, radius * 4.6, startAngle, endAngle);
    }
    pop();

    //sun 
    push();
    smooth();
    noStroke();
    strokeWeight(4)
    fill(255, 249, 227, 70);
    ellipse(1133, 124, 561, 561);
    pop();

    push();
    smooth();
    noStroke();
    strokeWeight(4)
    fill(232, 69, 92, 90);
    ellipse(1133, 124, 374, 374);
    pop();

    push();
    smooth();
    noStroke();
    strokeWeight(4)
    fill(255, 249, 227, 220);
    ellipse(1133, 124, 224, 224);
    pop();

    push();
    smooth();
    noStroke();
    strokeWeight(4)
    fill(232, 69, 92, 220);
    ellipse(1133, 124, 161, 161);
    pop();

    push();
    smooth();
    noStroke();
    strokeWeight(4)
    fill(255, 249, 227, 220);
    ellipse(1133, 124, 103, 103);
    pop();

    // dashed circle of the sun 18
    push();
    translate(1133, 124);
    if (rotateEnabled) {
        rotationAngle18 -= radians(0.25);
    }
    let dashAngle18 = (TWO_PI / numDashes18);
    stroke(232, 69, 92, 220);
    strokeWeight(2.5);
    noFill();
    for (let i = 0; i < numDashes18; i++) {
        let startAngle = i * dashAngle18 + rotationAngle18;
        let endAngle = startAngle + dashLength18 / radius;
        arc(0, 0, radius * 1.8, radius * 1.8, startAngle, endAngle);
    }
    pop();

    // dashed circle of the sun 19
    push();
    translate(1133, 124);
    if (rotateEnabled) {
        rotationAngle19 += radians(0.2);
    }
    let dashAngle19 = (TWO_PI / numDashes19);
    stroke(255, 249, 227, 220);
    strokeWeight(2.5);
    noFill();
    for (let i = 0; i < numDashes19; i++) {
        let startAngle = i * dashAngle19 + rotationAngle19;
        let endAngle = startAngle + dashLength19 / radius;
        arc(0, 0, radius * 2.68, radius * 2.68, startAngle, endAngle);
    }
    pop();

    // dashed circle of the sun 20
    push();
    translate(1133, 124);
    if (rotateEnabled) {
        rotationAngle20 -= radians(0.08);
    }
    let dashAngle20 = (TWO_PI / numDashes20);
    stroke(255, 249, 227, 220);
    strokeWeight(2.5);
    noFill();
    for (let i = 0; i < numDashes20; i++) {
        let startAngle = i * dashAngle20 + rotationAngle20;
        let endAngle = startAngle + dashLength20 / radius;
        arc(0, 0, radius * 3, radius * 3, startAngle, endAngle);
    }
    pop();

    // dashed circle of the sun 21
    push();
    translate(1133, 124);
    if (rotateEnabled) {
        rotationAngle21 += radians(0.04);
    }
    let dashAngle21 = (TWO_PI / numDashes21);
    stroke(232, 69, 92, 220);
    strokeWeight(2.5);
    noFill();
    for (let i = 0; i < numDashes21; i++) {
        let startAngle = i * dashAngle21 + rotationAngle21;
        let endAngle = startAngle + dashLength21 / radius;
        arc(0, 0, radius * 3.97, radius * 3.97, startAngle, endAngle);
    }
    pop();

    // dashed circle of the sun 22
    push();
    translate(1133, 124);
    if (rotateEnabled) {
        rotationAngle22 -= radians(0.1);
    }
    let dashAngle22 = (TWO_PI / numDashes22);
    stroke(255, 249, 227, 220);
    strokeWeight(4);
    noFill();
    for (let i = 0; i < numDashes22; i++) {
        let startAngle = i * dashAngle22 + rotationAngle22;
        let endAngle = startAngle + dashLength22 / radius;
        arc(0, 0, radius * 5.82, radius * 5.82, startAngle, endAngle);
    }
    pop();

    // dashed circle of the sun 23
    push();
    translate(1133, 124);
    if (rotateEnabled) {
        rotationAngle23 += radians(0.08);
    }
    let dashAngle23 = (TWO_PI / numDashes23);
    stroke(255, 249, 227, 220);
    strokeWeight(3.2);
    noFill();
    for (let i = 0; i < numDashes23; i++) {
        let startAngle = i * dashAngle23 + rotationAngle23;
        let endAngle = startAngle + dashLength23 / radius;
        arc(0, 0, radius * 6.2, radius * 6.2, startAngle, endAngle);
    }
    pop();

    // dashed circle of the sun 24
    push();
    translate(1133, 124);
    if (rotateEnabled) {
        rotationAngle24 -= radians(0.05);
    }
    let dashAngle24 = (TWO_PI / numDashes24);
    stroke(255, 249, 227, 220);
    strokeWeight(2.2);
    noFill();
    for (let i = 0; i < numDashes24; i++) {
        let startAngle = i * dashAngle24 + rotationAngle24;
        let endAngle = startAngle + dashLength24 / radius;
        arc(0, 0, radius * 6.67, radius * 6.67, startAngle, endAngle);
    }
    pop();

    // dashed circle of the sun 25
    push();
    translate(1133, 124);
    if (rotateEnabled) {
        rotationAngle25 += radians(0.03);
    }
    let dashAngle25 = (TWO_PI / numDashes25);
    stroke(255, 249, 227, 220);
    strokeWeight(1.2);
    noFill();
    for (let i = 0; i < numDashes25; i++) {
        let startAngle = i * dashAngle25 + rotationAngle25;
        let endAngle = startAngle + dashLength25 / radius;
        arc(0, 0, radius * 7.3, radius * 7.3, startAngle, endAngle);
    }
    pop();

    //red planet
    push();
    smooth();
    stroke(71, 180, 204, 240);
    strokeWeight(8)
    fill(232, 69, 92, 240);
    ellipse(13, 1011, 1066, 1066);
    pop();

    push();
    smooth();
    stroke(255, 249, 227, 240);
    strokeWeight(8)
    noFill();
    ellipse(13, 1011, 1101, 1101);
    pop();

    push();
    smooth();
    stroke(232, 69, 92, 240);
    strokeWeight(8)
    noFill();
    ellipse(13, 1011, 1138, 1138);
    pop();

    // dashed circle of the red planet 26
    push();
    translate(13, 1011);
    if (rotateEnabled) {
        rotationAngle26 += radians(0.08);
    }
    let dashAngle26 = (TWO_PI / numDashes26);
    stroke(71, 180, 204, 240);
    strokeWeight(6.5);
    noFill();
    for (let i = 0; i < numDashes26; i++) {
        let startAngle = i * dashAngle26 + rotationAngle26;
        let endAngle = startAngle + dashLength26 / radius;
        arc(0, 0, radius * 12.03, radius * 12.03, startAngle, endAngle);
    }
    pop();

    // dashed circle of the red planet 27
    push();
    translate(13, 1011);
    if (rotateEnabled) {
        rotationAngle27 -= radians(0.05);
    }
    let dashAngle27 = (TWO_PI / numDashes27);
    stroke(232, 69, 92, 240);
    strokeWeight(5);
    noFill();
    for (let i = 0; i < numDashes27; i++) {
        let startAngle = i * dashAngle27 + rotationAngle27;
        let endAngle = startAngle + dashLength27 / radius;
        arc(0, 0, radius * 13.05, radius * 13.05, startAngle, endAngle);
    }
    pop();

    // dashed circle of the red planet 28
    push();
    translate(13, 1011);
    if (rotateEnabled) {
        rotationAngle28 -= radians(0.1);
    }
    let dashAngle28 = (TWO_PI / numDashes28);
    stroke(71, 180, 204, 240);
    strokeWeight(5);
    noFill();
    for (let i = 0; i < numDashes28; i++) {
        let startAngle = i * dashAngle28 + rotationAngle28;
        let endAngle = startAngle + dashLength28 / radius;
        arc(0, 0, radius * 10.38, radius * 10.38, startAngle, endAngle);
    }
    pop();

    // dashed circle of the red planet 29
    push();
    translate(13, 1011);
    if (rotateEnabled) {
        rotationAngle29 += radians(0.08);
    }
    let dashAngle29 = (TWO_PI / numDashes29);
    stroke(71, 180, 204, 240);
    strokeWeight(5);
    noFill();
    for (let i = 0; i < numDashes29; i++) {
        let startAngle = i * dashAngle29 + rotationAngle29;
        let endAngle = startAngle + dashLength29 / radius;
        arc(0, 0, radius * 10, radius * 10, startAngle, endAngle);
    }
    pop();

    // dashed circle of the red planet 30
    push();
    translate(13, 1011);
    if (rotateEnabled) {
        rotationAngle30 -= radians(0.05);
    }
    let dashAngle30 = (TWO_PI / numDashes30);
    stroke(71, 180, 204, 240);
    strokeWeight(5);
    noFill();
    for (let i = 0; i < numDashes30; i++) {
        let startAngle = i * dashAngle30 + rotationAngle30;
        let endAngle = startAngle + dashLength30 / radius;
        arc(0, 0, radius * 9.5, radius * 9.5, startAngle, endAngle);
    }
    pop();

    // dashed circle of the red planet 31
    push();
    translate(13, 1011);
    if (rotateEnabled) {
        rotationAngle31 += radians(0.03);
    }
    let dashAngle31 = (TWO_PI / numDashes31);
    stroke(71, 180, 204, 240);
    strokeWeight(5);
    noFill();
    for (let i = 0; i < numDashes31; i++) {
        let startAngle = i * dashAngle31 + rotationAngle31;
        let endAngle = startAngle + dashLength31 / radius;
        arc(0, 0, radius * 8.9, radius * 8.9, startAngle, endAngle);
    }
    pop();

    //white planet 1
    push();
    smooth();
    stroke(71, 180, 204, 230);
    strokeWeight(3)
    fill(255, 249, 227, 230);
    ellipse(476, 424, 136, 136);
    pop();

    push();
    smooth();
    stroke(232, 69, 92, 230);
    strokeWeight(2.5)
    noFill();
    ellipse(476, 424, 150, 150);
    pop();

    push();
    smooth();
    stroke(255, 249, 227, 230);
    strokeWeight(2.5)
    noFill();
    ellipse(476, 424, 163, 163);
    pop();

    // dashed circle of the 1st white planet 32
    push();
    translate(476, 424);
    if (rotateEnabled) {
        rotationAngle32 -= radians(0.2);
    }
    let dashAngle32 = (TWO_PI / numDashes32);
    stroke(71, 180, 204, 230);
    strokeWeight(2);
    noFill();
    for (let i = 0; i < numDashes32; i++) {
        let startAngle = i * dashAngle32 + rotationAngle32;
        let endAngle = startAngle + dashLength32 / radius;
        arc(0, 0, radius * 1.08, radius * 1.08, startAngle, endAngle);
    }
    pop();

    // dashed circle of the 1st white planet 33
    push();
    translate(476, 424);
    if (rotateEnabled) {
        rotationAngle33 += radians(0.4);
    }
    let dashAngle33 = (TWO_PI / numDashes33);
    stroke(71, 180, 204, 230);
    strokeWeight(2);
    noFill();
    for (let i = 0; i < numDashes33; i++) {
        let startAngle = i * dashAngle33 + rotationAngle33;
        let endAngle = startAngle + dashLength33 / radius;
        arc(0, 0, radius * 1.24, radius * 1.24, startAngle, endAngle);
    }
    pop();

    // dashed circle of the 1st white planet 34
    push();
    translate(476, 424);
    if (rotateEnabled) {
        rotationAngle34 -= radians(0.5);
    }
    let dashAngle34 = (TWO_PI / numDashes34);
    stroke(71, 180, 204, 230);
    strokeWeight(2);
    noFill();
    for (let i = 0; i < numDashes34; i++) {
        let startAngle = i * dashAngle34 + rotationAngle34;
        let endAngle = startAngle + dashLength34 / radius;
        arc(0, 0, radius * 1.82, radius * 1.82, startAngle, endAngle);
    }
    pop();

    // dashed circle of the 1st white planet 35
    push();
    translate(476, 424);
    if (rotateEnabled) {
        rotationAngle35 += radians(0.2);
    }
    let dashAngle35 = (TWO_PI / numDashes35);
    stroke(255, 249, 227, 230);
    strokeWeight(2);
    noFill();
    for (let i = 0; i < numDashes35; i++) {
        let startAngle = i * dashAngle35 + rotationAngle35;
        let endAngle = startAngle + dashLength35 / radius;
        arc(0, 0, radius * 2.1, radius * 2.1, startAngle, endAngle);
    }
    pop();

    //white planet 2
    push();
    smooth();
    stroke(232, 69, 92, 210);
    strokeWeight(2)
    fill(255, 249, 227, 210);
    ellipse(683, 711, 82, 82);
    pop();

    push();
    smooth();
    stroke(71, 180, 204, 210);
    strokeWeight(1.5)
    noFill();
    ellipse(683, 711, 91, 91);
    pop();

    push();
    smooth();
    stroke(255, 249, 227, 210);
    strokeWeight(1.5)
    noFill();
    ellipse(683, 711, 102, 102);
    pop();

    // dashed circle of the 2nd white planet 36
    push();
    translate(683, 711);
    if (rotateEnabled) {
        rotationAngle36 += radians(0.6);
    }
    let dashAngle36 = (TWO_PI / numDashes36);
    stroke(232, 69, 92, 210);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes36; i++) {
        let startAngle = i * dashAngle36 + rotationAngle36;
        let endAngle = startAngle + dashLength36 / radius;
        arc(0, 0, radius * 1.13, radius * 1.13, startAngle, endAngle);
    }
    pop();

    // dashed circle of the 2nd white planet 37
    push();
    translate(683, 711);
    if (rotateEnabled) {
        rotationAngle37 -= radians(0.3);
    }
    let dashAngle37 = (TWO_PI / numDashes37);
    stroke(255, 249, 227, 210);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < numDashes37; i++) {
        let startAngle = i * dashAngle37 + rotationAngle37;
        let endAngle = startAngle + dashLength37 / radius;
        arc(0, 0, radius * 1.37, radius * 1.37, startAngle, endAngle);
    }
    pop();

    // dashed circle of the 2nd white planet 38
    push();
    translate(683, 711);
    if (rotateEnabled) {
        rotationAngle38 -= radians(0.4);
    }
    let dashAngle38 = (TWO_PI / numDashes38);
    stroke(232, 69, 92, 210);
    strokeWeight(1.5);
    noFill();
    for (let i = 0; i < numDashes38; i++) {
        let startAngle = i * dashAngle38 + rotationAngle38;
        let endAngle = startAngle + dashLength38 / radius;
        arc(0, 0, radius * 0.75, radius * 0.75, startAngle, endAngle);
    }
    pop();

    // dashed circle of the 2nd white planet 39
    push();
    translate(683, 711);
    if (rotateEnabled) {
        rotationAngle39 += radians(0.2);
    }
    let dashAngle39 = (TWO_PI / numDashes39);
    stroke(232, 69, 92, 210);
    strokeWeight(1.5);
    noFill();
    for (let i = 0; i < numDashes39; i++) {
        let startAngle = i * dashAngle39 + rotationAngle39;
        let endAngle = startAngle + dashLength38 / radius;
        arc(0, 0, radius * 0.62, radius * 0.62, startAngle, endAngle);
    }
    pop();

    // IMAGE
    imageMode(CENTER);
    image(astronaut, x, y, 290, 290);

    x = lerp(x, mouseX, 0.05);
    y = lerp(y, mouseY, 0.05);
}

// Dots motion
class Dot {
    constructor(layer) {
        this.layer = layer;
        this.x = random(width);
        this.y = random(height);
        this.deltaX = -layer * 0.15;
        this.deltaY = 0;
    }
    move() {
        this.x += this.deltaX;
        this.y += this.deltaY;

        this.x = wrap(this.x, 0, width);
        this.y = wrap(this.y, 0, height);
    }
    draw() {

        if (this.layer == 1) {
            fill(57, 57, 91, 200);
        } else if (this.layer == 2) {
            fill(232, 69, 92, 200);
        } else if (this.layer == 3) {
            fill(255, 249, 227, 200);
        } else {
            fill(71, 180, 204, 200);
        }
        noStroke();
        circle(this.x, this.y, 60 / (8 - this.layer));

    }
}

function wrap(value, min, max) {
    if (value < min) {
        return max;
    } else if (value > max) {
        return min;
    }
    return value;
}

function mouseClicked() {
    rotateEnabled = !rotateEnabled; 
    isMoving = !isMoving;
    if (song.isPlaying()) {
        song.pause(); 

    } else {
        song.play();

    }
}