/* -------------------------
💎 Birthstone Finder
----------------------------
Create a program that determines the birthstone for a month inputted by the user. 
// Check the README.md file for instructions.

------------------------- */


// allows file to access the file system node module (this is built into node)


// get month from command line
// get user input, we want the user to be able to pass a value
// into the file when we run a file with node.
// This takes the third item in the array (the first two are built into the array by default )
const month = process.argv[2];


// __________________________________________
// birthstone data object
const birthstones = {
  January: "Garnet",
  February: "Amethyst",
  March: "Aquamarine",
  April: "Diamond",
  May: "Emerald",
  June: "Pearl, Alexandrite, or Moonstone",
  July: "Ruby",
  August: "Peridot",
  September: "Sapphire",
  October: "Opal or Tourmaline",
  November: "Topaz or Citrine",
  December: "Tanzanite, Zircon, or Turquoise",
};


// check if the month is valid
if (birthstones[month]){
  console.log(`The birthstone for ${month} is ${birthstones[month]}.`);
} else {
  console.log("Invalid month. Please enter a valid month.");
}




// Tested code in terminal :

// node warmup-birthstone-finder.js January
// output is : The birthstone for January is Garnet.

// node warmup-birthstone-finder.js
// output: The birthstone for July is Ruby.

// node warmup-birthstone-finder.js january
// Invalid month. Please enter a valid month.