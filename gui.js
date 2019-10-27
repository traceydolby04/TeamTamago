const readline = require("readline");

// REMOVE
let i = 0; // for test - remove

// set up a default gui - prompt
let gui = `Tomogatchi Simulator ${i++} >`;

const updateGui = line => {
  // logic to update the gui
  // - do stuff to gui

  // following block is an example of how to redraw the prompt
  // therefore letting user see current game state

  gui = `Tomogatchi Simulator ${i++} >`;
  rl.setPrompt(gui);
  console.clear();
  // REMOVE
  console.log(`This is what was typed: ${line}`); // for test - remove
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: gui, // prompt needs to be a string as per documentation
  historySize: 0
});

// clear the current console
console.clear();
// draw the initial prompt.
rl.prompt();

rl.on("line", line => {
  // input logic
  // Prompt gets updated after every user input.
  // It can also be updated when certain conditions are met in outside functions
  // add switch case for keyboard input

  // --------------
  // - This can be an outside func
  updateGui(line); // this could be setting the prompt inside the function

  //
  // --------------

  rl.prompt();
}).on("close", () => {
  // exit game logic
  console.log("Your pet is still living...");
  process.exit(0);
});

// keypress code -
// Probably won't have time to implement.
