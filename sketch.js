var ball;
var database, position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,30,30);
    ball.shapeColor = "red";
    database.ref("ball/position").on("value",readPos);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
    drawSprites();
}

function writePos(x,y){
    database.ref("ball/position").set({
        x: position.x + x,
        y: position.y + y
    });
}

function readPos(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}