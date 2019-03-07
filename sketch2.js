// An Array of Bubble objects
var bubbles;
// A Table object
var table;

let click = 0;
var img1;

function preload() {
    table = loadTable("data/voters2.csv", "header"); //variable
    img1 = loadImage("images/njFlag.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    loadData(); //to call a function, just write it with open and closed parenthases
}

function draw() {
    // background(255);
    image(img1, 0, 0, windowWidth, windowHeight)
    // Display all bubbles
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].display();
        bubbles[i].rollover(mouseX, mouseY);
        // bubbles[i].clicked();
    }

}

function loadData() {
    // Load CSV file into a Table object
    // "header" option indicates the file has a header row

    // The size of the array of Bubble objects is determined by the total number of rows in the CSV
    bubbles = []; 

    // You can access iterate over all the rows in a table
    for (var i = 0; i < table.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = table.getRow(i);
        // You can access the fields via their column name (or index)
        var count = row.get("Count");
        var county = row.get("County");
        var dems = row.get("Democrats");
        var reps = row.get("Republicans");
        var libs = row.get("Libertarian");
        var greens = row.get("Green");
        var other = row.get("Other");
        var unaff = row.get("Unaffiliated");
        var unkn = row.get("Unknown");
        var total = row.get("Total_People");

        var distance = 10000;

        for (var k=0; k<table.getRowCount(); k++) {
            if (k>=i){
                var row = table.getRow(k);
                var diam = Number(row.get("Total_People"));
                distance += diam;
            }
        }
        
        // distance += total/800;
        // Make a Bubble object out of the data read
        bubbles[i] = new Bubble(count, county, dems, reps, libs, greens, other, unaff, total, distance);
        
  }
}


class Bubble {

    constructor(a, b, c, d, e, f, g, h, i, j) {
        this.xPos = (Number(a))*(60);
        this.xPos2 = Number(i)/5000;
        this.name = b;
        fill(0, 255,0);
        this.dems = Number(c);
        fill(255,0,0);
        this.reps = Number(d);
        fill(0,0,255);
        this.libs = Number(e);
        fill(0,255,255);
        this.green = Number(f);
        fill(0);
        this.other = Number(g);
        this.unaff = Number(h);
        this.total = Number(i);
        this.diameter = (Number(i))/4000;
        this.distance = Number(j)/3500 +60;
        this.over = false;
        this.pressed = false;
        this.doubleClick = false;
    }

    
    // Checking if mouse is over the Bubble & Click
    rollover(px, py) {
        var d = dist(px, py, this.distance, windowHeight/2);
        if (d < this.diameter/2) {
            this.over = true;
            if (mouseIsPressed){
                this.pressed = true;
            }
        
        } else {
            this.over = false;
            if (mouseIsPressed){
                this.pressed = false;
                this.doubleClick = false;
            }
        }
    }


