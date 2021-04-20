var magicball;
var database;
var position;



function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    magicball = createSprite(250,250,10,10);
    magicball.shapeColor = "red";

    var magicballposition = database.ref('ball/position');
    magicballposition.on("value",readposition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readposition(data){
    position = data.val();
    console.log(position.x);

    magicball.x = position.x;
    magicball.y = position.y;

}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x ,
        'y':position.y+y 
    });
}


function showError(){
    console.log("error");
}
