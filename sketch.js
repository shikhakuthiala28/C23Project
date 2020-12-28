const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world,mainGround,mainPackage;
var leftWall,rightWall,bottomWall;

var helicopterSprite,helicopterImage,packageSprite,packageImage;
function preload(){

	helicopterImage=loadImage("helicopter.png");
	packageImage=loadImage("package.png");

}

function setup(){

	createCanvas(650,650);
	rectMode(CENTER);

	packageSprite=createSprite(325,325,20,20);
	packageSprite.addImage(packageImage);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(325,315,20,20);
	helicopterSprite.addImage(helicopterImage);
	helicopterSprite.scale=0.7;

	engine=Engine.create();
	world=engine.world;

	mainGround=new Ground(325,625,650,25);
	leftWall=new Ground(190,535,20,150);
	rightWall=new Ground(450,535,20,150);
	bottomWall=new Ground(325,600,250,20);

	World.add(world,mainGround,bottomWall,leftWall,rightWall);

	var options={
		isStatic:true,
		restitution:1
	}

	mainPackage=Bodies.rectangle(325,325,20,20,options);
	World.add(world,mainPackage);

	Engine.run(engine);

	
}

function draw(){

	rectMode(CENTER);
	background('black');
	packageSprite.x=mainPackage.position.x;
	packageSprite.y=mainPackage.position.y;
	drawSprites();
	mainGround.display();
	fill('red'); 
	bottomWall.display();
	leftWall.display();
	rightWall.display();
	noFill();
	
	
	if(keyCode==DOWN_ARROW){
		
		Matter.Body.setStatic(mainPackage,false);
	}
}