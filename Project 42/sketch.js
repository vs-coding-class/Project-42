var hr,min,sec;
var hrAngle,minAngle,secAngle;

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(255,255,255);
  translate(200,200);
  angleMode(DEGREES);

  hr = hour();
  min = minute();
  sec = second();

  if(hr <= 12){
    hr = hr;
  }
  else if(hr === 0){
    hr = 12;
  }
  else{
    hr = hr%12;
  }

  hrAngle = map(hr,1,12,0,360);
  minAngle = map(min,1,60,0,360);
  secAngle = map(sec,1,60,0,360);

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,0,-50);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,0,-75);
  pop();

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,0,-100);
  pop();
}