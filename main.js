yummy="";
rapstar="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;



function preload(){
    song=loadSound("rapstar.mp3");
    song=loadSound("yummy.mp3");
    
}
function modelLoaded(){
    console.log("poseNet has been loaded")
}
function play(){

}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
 video.hide();
 poseNet=ml5.poseNet(video, modelLoaded);
 poseNet.on('pose' ,gotPoses);
    }

    function draw(){
        image(video ,0,0,600,400)
        
    }

    function gotPoses(results){
        if(results.length>0){
            console.log(results);
            
            leftWristX=results[0].pose.leftWrist.x;
            leftWristY=results[0].pose.leftWrist.y;
            console.log("leftWristX = "+ leftWristX + "leftWristY=" + leftWristY);
            
            rightWristX=results[0].pose.rightWristX;
            rightWristY=results[0].pose.rightWristY;
            console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);

        }}