    // Display the Bubble
    display() {
        // linked list of party count and party name
        var parties = [[this.dems, "Democrats: "], [this.reps, "Republicans: "], [this.libs, "Libertarians: "],
                        [this.green, "Greens: "], [this.other, "Other: "], [this.unaff, "Unaffiliated: "]];



        // sort parties and their count by their count
        var sortedParties = parties.sort(function(a,b){return b[0]-a[0];});
        
        stroke(0);
        strokeWeight(2);
        fill(255);
        ellipse(this.distance, windowHeight/2, this.diameter, this.diameter);


        if (this.over) {
        


            textAlign(CENTER);
            rectMode(CENTER);
            noStroke();
            fill(255);

            rect(this.distance, (windowHeight/2-this.diameter/2)-40, 100, 50);
            fill(0)
            text(this.name, this.distance,(windowHeight/2-this.diameter/2)-40);
            text(this.total, this.distance,(windowHeight/2-this.diameter/2)-30);

            
            
            // display population breakdown by party, ranked


            fill(255);
            rect(this.distance, (windowHeight/2+this.diameter/2)+65, 120, 100);
            fill(0);

            textAlign(RIGHT);
            text(sortedParties[0][1], this.distance+15,(windowHeight/2+this.diameter/2)+30);
            textAlign(LEFT);
            text(sortedParties[0][0], this.distance+15,(windowHeight/2+this.diameter/2)+30);
            textAlign(RIGHT);
            text(sortedParties[1][1], this.distance+15,(windowHeight/2+this.diameter/2)+45);
            textAlign(LEFT);
            text(sortedParties[1][0], this.distance+15,(windowHeight/2+this.diameter/2)+45);
            textAlign(RIGHT);
            text(sortedParties[2][1], this.distance+15,(windowHeight/2+this.diameter/2)+60);
            textAlign(LEFT);
            text(sortedParties[2][0], this.distance+15,(windowHeight/2+this.diameter/2)+60);
            textAlign(RIGHT);
            text(sortedParties[3][1], this.distance+15,(windowHeight/2+this.diameter/2)+75);
            textAlign(LEFT);
            text(sortedParties[3][0], this.distance+15,(windowHeight/2+this.diameter/2)+75);
            textAlign(RIGHT);
            text(sortedParties[4][1], this.distance+15,(windowHeight/2+this.diameter/2)+90);
            textAlign(LEFT);
            text(sortedParties[4][0], this.distance+15,(windowHeight/2+this.diameter/2)+90);
            textAlign(RIGHT);
            text(sortedParties[5][1], this.distance+15,(windowHeight/2+this.diameter/2)+105);
            textAlign(LEFT);
            text(sortedParties[5][0], this.distance+15,(windowHeight/2+this.diameter/2)+105);


            // strokeWeight(2);

            // for (i=0; i<sortedParties.length;i++){
            //     textAlign(RIGHT);
            //     text(sortedParties[i][1], this.xPos,windowHeight/2+60+i*10);
            // }

            // for (i=0; i<sortedParties.length;i++){
            //     textAlign(LEFT);
            //     text(sortedParties[i][0], this.xPos,windowHeight/2+60+i*10);
            // }

        }
        // strokeWeight(2);

        // if (this.doubleClick){
        //     fill(255, 255, 0);
        //     ellipse(this.distance, windowHeight/2, this.diameter*2, this.diameter*2);

        // }

        if (this.pressed){

            textAlign(CENTER);
            rectMode(CENTER);
            noStroke();
            fill(255);

            rect(this.distance, (windowHeight/2-this.diameter/2)-100, 100, 50);
            fill(0)
            text(this.name, this.distance,(windowHeight/2-this.diameter/2)-100);
            text(this.total, this.distance,(windowHeight/2-this.diameter/2)-90);

            
            
            // display population breakdown by party, ranked


            fill(255);
            rect(this.distance, (windowHeight/2+this.diameter/2)+165, 120, 100);
            fill(0);

            textAlign(RIGHT);
            text(sortedParties[0][1], this.distance+15,(windowHeight/2+this.diameter/2)+130);
            textAlign(LEFT);
            text(sortedParties[0][0], this.distance+15,(windowHeight/2+this.diameter/2)+130);
            textAlign(RIGHT);
            text(sortedParties[1][1], this.distance+15,(windowHeight/2+this.diameter/2)+145);
            textAlign(LEFT);
            text(sortedParties[1][0], this.distance+15,(windowHeight/2+this.diameter/2)+145);
            textAlign(RIGHT);
            text(sortedParties[2][1], this.distance+15,(windowHeight/2+this.diameter/2)+160);
            textAlign(LEFT);
            text(sortedParties[2][0], this.distance+15,(windowHeight/2+this.diameter/2)+160);
            textAlign(RIGHT);
            text(sortedParties[3][1], this.distance+15,(windowHeight/2+this.diameter/2)+175);
            textAlign(LEFT);
            text(sortedParties[3][0], this.distance+15,(windowHeight/2+this.diameter/2)+175);
            textAlign(RIGHT);
            text(sortedParties[4][1], this.distance+15,(windowHeight/2+this.diameter/2)+190);
            textAlign(LEFT);
            text(sortedParties[4][0], this.distance+15,(windowHeight/2+this.diameter/2)+190);
            textAlign(RIGHT);
            text(sortedParties[5][1], this.distance+15,(windowHeight/2+this.diameter/2)+205);
            textAlign(LEFT);
            text(sortedParties[5][0], this.distance+15,(windowHeight/2+this.diameter/2)+205);
        }
    
    }
}