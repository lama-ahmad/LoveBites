function Bubble(x, y, audioFile, stage, language, active) {
  this.x = x;
  this.y = y;
  this.col = color(255, 255, 255, 0);
  this.audioFile = audioFile;
  this.stage = stage;
  this.language = language;
  this.active = 0;

  this.display = function() {
  //draw an ellipse
    stroke(this.col);
    fill(this.col);
    ellipse(this.x, this.y, 48, 48);
  //display a heart above the ellipse
    image(pinkHeart, this.x, this.y, 40, 40);
  };


  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  };

  this.clicked = function() {
    //checks that the mouse is within a specifically placed circle
    var d = dist(mouseX, mouseY, this.x, this.y);
    //if the mouse is in the circle of radius 24
    if (d < 24) {
      //then change the circles colour
      this.col = color(195, 210, 213);

      //this.audioFile.play();
      if (this.audioFile.isPlaying() ) { // .isPlaying() returns a boolean
        this.audioFile.stop();
        this.col = color(255,255,255,0);
        this.active = 0;
      } else {
        this.audioFile.play();
        // console.log(this.audioFile);
        this.active = 1;
      }

    }
  };

  this.checkActive = function() {
    if(this.active == 1) {
      return true;
    }
    else {
      return false;
    }
  };

}
