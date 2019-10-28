const readline = require("readline");
const egg = require("./game.js");
const rw = require("./read-write.js");

// rw.readData(); // this will read json save
// rw.writeData(); // this will save json

// build a new egg OR build a new egg based on game_save json
// tom needs to be global
let tom = new egg.Egg("Babytchi"); // change this to a function per above

// set up a default gui - prompt
let eggPrompt = `Press enter to hatch your egg.`;

// lives in game loop
const updateGui = line => {
  // logic to update the prompt
  // - do stuff to prompt

  // following block is an example of how to redraw the prompt
  // therefore letting user see current game state
  // -----
  // call a function to build the string
  eggPrompt = buildString(tom);

  rl.setPrompt(eggPrompt);
  console.clear();
};
// game loop
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: eggPrompt // prompt needs to be a string as per documentation
});

// NOTE: we can have user input via keypress instead of typing by using.

// let i = 0;
// while (i < 100000) {
//   rl.setPrompt(i);
//   rl.prompt();
//   i++;
// }

// lives in game loop
// clear the current console
console.clear();
// draw the initial prompt.

rl.prompt();
// lives in game loop
// this is handle state
rl.on("line", line => {
  updateGui(line); // this could be setting the prompt inside the function
  rl.prompt();
}).on("close", () => {
  // exit game logic
  console.log("Your pet is still living...");
  process.exit(0);
});

// this is what the user sees
function buildString(egg) {
  // hunger, discipline, happy
  //    Happy: [3], Hunger: [4], Discipline: [5]
  const meters = `Happy: ${egg.happy}, Hunger: ${egg.hunger}, Discipline:${egg.discipline}\n`;
  return meters;
}
