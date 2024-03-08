let mainImg;
let hackedImg;
let img; 

function setup() {
	createCanvas(windowWidth, windowHeight);
    mainImg = new Sprite(windowWidth / 2, windowHeight / 2, 50);
    mainImg.collider = 'kinestetic'
    mainImg.img = "img/android-chrome-512x512.png"
    mainImg.d = 370;
    mainImg.layer = 2;

    world.gravity.y = 3;

    // hackedImg = new Sprite();
    // hackedImg.collider = 'none';
    // hackedImg.offset.x = 20;

    // hackedImg.img = "android-chrome-512x512.png"
    // hackedImg.img.loadPixels();
    // //for every pixel, if alpha is on make it green
    // for (let x = 0; x < hackedImg.img.width; x++){
    //     for (let y = 0; y < hackedImg.img.height; y++){
    //         hackedImg.img.set(x, y, color(hackedImg.img.pixels[]));
    //     }
    // }
    // hackedImg.img.updatePixels();
}

function draw() {
    background(10, 50, 100);
    if (kb.presses("left")) mainImg.spriteRotation = 1;
    if (kb.presses("right")) mainImg.spriteRotation = -1;
}

function mouseDragged(){
    hackedImg = new Sprite(mouseX, mouseY, random(7, 15));
    hackedImg.color = "white";
    hackedImg.stroke = color(0, random(200, 255), random(0, 150));
    hackedImg.vel.x = random(-1, 1);
    hackedImg.vel.y = random(-2, 2);
    hackedImg.layer = 1;

}

function touchMoved(){
    hackedImg = new Sprite(mouseX, mouseY, random(7, 15));
    hackedImg.color = "white";
    hackedImg.stroke = color(0, random(200, 255), random(0, 150));
    hackedImg.vel.x = random(-1, 1);
    hackedImg.vel.y = random(-2, 2);
    hackedImg.layer = 1;

}

