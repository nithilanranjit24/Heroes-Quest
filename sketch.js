var idleGr, wlknGr,HdPunchGr,jumpGr,blockGr,crouchGr,kickGr,highKickTr, medKickGr, gladiator;
var idleTn,wlknTn,jumpTn,crouchTn,punchTn,blockTn,kickTn,madKickTr,highkick, terminator, faceHitTn, gutHitTn;
var bg;
var GrLife, TrLife;
var isTFaceHit = false;
var life1 = 3;
var life2 = 3;
var TrHit = 0;
var GrHit = 0;

function preload(){
  idleGr = loadAnimation("Images/Gr-Idle1.png","Images/Gr-Idle2.png");
  wlknGr = loadAnimation("Images/Gr-Wlkin1.png", "Images/Gr-Wlkin2.png", "Images/Gr-Wlkin3.png", "Images/Gr-Wlkin4.png");
  HdPunchGr = loadAnimation("Images/Gr-Punch1.png", "Images/Gr-Punch2.png", "Images/Gr-Punch3.png", "Images/Gr-Punch4.png", "Images/Gr-Punch5.png", "Images/Gr-Punch6.png", "Images/Gr-Punch7.png");
  jumpGr = loadAnimation("Images/Gr-Jump1.png", "Images/Gr-Jump2.png", "Images/Gr-Jump3.png");
  blockGr = loadAnimation("Images/Gr-Block1.png", "Images/Gr-Block2.png");
  crouchGr = loadAnimation("Images/Gr-Crouch1.png", "Images/Gr-Crouch2.png");
  kickGr = loadAnimation("Images/Gr-Kick1.png","Images/Gr-Kick1.png", "Images/Gr-Kick2.png","Images/Gr-Kick2.png");
  idleTn = loadAnimation("Images/Villan/TN-Idle1.png", "Images/Villan/TN-Idle2.png", "Images/Villan/TN-Idle3.png", "Images/Villan/TN-Idle4.png");
  wlknTr = loadAnimation("Images/Villan/TN-Wlkn1.png", "Images/Villan/TN-Wlkn2.png", "Images/Villan/TN-Wlkn3.png", "Images/Villan/TN-Wlkn4.png", "Images/Villan/TN-Wlkn5.png", "Images/Villan/TN-Wlkn6.png");
  jumpTn = loadAnimation("Images/Villan/TN-Jump1.png", "Images/Villan/TN-Jump2.png", "Images/Villan/TN-Jump3.png", "Images/Villan/TN-Jump3.png");
  crouchTn = loadAnimation("Images/Villan/TN-Crouch1.png", "Images/Villan/TN-Crouch2.png");
  punchTn = loadAnimation("Images/Villan/TN-Punch1.png","Images/Villan/TN-Punch2.png", "Images/Villan/TN-Punch3.png", "Images/Villan/TN-Punch4.png", "Images/Villan/TN-Punch5.png");
  blockTn = loadAnimation("Images/Villan/TN-Block1.png", "Images/Villan/TN-Block2.png");
  kickTn = loadAnimation("Images/Villan/TN-Kick1.png", "Images/Villan/TN-Kick2.png", "Images/Villan/TN-Kick3.png","Images/Villan/TN-Kick4.png","Images/Villan/TN-Kick5.png", "Images/Villan/TN-Kick6.png");
  medKickGr = loadAnimation("Images/Gr-M.Kick1.png", "Images/Gr-M.Kick1.png", "Images/Gr-M.Kick2.png","Images/Gr-M.Kick2.png","Images/Gr-M.Kick3.png","Images/Gr-M.Kick3.png","Images/Gr-M.Kick4.png","Images/Gr-M.Kick4.png","Images/Gr-M.Kick5.png", "Images/Gr-M.Kick5.png");
  medKickTr = loadAnimation("Images/Villan/TN-Kick1.png", "Images/Villan/TN-Kick2.png", "Images/Villan/TN-Kick3.png","Images/Villan/TN-M.Kick4-1.png","Images/Villan/TN-Kick5.png", "Images/Villan/TN-Kick6.png");
  highKick = loadAnimation("Images/Gr-HighKick1-.png","Images/Gr-HighKick1-.png", "Images/Gr-HighKick2-.png","Images/Gr-HighKick2-.png","Images/Gr-HighKick3-.png","Images/Gr-HighKick3-.png");
  highKickTr = loadAnimation("Images/Villan/TN-Kick1.png", "Images/Villan/TN-Kick2.png", "Images/Villan/TN-Kick3.png","Images/TN-HighKick4.png",
"Images/Villan/TN-Kick5.png", "Images/Villan/TN-Kick6.png");
  faceHitTn = loadAnimation("Images/Villan/Face_hit1.png","Images/Villan/Face_hit2.png", "Images/Villan/Face_hit3.png");
  gutHitTn = ("Images/Villan/GutHit1.png", "Images/Villan/GutHit2.png", "Images/Villan/GutHit3.png");
  TrLife = loadImage("Images/Terminator_-_skull-removebg-preview.png");
  GrLIfe = loadImage("Images/Gladiator_--removebg-preview.png");
  bg = loadImage("Images/Battle-Arena-Background.jpg");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  gladiator = createSprite(300, windowHeight/2);
  terminator = createSprite(800,windowHeight/2);
  gladiator.addAnimation("standing",idleGr);
  gladiator.addAnimation("walking", wlknGr);
  gladiator.addAnimation("headPunch", HdPunchGr);
  gladiator.addAnimation("jump", jumpGr);
  gladiator.addAnimation("block", blockGr);
  gladiator.addAnimation("crouch", crouchGr);
  gladiator.addAnimation("kick", kickGr);
  gladiator.addAnimation("stomachKick", medKickGr);
  gladiator.addAnimation("faceKick", highKick);
  gladiator.scale = 1.5;
  
  terminator.addAnimation("standingT", idleTn);
  terminator.addAnimation("walkingT", wlknTr);
  terminator.addAnimation("jumpT", jumpTn);
  terminator.addAnimation("punch", punchTn);
  terminator.addAnimation("crouchT",crouchTn);
  terminator.addAnimation("blockT", blockTn);
  terminator.addAnimation("kickT", kickTn);
  terminator.addAnimation("mediumKick", medKickTr);
  terminator.addAnimation("highKick", highKickTr);
  terminator.addAnimation("faceHit", faceHitTn);
  terminator.addAnimation("gutHit", gutHitTn);
  terminator.scale = 1.5;
    terminator.frameDelay = 5;
  gladiator.frameDelay = 10;

}

