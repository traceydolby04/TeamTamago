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
  // wrhiteFile to save file - Asynchronous
}

// test function
function test() {
  let anobj = readData();
  // console.log(anobj);
}

test();
