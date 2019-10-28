const readline = require("readline");
const egg = require("./game.js");
const rw = require("./read-write.js");

// build a new egg OR build a new egg based on game_save json
// tom needs to be global
let tom = new egg.Egg("Babytchi"); // change this to a function per above

// set up a default gui - prompt
let eggPrompt = `Press enter to hatch your egg.`;

// lives in game loop
const updateGui = line => {
  // logic to update the prompt
  // - do stuff to prompt

  // -----
  // call a function to build the string
  eggPrompt = buildString(tom);

  rl.setPrompt(eggPrompt);
  console.clear();
  rl.prompt();
};
// lives in game loop
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: eggPrompt // prompt needs to be a string as per documentation
});

// NOTE: we can have user input via keypress instead of typing by using.

// following block is an example of how to redraw the prompt
// therefore letting user see current game state
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

// this is our current game loop. change it to a real one.
// this rl.on().on() is not necessary. It only validates user input.
rl.on("line", line => {
  // trims whitespace for user.
  switch (line.trim()) {
    // if user types save, game saves to file.
    case "save":
      rl.output.write("\x07"); // NOTE to Su: makes a beeping noise
      saveGame(tom);
      break;
    case "load":
      rl.output.write("\x07");
      loadGame(tom);
      break;
    default:
      // do nothing.
      break;
  }
  updateGui(line); // this could be setting the prompt inside the function
}).on("close", () => {
  // exit game logic
  console.log("Your pet is still living...");
  process.exit(0);
});

// this is what the user sees
function buildString(egg) {
  // hunger, discipline, happy
  //    Happy: [3], Hunger: [4], Discipline: [5]

  // string literal takes into account whitespace
  // use it to your advantage.

  const meters = `Birth: ${egg.birth}, Current Time: ${new Date().getTime()}
  Happy: ${egg.happy}, Hunger: ${egg.hunger}, Discipline:${egg.discipline}

  Type: [save] to Save Game - [load] to Load Game
  `;
  return meters;
}

// loads game state when user types load
function loadGame(egg) {
  // read data
  const data = rw.readData();
  // do something with data
  egg.birth = data.birth;
  // ...
}

// saves game state when user types "save"
function saveGame(egg) {
  // write to file
  rw.writeData(egg, "game_save.json");
}
