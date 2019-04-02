// An Array of Bubble objects
var bubbles;
var bubbles1;
// A Table object
var table;
var table1;
var table2;
var table3;
var table4;
var table5;
var table6;
var table7;
var table8;
var table9;
var table10;
var table11;
var table12;
var table13;
var table14;
var table15;
var table16;
var table17;
var table18;
var table19;
var table20;


var mgr;


function preload() {
    table = loadTable("data/Atlantic.csv", "header");
    table1 = loadTable("data/Bergen.csv", "header");
    table2 = loadTable("data/Burlington.csv", "header");
    table3 = loadTable("data/Camden - Sheet1.csv", "header");
    table4 = loadTable("data/Cape May - Sheet1.csv", "header");
    table5 = loadTable("data/Cumberland - Sheet1.csv", "header");
    table6 = loadTable("data/Essex - Sheet1.csv", "header");
    table7 = loadTable("data/Gloucester - Sheet1.csv", "header");
    table8 = loadTable("data/Hudson - Sheet1.csv", "header");
    table9 = loadTable("data/Hunterdon - Sheet1.csv", "header");
    table10 = loadTable("data/Mercer - Sheet1.csv", "header");
    table11 = loadTable("data/Middlesex - Sheet1.csv", "header");
    table12 = loadTable("data/Monmouth - Sheet1.csv", "header");
    table13 = loadTable("data/Morris - Sheet1.csv", "header");
    table14 = loadTable("data/Ocean - Sheet1.csv", "header");
    table15 = loadTable("data/Passaic - Sheet1.csv", "header");
    table16 = loadTable("data/Salem - Sheet1.csv", "header");
    table17 = loadTable("data/Somerset - Sheet1.csv", "header");
    table18 = loadTable("data/Sussex - Sheet1.csv", "header");
    table19 = loadTable("data/Union - Sheet1.csv", "header");
    table20 = loadTable("data/Warren - Sheet1.csv", "header");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    loadData(); //to call a function, just write it with open and closed parenthases

    mgr = new SceneManager();

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene ( Animation1 );
    mgr.addScene ( Animation2 );
    mgr.addScene ( Animation3 );
    mgr.addScene ( Animation4 );
    mgr.addScene ( Animation5 );
    mgr.addScene ( Animation6 );
    mgr.addScene ( Animation7 );
    mgr.addScene ( Animation8 );
    mgr.addScene ( Animation9 );
    mgr.addScene ( Animation10 );
    mgr.addScene ( Animation11 );
    mgr.addScene ( Animation12 );
    mgr.addScene ( Animation13 );
    mgr.addScene ( Animation14 );
    mgr.addScene ( Animation15 );
    mgr.addScene ( Animation16 );
    mgr.addScene ( Animation17 );
    mgr.addScene ( Animation18 );
    mgr.addScene ( Animation19 );
    mgr.addScene ( Animation20 );
    mgr.addScene ( Animation21 );
    mgr.addScene ( Animation22 );
    mgr.addScene ( Animation23 );
    mgr.addScene ( Animation24 );

    mgr.showNextScene();
}

function draw() {

    mgr.draw();

}

function mousePressed()
{
    mgr.mousePressed();
}

function keyPressed()
{
    if (keyCode === BACKSPACE) {
        mgr.showScene( Animation3 );
    } 
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( Animation4 );
            break;
        case '2':
            mgr.showScene( Animation5 );
            break;
        case '3':
            mgr.showScene( Animation6 );
            break;
        case '4':
            mgr.showScene( Animation7 );
            break;
        case '5':
            mgr.showScene( Animation8 );
            break;
        case '6':
            mgr.showScene( Animation9 );
            break;
        case '7':
            mgr.showScene( Animation10 );
            break;
        case '8':
            mgr.showScene( Animation11 );
            break;
        case '9':
            mgr.showScene( Animation12 );
            break;
        case '0':
            mgr.showScene( Animation13 );
            break;
        case 'q':
            mgr.showScene( Animation14 );
            break;
        case 'w':
            mgr.showScene( Animation15 );
            break;
        case 'e':
            mgr.showScene( Animation16 );
            break;
        case 'r':
            mgr.showScene( Animation17 );
            break;
        case 't':
            mgr.showScene( Animation18 );
            break;
        case 'y':
            mgr.showScene( Animation19 );
            break;
        case 'u':
            mgr.showScene( Animation20 );
            break;
        case 'i':
            mgr.showScene( Animation21 );
            break;
        case 'o':
            mgr.showScene( Animation22 );
            break;
        case 'p':
            mgr.showScene( Animation23 );
            break;
        case '[':
            mgr.showScene( Animation24 );
            break;
    }
    
    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}


