var background, backgroundImg;
var jerry, jerryImg, jerryTease, tomFinalImg;
var tom, tomImg, tomRun, tomFinalImg;

function preload() {
    //load the images here
    backgroundImg = loadImage("garden.png")
    tomImg = loadImage("tomOne.png")
    jerryImg = loadImage("jerryOne.png")

    tomFinalImg = loadImage("tomFour.png")
    jerryFinalImg = loadImage("jerryFour.png")

    tomRun = loadAnimation("tomTwo.png", "tomThree.png")
    jerryTease = loadAnimation("jerryTwo.png", "jerryThree.png")
}

function setup(){
    createCanvas(1000,1000);
    background = createSprite(200,200,800,800)
    background.addImage(backgroundImg)

    tom = createSprite(500,450,20,20)
    tom.addImage(tomImg)
    tom.scale = 0.1

    jerry = createSprite(100,450,20,20)
    jerry.addImage(jerryImg)
    jerry.scale = 0.1
    jerry.setCollider("rectangle",0,0,110,110)
    jerry.debug = true;
    //create tom and jerry sprites here

}

function draw() {
    
    drawSprites();
    //Write condition here to evalute if tom and jerry collide
    if (tom.isTouching(jerry)) {
        tom.velocityX=0
        tom.addAnimation("final", tomFinalImg)
        tom.changeAnimation("final")

        jerry.addAnimation("final", jerryFinalImg)
        jerry.changeAnimation("final")
    }
    
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        tom.addAnimation("running", tomRun)
        tom.changeAnimation("running")
        tom.velocityX=-1
        jerry.addAnimation("teasing",jerryTease)
        jerry.changeAnimation("teasing")
    } else {
        tom.velocityX=0
        tom.addAnimation("resting", tomImg)
        tom.changeAnimation("resting")

        jerry.addAnimation("resting", jerryImg)
        jerry.changeAnimation("resting")
    }

}
