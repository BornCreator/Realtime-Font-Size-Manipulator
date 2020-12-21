var noseX,noseY;
var differencef=0;
function preload(){}
function setup() {
    canvas = createCanvas(550, 400);
    canvas.position(800, 100);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    background("#222222");
    fill('#000000');
    text('Reyyansh',20,200);
    textSize(differencef-250);
    document.getElementById("square_sides").innerHTML="Sides Of The Square Is This thingy: "+differencef+" px";
}
function modelLoaded(){
    console.error('cannot read property "poseNet" of null, main.js: 12');
}
function gotPoses(results){
    if(results.length>0){
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        differencef=floor(leftWristX-rightWristX);
        console.error("An Error interfered with the proccess - error code: "+differencef+"2hsr436hgFrETYsg374658GFteY");
    }
}