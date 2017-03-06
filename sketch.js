/*
6.7 p5.js clicking on objects
Code for video https://vimeo.com/channels/learningp5js/141919520
*/
var curStage = 0;
var enteredHeart;

//SOUND ARRAYS
//make an array called spanish that is empty and then populate it with sound file names
var k;
var spanish = [];
var arabic = [];
var korean = [];
var pinkHeart;
//////////////////////////////////////////
//P5 section
//an empty array is made called bubbles

var bubbles = [];
var activeHearts = [];

function preload() {  // preload() runs once
  // in the preload we will load the sound files and the heart image file.
//hopefully loads an array of sounds
  for (k = 0; k < 5; k++) {
    //append into the array spanish the filename spanish.wav with the value of k preceeding it
    spanish[k] = loadSound("sounds/spanish"+k+".wav");
    arabic[k] = loadSound("sounds/arabic"+k+".wav");
    korean[k] = loadSound("sounds/korean"+k+".wav");
  }
  // song = loadSound('1spanish.wav');
  pinkHeart = loadImage('pink_heart.svg');
  //position the reference point of the image to its center instead of top corner
  imageMode(CENTER);
}

function setup() {

    createCanvas(windowWidth, windowHeight);

  //make for loop thaat generates random coordinates for bubbles and makes new bubbles
  for (var i = 0; i < 5; i++) {
    //var x will be a random number less than the width
    var x = random(width-10);
    //var x will be a random number less than the height
    var y = random(height-10);
    //make a new bubble object in the bubbles array with the properties of the class Bubble
    var spBubble = new Bubble(x, y, spanish[i], i, "spanish", 0);
    bubbles.push(spBubble);
    var arBubble = new Bubble(x, y, arabic[i], i, "arabic", 0);
    bubbles.push(arBubble);
    var koBubble = new Bubble(x, y, korean[i], i, "korean", 0);
    bubbles.push(koBubble);
  }

}

//

//when the mouse is clicked
function mousePressed() {
  //run the clicked function on a bubble position i stored in the bubbles array. the var i.... = allows
  //for selecting any bubble in that array (for every bubble object in positions above and including 0)
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
    }

}


//display the bubbles stored in the bubbles array
function draw() {
  background(255);
  //for every bubble in bubbles array:
  for (var i = 0; i < bubbles.length; i++) {
    //animate the bubbles
    bubbles[i].move();
    //display the bubbles only that are greater than or equal to the current stage
    if (bubbles[i].stage >= curStage) {
        bubbles[i].display();
  }
}
}

function keyPressed() {
  for (var i = 0; i<bubbles.length; i++)
    if (bubbles[i].checkActive() == true && bubbles[i].stage == curStage && keyCode == ENTER ) {
      enteredHeart = bubbles[i];
      console.log(enteredHeart);
      curStage++; // move on to the next stage, hearts of the previous stage will disappear
    }
    else {
      console.log("not the right stage");
    }
};
