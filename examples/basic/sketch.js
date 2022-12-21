/*
  p5.js 3D Anaglyph Effect 
  (for red / cyan glasses)

  Jenna deBoisblanc
  jdeboi.com
  12/20/22
*/

let anaglyph;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    anaglyph = createAnaglyph(this);

    // set the divergence (try between -1 & 1)
    anaglyph.setDivergence(-.5);
}

function draw() {
    anaglyph.draw(scene);
}

// this is the logic of the scene
// all usual methods from draw(), but call on the 
// pGraphics parameter
function scene(pg) {
    pg.background(0);
    pg.fill(255);
    pg.rotateY(frameCount / 200);
    pg.box(200);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    anaglyph.resize();
}

