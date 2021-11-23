
function setup() {
  //put setup code here
  createCanvas(500, 500);
  pg = createGraphics(100, 100);
}

function draw() {
  //put drawing code here
  fill(0, 4);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 40, 60);

  pg.background(500);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX - 300, mouseY - 90, 400, 400);

}
