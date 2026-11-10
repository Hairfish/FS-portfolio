//lines
let start = 50;
let finish = 550;

//bg color
let bgcolor = [60,210,20];

//segments
let spacing = 20;
let segmentSize = 50;

//eyes
let eyeSize = 15;

//contestants
let catermater = 3;
let caterpillarEnds = [];
let caterLength = [];

//default
let isRacing = false;

//setup
function setup()
{
    createCanvas(600, 400);
    frameRate(6);

    for (let i=0; i < catermater; i++)
    {
    caterpillarEnds.push(start);
    caterLength.push(floor(random(3,8)));
    }

}


//draw
function draw()
{

    background(bgcolor[0], bgcolor[1], bgcolor[2]);

    startline();

    endline();


    if (isRacing === true)
    {
        moveit();
    }
    else
    {
        writeStart();
    }

    caters();

    chickendinner();

}


//startline
function startline()
{
    stroke("black");
    fill("black");
    rect(start, 0, 5, height);
}

//finishline
function endline()
{
    stroke("red");
    fill("red");
    rect(finish, 0, 15, height);
}


//starting text
function writeStart()
{
    textSize(24);
    textAlign(CENTER);
    fill(255);
    stroke("black")

    text(" 🏁 Click to start!", width / 2, height / 2);
}


//caterpillar single
function caterpall(x,y, segments)
{

  for (let i = 0; i < segments; i += 1)
  {
    fill("rgb(0, 204, 255)");
    stroke("rgb(0, 102, 204)");
    strokeWeight(1);
    circle(x, y, 50);

    x += spacing;

  }
 
  // Draw the caterpillar's eyes.
  fill("black);
  stroke("white");
  strokeWeight(3);
  circle(x, y - eyeSize, eyeSize);
  circle(x - eyeSize, y - eyeSize, eyeSize);
}


//caterpillarSSSSS
function caters()
{
    let padding = height/catermater;
    for (let i = 0; i < catermater; i += 1)
    {

        let y = (i + 0.5) * padding;



     caterpall(caterpillarEnds[i], y, caterLength[i]);

    }
}

//mouse race
function mousePressed()
{
    if (!isLooping())
    {
        for (let i =0; i<catermater; i++)
        {
            caterpillarEnds[i] = start;
        }

        isRacing = false;

        loop();
    }
    else
    {
    isRacing = true;
    }
}

// cater move
function moveit()
{
    for (let i = 0; i < catermater; i += 1)
    {
        let move = round(random(5,30));
        caterpillarEnds[i] += move;
    }
}


//check winner
function chickendinner()
{
    for (let i = 0; i < caterpillarEnds.length; i += 1)
    {
        if (caterpillarEnds[i] + 80>= finish)
        {
            textSize(24);
            textAlign(CENTER);
            fill(255);
            stroke("black")

            text("Caterpillar " + (i + 1) + " wins!", (width / 2), (height / 2)-13);
            text("(click to reset)", (width / 2), (height / 2)+13);

            noLoop();
        }
    }
}