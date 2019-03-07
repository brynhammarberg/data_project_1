// An Array of Bubble objects
var bubbles;
// A Table object
var table;


function preload() {
    table = loadTable("data/Book1.csv", "header"); //variable
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    loadData(); //to call a function, just write it with open and closed parenthases
}

function draw() {
  background(255);
  var diam = 0;
  for (i=0;i<5;i++){
    // if (i == 0){
      // diam = 10+10*i;
      ellipse(diam+(10+10*i)/2, 30, 10+10*i, 10+10*i);

      diam += 10+10*i;
  }
  
}

function loadData() {
  // Load CSV file into a Table object
  // "header" option indicates the file has a header row

  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  bubbles = []; 

  // You can access iterate over all the rows in a table
  for (var j = 0; j < table.getRowCount(); j++) { //for every row in the csv file, read that row
      var row = table.getRow(j);
      // You can access the fields via their column name (or index)
      var diameter = row.get("width");


      // Make a Bubble object out of the data read
      bubbles[j] = new Bubble(diameter);
  }
}


class Bubble {
  constructor(diameter){
    this.diameter = Number(diameter);
  }

}