function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav")
	mario_collecting_coins=loadSound("coin.wav");
	mario_jumping_on_enemies=loadSound("kick.wav");
	mario_is_dead=loadSound("mariodie.wav");
	mario_is_game_over=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent('gameconsole');
	posecard=ml5.poseNet(video,modelLoaded);
	posecard.on('pose',gotposes);
}
function modelLoaded(){
	console.log('modelisloaded');
}
function gotposes(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






