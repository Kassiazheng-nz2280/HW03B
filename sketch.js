function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  randomSeed(1000);
  for (let i = 0; i < 100; i++) {
    
    let circleSize = random(10, 100);
    
    let x = random(width);
    let y = random(height);
  
    let r = random(255);
    let g = random(255);
    let b = random(255);

    fill(r, g, b);

    ellipse(x, y, circleSize, circleSize);

    

    
  }
}
  