const fs = require("fs");
// game file name
const saveFile = "game_save.json";

// can use a global method like require('./game_save.json')
// drawbacks: can only be read once.
// - if the file needs to be updated and re-read don't use this.
// file must have json extension or doesn't get treated as json

// read saved game file
function readData() {
  try {
    // readFileSync to load data at start of game
    // readFile for updating game state

    // parse the file and turn into an object.
    const data = JSON.parse(fs.readFileSync(saveFile));
    // console.log(typeof data);
    if (!data) throw new Error();
    return data;
    // return object
  } catch (error) {
    // no file exists
    // do something with error
    // perhaps loop around and ask to start a new game?
    console.log("no saved file exists");
  }
}

function writeData(data) {
  // writeFileSync to save file  - Synchronous
  // writeFile to save file - Asynchronous
  const output = JSON.stringify(data);
  // create a new game save, change string to variable.
  fs.writeFile("game_save.json", output, e => {
    // turn this into try catch for error handling
    if (e) throw e;
  });
}

module.exports = {
  writeData,
  readData
};