function draw(){
  
  isTFaceHit = false;
              
  background(bg);
  var start = 0;
  for(var i = 1;i<=life1; i++){
    start = start+50;
    var life = createSprite(start, 50);
    life.addImage(GrLIfe);
    life.scale = 0.3;
  }
  updateLife();
  
  createEdgeSprites();
  var edges = createEdgeSprites();
  gladiator.bounce(edges);
  terminator.bounce(edges);
  //Gladiator
  //Up arrow
  if(keyIsDown(38)){
    gladiator.changeAnimation("jump");
    gladiator.frameDelay = 8;
    gladiator.y = gladiator.y -20;
  }
  //Down Arrow
  else if(keyIsDown(40)){
    gladiator.y = windowHeight/2;
    gladiator.changeAnimation("crouch");
    gladiator.frameDelay = 8;
    gladiator.y = gladiator.y+20;
  }
  //Left Arrow
  else if(keyIsDown(37)){
    gladiator.y = windowHeight/2;
    gladiator.changeAnimation("walking");
    gladiator.x = gladiator.x-10
  }
  //Right Arrow
  else if(keyIsDown(39)){
    gladiator.y = windowHeight/2;
    gladiator.changeAnimation("walking");
    gladiator.x = gladiator.x+10
  }
  //Kick K
  else if(keyIsDown(75)){
        gladiator.changeAnimation("faceKick");
        if(gladiator.isTouching(terminator)){
            isTFaceHit = true;
             
        }
  }
  
  //Punch Space
  else if(keyDown(32)){
            gladiator.y = windowHeight/2;
    gladiator.changeAnimation("headPunch");
  }
  else{
    gladiator.changeAnimation("standing");
    gladiator.frameDelay = 10;
    gladiator.y = windowHeight/2;
  }
  
  //Terminator
  //jump
  if(keyIsDown(87)){
    terminator.changeAnimation("jumpT");
    terminator.frameDelay = 8;
    terminator.y = terminator.y -20;
  }
  //crouch
  else if(keyIsDown(83)){
    terminator.y = windowHeight/2;
    terminator.changeAnimation("crouchT");
    terminator.frameDelay = 8;
    terminator.y = terminator.y+20;
  }
  //Left Arrow
  else if(keyIsDown(65)){
    terminator.y = windowHeight/2;
    terminator.changeAnimation("walkingT");
    terminator.x =terminator.x-10
  }
  //Right Arrow
  else if(keyIsDown(68)){
    terminator.y = windowHeight/2;
    terminator.changeAnimation("walkingT");
    terminator.x = terminator.x+10
  }
  //kick q
  else if(keyIsDown(81)){
        terminator.y = windowHeight/2;
terminator.changeAnimation("highKick");
            terminator.frameDelay =20;
    
  }
  
  //Punch Space
  else if(keyDown(16)){
            terminator.y = windowHeight/2;
    terminator.changeAnimation("punch");
  }
  else if(isTFaceHit===false){
    terminator.changeAnimation("standingT");
    terminator.frameDelay = 10;
    terminator.y = windowHeight/2;
  }
  else if(isTFaceHit){
    terminator.changeAnimation("faceHit");
    if(TrHit <10){
      TrHit++
    }
    else if(TrHit==10 && life2>0){
      life2--;
      TrHit=0;
    }
    console.log("life", life2);
    console.log("hit", TrHit)
  }
  drawSprites();
  
}
function updateLife(){
  var space = 0
  for(var j = 1;j<=life2; j++){
    space = space+50;
    var lives = createSprite(width-space, 50);
    lives.addImage(TrLife);
    lives.scale = 0.25;
  }
}