// =============================================================
// =                         BEGIN SCENES                      = 
// =============================================================


// introduction scene
function Animation1(){
    var textX;
    var textY;

    this.enter = function(){
        textX = 10;
        textY = 0;

        background(231, 187, 65);
        textAlign(CENTER);
        textFont('Merriweather');
        rectMode(CENTER);

        fill(251, 207, 85);
        noStroke();
        rect(windowWidth/2, windowHeight/2, windowWidth-20, windowHeight-20);

        fill(57, 62, 65)
        textSize(35);
        text("In 2000 there were 4,710,746 New Jersians registered to vote.", width / 2, height / 2 - 100);
        textSize(45);
        text("Today, there are nearly 5,000,000.\n", width / 2, height / 2);
        textSize(35);
        text("How has New Jersey's electorate changed in the past two decades?\n", width / 2, height / 2 + 100);
        
        
        textSize(14);
        text("click to find out\n\n", width/2, height - 20);
    }


    this.mousePressed = function(){
        this.sceneManager.showNextScene();
    }
}

// explanation scene
function Animation2()
{
    this.draw = function()
    {
        // background(147, 181, 198);
        background(231, 187, 65);
        rectMode(CENTER);
        textAlign(CENTER);
        textSize(30);

        // fill(177, 201, 218);
        fill(251, 207, 85);
        noStroke();
        rect(windowWidth/2, windowHeight/2, windowWidth-20, windowHeight-20);


        fill(188, 0, 75);
        rect(100, windowHeight/2, 30, 280);
        text("Lean\nRepublican", 100, windowHeight/2+250);

        fill(130, 0, 130);
        rect(200, windowHeight/2, 30, 350);
        text("Swing\nCounty", 200, windowHeight/2-250);


        fill(40, 0, 188);
        rect(300, windowHeight/2, 30, 320);
        text("Lean\nDemocrat", 300, windowHeight/2+250);

        textSize(35);
        fill(57, 62, 65)
        text("Clicking on a bar gives more\ninfo from that year & county", windowWidth/2, windowHeight/2);

        fill(130, 0, 130);
        textSize(100);
        rect(windowWidth*(3/4)+120, windowHeight/2, windowWidth*1/4, windowHeight-40)
        fill(240);
        text("2008", windowWidth*(3/4)+120,120)
        textSize(30);
        text("Dem: 1038", windowWidth*(3/4)+120, windowHeight/2+80);
        text("Rep: 847", windowWidth*(3/4)+120, windowHeight/2+120);
        text("Unaff: 2201", windowWidth*(3/4)+120, windowHeight/2+160);
        text("Total: 11021", windowWidth*(3/4)+120, windowHeight/2+200);

        textSize(14);
        fill(57, 62, 65)
        text("click to continue\n\n", width/2, height - 20);
    }

    this.mousePressed = function(){
        this.sceneManager.showNextScene();
    }

}

// directory scene
function Animation3()
{
    this.draw = function()
    {
        background(231, 187, 65);
        rectMode(CENTER);
        textAlign(CENTER);

        fill(251, 207, 85);
        noStroke();
        rect(windowWidth/2, windowHeight/2, windowWidth-20, windowHeight-20);

        
        fill(57, 62, 65)
        textSize(45);
        text("Choose a county, and click delete to return here", windowWidth/2, 70);


        textSize(35);
        text("Atlantic: 1", windowWidth/2-400, windowHeight/2-130);
        text("Bergen: 2", windowWidth/2-400, windowHeight/2-70);
        text("Burlington: 3", windowWidth/2-400, windowHeight/2-10);
        text("Camden: 4", windowWidth/2-400, windowHeight/2+50);
        text("Cape May: 5", windowWidth/2-400, windowHeight/2+110);
        text("Cumberland: 6", windowWidth/2-400, windowHeight/2+170);
        text("Essex: 7", windowWidth/2-400, windowHeight/2+230);

        text("Gloucester: 8", windowWidth/2, windowHeight/2-130);
        text("Hudson: 9", windowWidth/2, windowHeight/2-70);
        text("Hunterdon: 0", windowWidth/2, windowHeight/2-10);
        text("Mercer: Q", windowWidth/2, windowHeight/2+50);
        text("Middlesex: W", windowWidth/2, windowHeight/2+110);
        text("Monmouth: E", windowWidth/2, windowHeight/2+170);
        text("Morris: R", windowWidth/2, windowHeight/2+230);

        text("Ocean: T", windowWidth/2+400, windowHeight/2-130);
        text("Passaic: Y", windowWidth/2+400, windowHeight/2-70);
        text("Salem: U", windowWidth/2+400, windowHeight/2-10);
        text("Somerset: I", windowWidth/2+400, windowHeight/2+50);
        text("Sussex: O", windowWidth/2+400, windowHeight/2+110);
        text("Union: P", windowWidth/2+400, windowHeight/2+170);
        text("Warren: [", windowWidth/2+400, windowHeight/2+230);
    }

    this.keyPressed = function(){
        text(keyCode, textX, textY += 10);
        if ( textY > height )
        {
            textX += 20;
            textY = 0;
        }
    }

}

