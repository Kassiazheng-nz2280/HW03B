function setup() {
  createCanvas(windowWidth, windowHeight);
}
let cDiam = 25;

let xOffset = 50;
let xSpacing = 80;

let yOffset = 50;
let ySpacing = 80;

function draw() {
  background('white');
  randomSeed(0);
  

  for (let xPos = 0; xPos <= width; xPos += xSpacing) {
    for (let yPos = 0; yPos <= height; yPos += ySpacing) {
      
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let x = random(-20, 20);
    let y = random(-20, 20);

    fill(r, g, b);

    if(random() < 0.5) {

      let diameter = 23;
      ellipse(xPos+x, yPos+y, diameter);

    } else {

      let diameter = 50;
      ellipse(xPos+x, yPos+y, diameter);

      
    }
    }
  }
}

    

    