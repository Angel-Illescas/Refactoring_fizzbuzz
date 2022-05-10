const fs = require("fs");

// SIN LA MODULARIZACIÓN SERIA ÉSTO:

/* // Part 1 Read json file ===========================
const rawdata = fs.readFileSync("explorers.json");
const explorers = JSON.parse(rawdata);

console.log("I´m here")
//console.log(explorers) // This is a explorer´s list  */

//     VVVV

class Reader{

static readJsonFile (path){
    const rawdata = fs.readFileSync(path);
    return JSON.parse(rawdata);
}
};

module.exports = Reader