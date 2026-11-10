let a = 10;
let b = 0.1;
let c = 0.1;
let e = "yellow";
console.log(a);

frameRate(25)
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0,100,255);
  fill(10,195,9)
  triangle(200,200,300,300,100,300)
  fill(e)
  circle(mouseX,mouseY,a)
  fill(10,195,9)
  rect(0,300,400,150)

  b = b + c
  a = a + b;
  if(a>300)
    b = 0
  if (a>300)
    e ="orange"
  if(a>300)
    c = 0
}
 