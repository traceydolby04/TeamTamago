function draw() {
  // updating
}
function handlestate() {}
function loop() {
  //
  // takes care of state in background.
  handlestate();
  draw(); // always draws no matter what based on time.

  // user i/o
}

// in entry file:
loop();