// begin all county scenes

function Animation4()
{
    this.draw = function()
    {
        background(231, 187, 65);
        // Display all bubbles
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].display();
            bubbles[i].rollover(mouseX, mouseY);
        }
    }
    
}

function Animation5()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles1.length; i++) {
            bubbles1[i].display();
            bubbles1[i].rollover(mouseX, mouseY);
        }
    }
    
}

function Animation6()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles2.length; i++) {
            bubbles2[i].display();
            bubbles2[i].rollover(mouseX, mouseY);
        }
    }
    
}

function Animation7()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles3.length; i++) {
            bubbles3[i].display();
            bubbles3[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation8()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles4.length; i++) {
            bubbles4[i].display();
            bubbles4[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation9()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles5.length; i++) {
            bubbles5[i].display();
            bubbles5[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation10()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles6.length; i++) {
            bubbles6[i].display();
            bubbles6[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation11()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles7.length; i++) {
            bubbles7[i].display();
            bubbles7[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation12()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles8.length; i++) {
            bubbles8[i].display();
            bubbles8[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation13()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles9.length; i++) {
            bubbles9[i].display();
            bubbles9[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation14()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles10.length; i++) {
            bubbles10[i].display();
            bubbles10[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation15()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles11.length; i++) {
            bubbles11[i].display();
            bubbles11[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation16()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles12.length; i++) {
            bubbles12[i].display();
            bubbles12[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation17()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles13.length; i++) {
            bubbles13[i].display();
            bubbles13[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation18()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles14.length; i++) {
            bubbles14[i].display();
            bubbles14[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation19()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles15.length; i++) {
            bubbles15[i].display();
            bubbles15[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation20()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles16.length; i++) {
            bubbles16[i].display();
            bubbles16[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation21()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles17.length; i++) {
            bubbles17[i].display();
            bubbles17[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation22()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles18.length; i++) {
            bubbles18[i].display();
            bubbles18[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation23()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles19.length; i++) {
            bubbles19[i].display();
            bubbles19[i].rollover(mouseX, mouseY);
        }
    }
    
}
function Animation24()
{
    this.draw = function()
    {
        background(	231, 187, 65);
        // Display all bubbles1
        for (var i = 0; i < bubbles20.length; i++) {
            bubbles20[i].display();
            bubbles20[i].rollover(mouseX, mouseY);
        }
    }
    
}

// load all data for each county

function loadData() {
    // Load CSV file into a Table object
    // "header" option indicates the file has a header row

    // The size of the array of Bubble objects is determined by the total number of rows in the CSV
    bubbles = []; 
    var a = table;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }

  bubbles1 = []; 
    var a = table1;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles1[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }

  bubbles2 = []; 
    var a = table2;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles2[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }

  bubbles3 = []; 
    var a = table3;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles3[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles4 = []; 
    var a = table4;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles4[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles5 = []; 
    var a = table5;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles5[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }

  bubbles6 = []; 
    var a = table6;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles6[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles7 = []; 
    var a = table7;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles7[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles8 = []; 
    var a = table8;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles8[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles9 = []; 
    var a = table9;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles9[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles10 = []; 
    var a = table10;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles10[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }

  bubbles11 = []; 
    var a = table11;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles11[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles12 = []; 
    var a = table12;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles12[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles13 = []; 
    var a = table13;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles13[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles14 = []; 
    var a = table14;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles14[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles15 = []; 
    var a = table15;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles15[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles16 = []; 
    var a = table16;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles16[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles17 = []; 
    var a = table17;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles17[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles18 = []; 
    var a = table18;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles18[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles19 = []; 
    var a = table19;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles19[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
  bubbles20 = []; 
    var a = table20;
    // You can access iterate over all the rows in a table
    for (var i = 0; i < a.getRowCount(); i++) { //for every row in the csv file, read that row
        var row = a.getRow(i);
        // You can access the fields via their column name (or index)
        var year = row.get("Year");
        var unaff = row.get("UNA")
        var dems = row.get("DEM");
        var reps = row.get("REP");
        var total = row.get("TOTAL");
        var county = row.get("COUNTY");

        
        // Make a Bubble object out of the data read
        bubbles20[i] = new Bubble(total, dems, reps, unaff, year, county);
        
  }
}



class Bubble {

    constructor(a, b, c, d, e, f) {
        this.total = Number(a);
        this.dems = Number(b);
        this.reps = Number(c);
        this.unaff = Number(d);
        this.year = e;
        this.year_num = Number(e);
        this.county = f;
        this.over = false;
        this.pressed = false;
        this.size = 0;
        this.move = 0;

        this.height = (Number(a)/1500);

    }

    rollover(px, py) {
        // if ((this.year_num-1999)*60-15 < mouseX < (this.year_num-1999)*60 +15 && 
        //     windowHeight/2-this.height*5.5 < mouseY < windowHeight/2+this.height*5.5){
        //         this.over = true;
        //         if (mouseIsPressed){
        //         this.pressed = true;
        //     }

        // }

        // check if mouse is over the shape; check if you click the shape & over shape;
        // keep clicked shape over all other shapes; check if you unclick shape
        var d = dist(px, py, (this.year_num-1999)*60, windowHeight/2);
        var d1 = dist(px, py, (this.year_num-1999)*60, windowHeight/2+30);
        var d2 = dist(px, py, (this.year_num-1999)*60, windowHeight/2+60);
        var d3 = dist(px, py, (this.year_num-1999)*60, windowHeight/2+90);
        var d4 = dist(px, py, (this.year_num-1999)*60, windowHeight/2+120);
        var d5 = dist(px, py, (this.year_num-1999)*60, windowHeight/2+150);
        var d6 = dist(px, py, (this.year_num-1999)*60, windowHeight/2+180);
        var d8 = dist(px, py, (this.year_num-1999)*60, windowHeight/2-30);
        var d9 = dist(px, py, (this.year_num-1999)*60, windowHeight/2-60);
        var d10 = dist(px, py, (this.year_num-1999)*60, windowHeight/2-90);
        var d11 = dist(px, py, (this.year_num-1999)*60, windowHeight/2-120);
        var d12 = dist(px, py, (this.year_num-1999)*60, windowHeight/2-150);
        var d13 = dist(px, py, (this.year_num-1999)*60, windowHeight/2-180);
        
        if (d < 30 || d1<30 || d2<30 || d3<30 || d4<30 || d5<30 || d6<30|| d8<30
            || d9<30 || d10<30 || d11<30 || d12<30 || d13<30) {
            this.over = true;
            if (mouseIsPressed){
                this.pressed = true;
                if (this.county == "Atlantic"){
                    var dex = bubbles.indexOf(this);
                    bubbles.splice(dex,1);
                    bubbles.push(this);
                }
                else if (this.county == "Bergen"){
                    var dex = bubbles1.indexOf(this);
                    bubbles1.splice(dex,1);
                    bubbles1.push(this);
                }
                else if (this.county == "Burlington"){
                    var dex = bubbles2.indexOf(this);
                    bubbles2.splice(dex,1);
                    bubbles2.push(this);
                }
                else if (this.county == "Camden"){
                    var dex = bubbles3.indexOf(this);
                    bubbles3.splice(dex,1);
                    bubbles3.push(this);
                }
                else if (this.county == "Cape May"){
                    var dex = bubbles4.indexOf(this);
                    bubbles4.splice(dex,1);
                    bubbles4.push(this);
                }
                else if (this.county == "Cumberland"){
                    var dex = bubbles5.indexOf(this);
                    bubbles5.splice(dex,1);
                    bubbles5.push(this);
                }
                else if (this.county == "Essex"){
                    var dex = bubbles6.indexOf(this);
                    bubbles6.splice(dex,1);
                    bubbles6.push(this);
                }
                else if (this.county == "Gloucester"){
                    var dex = bubbles7.indexOf(this);
                    bubbles7.splice(dex,1);
                    bubbles7.push(this);
                }
                else if (this.county == "Hudson"){
                    var dex = bubbles8.indexOf(this);
                    bubbles8.splice(dex,1);
                    bubbles8.push(this);
                }
                else if (this.county == "Hunterdon"){
                    var dex = bubbles9.indexOf(this);
                    bubbles9.splice(dex,1);
                    bubbles9.push(this);
                }
                else if (this.county == "Mercer"){
                    var dex = bubbles10.indexOf(this);
                    bubbles10.splice(dex,1);
                    bubbles10.push(this);
                }
                else if (this.county == "Middlesex"){
                    var dex = bubbles11.indexOf(this);
                    bubbles11.splice(dex,1);
                    bubbles11.push(this);
                }
                else if (this.county == "Monmouth"){
                    var dex = bubbles12.indexOf(this);
                    bubbles12.splice(dex,1);
                    bubbles12.push(this);
                }
                else if (this.county == "Morris"){
                    var dex = bubbles13.indexOf(this);
                    bubbles13.splice(dex,1);
                    bubbles13.push(this);
                }
                else if (this.county == "Ocean"){
                    var dex = bubbles14.indexOf(this);
                    bubbles14.splice(dex,1);
                    bubbles14.push(this);
                }
                else if (this.county == "Passaic"){
                    var dex = bubbles15.indexOf(this);
                    bubbles15.splice(dex,1);
                    bubbles15.push(this);
                }
                else if (this.county == "Salem"){
                    var dex = bubbles16.indexOf(this);
                    bubbles16.splice(dex,1);
                    bubbles16.push(this);
                }
                else if (this.county == "Somerset"){
                    var dex = bubbles17.indexOf(this);
                    bubbles17.splice(dex,1);
                    bubbles17.push(this);
                }
                else if (this.county == "Sussex"){
                    var dex = bubbles18.indexOf(this);
                    bubbles18.splice(dex,1);
                    bubbles18.push(this);
                }
                else if (this.county == "Union"){
                    var dex = bubbles19.indexOf(this);
                    bubbles19.splice(dex,1);
                    bubbles19.push(this);
                }
                else if (this.county == "Warren"){
                    var dex = bubbles20.indexOf(this);
                    bubbles20.splice(dex,1);
                    bubbles20.push(this);
                }
                

            }
        
        } else {
            this.over = false;
            if (mouseIsPressed){
                this.pressed = false;
            }
        }
    }

    display() {
        textFont("Merriweather");
        
        // find the ratio of democrats to republicans
        var max_col = this.dems+this.reps;
        var xtra_red = 0;
        var xtra_blue = 0;
        if (this.dems>this.reps){
            xtra_blue = 20;
        }
        else if (this.dems<this.reps){
            xtra_red = 10;
        }
        var red = 255*((this.reps)/max_col)+xtra_red-xtra_blue;
        var blue = 255*((this.dems)/max_col)-xtra_red+xtra_blue;



        // create rectangles for each year
        if (this.over == true){
            fill(230);
            rect((this.year_num-1999)*60, windowHeight/2, 35, this.height+5);
        }else{
            stroke(0);
        }
        
        fill(57, 62, 65);
        textSize(70);
        text(this.county + " County", windowWidth/2,100);


        
        // year numbers
        textAlign(CENTER);
        text()
        fill(57, 62, 65)
        strokeWeight(0);
        textSize(20);
        text(this.year, (this.year_num-1999)*60, windowHeight/2+270)


        // create graph of registered voters by year, shaded by party distribution
        fill(red, 0, blue);
        rectMode(CENTER);
        rect((this.year_num-1999)*60, windowHeight/2, 30+this.size, this.height+this.size);

        // if shape clicked, expand with its color to cover all other shapes; if unclicked anywhere, 
        // retract back to original shape
        var step = 50;
        var size = this.size;
        if (this.pressed && this.size<=windowWidth*2){

            size += step;
            this.size = size;


        } 
        
        else if (!this.pressed && this.size>30){
            size-=step;
            this.size = size;
            this.move = 0;

        }
        if (this.size>windowWidth*2){
        
            fill(57, 62, 65);
            rect(windowWidth/2, 90, 300, 150);

            textAlign(CENTER);
            fill((211, 208, 203));
            strokeWeight(0);
            textSize(100);
            text(this.year, windowWidth/2,100);
            textSize(30);
            text(this.county + " County", windowWidth/2,140)
            
            // fill(red+30, 30, blue+30);
            // rect(windowWidth/2, windowHeight/2+75, 400, 200);
            
            fill(231, 229, 223);
            textSize(40);
            text("Democrats: " + this.dems, windowWidth/2-this.move,windowHeight/2+10);
            text("Republicans: " + this.reps, windowWidth/2-this.move,windowHeight/2+60);
            text("Unaffiliated: " + this.unaff, windowWidth/2-this.move,windowHeight/2+110);
            text("Total: " + this.total, windowWidth/2-this.move,windowHeight/2+160);

            if (windowWidth/2-this.move<=300){
                text("THIS IS WHERE THE \nINFO PARAGRAPH \nWILL GO", windowWidth/2+300,windowHeight/2+10);
            }
            
            
        }
        

    
    }
}