
PImage img;
int smallPoint, largePoint;

void setup() {
  size(window.innerWidth, window.innerHeight);
  img = loadImage("img/bg_back.jpg");
  smallPoint = 4;
  largePoint = 40;
  noStroke();
  background(68);
}

void draw() {
  int number = 0;
  while(number < 5) {
    number++;
    int maxSizeOfRectangles = 500;
    int minSizeOfRectangles = 10;
    float pointillize = map(random(minSizeOfRectangles, maxSizeOfRectangles), 0, width, smallPoint, largePoint);
    int x = int(random(0, window.innerWidth));
    int y = int(random(0, window.innerHeight));
    color pix = img.get(x, y);
    fill(pix, 128);
    rect(x, y, pointillize, pointillize);
  }
}