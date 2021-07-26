var backgroundImage, kingImage, backgroundImage2
var king
var theif1 , thief2 , thief3
var thief1Image , thief2Image, thief3Image
var blast
var blastImage
var submitButton, submitButtonImage
var stage = 'first'
var milkManImage, Milkman
var HintImage, Hint1



function preload(){
backgroundImage = loadImage("Images/kingthrone.jpg")
kingImage = loadImage("Images/theking.png")
thief1Image = loadImage("Images/thief1.png")
thief3Image = loadImage("Images/thief3.png")
blastImage =  loadImage("Images/blast.jpg")
backgroundImage2 = loadImage("Images/market.jpg")
submitButtonImage = loadImage("Images/buttonSubmit.png")
milkManImage = loadImage("images/milkman1.png")
HintImage = loadImage("images/Hint1.png")
}

function setup(){
createCanvas(1400, 650);


king = createSprite(730, 350);
king.addImage(kingImage);
king.scale = 0.6
king.lifetime = 90;

thief1 = createSprite(50, 400);
thief1.addImage(thief1Image);
thief1.velocityX = 3;
thief1.lifetime = 90;

thief3 = createSprite(1500, 400);
thief3.addImage(thief3Image)
thief3.velocityX = -5;
thief3.lifetime = 90;

blast = createSprite(750, 350);
blast.addImage(blastImage)
blast.visible = false;
blast.scale = 4;
blast.lifetime = 90;


submitButton = createSprite(500, 400)
submitButton.addImage(submitButtonImage)
submitButton.visible = false;
submitButton.scale = 0.1;

Milkman = createSprite(700,400)
Milkman.addImage(milkManImage)
Milkman.visible = false;
Milkman.scale = 0.9;

Hint1 = createSprite(600,400)
Hint1.addImage(HintImage)
Hint1.visible = false;
Hint1.scale = 0.4;

}

function draw(){



if (stage === "first"){
  background(backgroundImage)
  if(thief1.isTouching(king)){
    thief1.velocityX = 0;
    blast.visible = true;
    
  }
  
  if(thief3.isTouching(king)){
    thief3.velocityX = 0;
  
  }
  
  if (blast.lifetime === 0){
    fill('black') 
    textSize(30)
    text("The King Is kidnapped Now You have To Find Him The Show Is On!", 230, 350)
    submitButton.visible = true;
    
  
  }
  if(mousePressedOver(submitButton)){
    stage = "second"
  }
}

if(stage === 'second'){
  background(backgroundImage2)
  submitButton.visible = false
  textSize(30)
  fill('Yellow')
  text("Go And Find The Milk Man Who Is Selling The Milk!", 230,100)
  Milkman.visible = true;
  
  if(mousePressedOver(Milkman)){
    Hint1.visible = true;
   }
   
 
}

drawSprites()
}

