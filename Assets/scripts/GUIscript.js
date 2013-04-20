#pragma strict
import System.Math;
var player : Transform;

var health: int = 120;
public static var score: int = 0;
public static var totscore : int = 0;
public static var playerName:String = "Enter your name here!";
var power1: int;
var power2: int;
var power3: int;
var power4: int;
var power5: int;

var cooldown: String;

var style:GUIStyle;
public static var paused = false;
public static var dead = false;
var isInstructions:boolean = false;
var isMainMenu:boolean = false;
var isOptions:boolean = false;

var buttonStyle:GUIStyle;
var instructionStyle:GUIStyle;
var bgTexture:Texture;
var titleStyle:GUIStyle;
var scoreStyle:GUIStyle; 
var guiScoreStyle:GUIStyle;
var optionsStyle:GUIStyle;
var textFieldStyle:GUIStyle;

var guiBgTexture:Texture;

var power1Texture:Texture;
var power2Texture:Texture;
var power3Texture:Texture;
var power4Texture:Texture;
var power5Texture:Texture;

private var textField:String = "";

function Start () {
	reset();
	isMainMenu = true;
}

function Update () {
	totscore = score + System.Math.Round(System.Math.Pow(player.position.z,0.8));
	if (health >= 220){
		//Debug.Log("You died!");		//End of the line (=dead)
		toggleDead();
	}
}

function OnGUI(){

	GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, Vector3(1.0*Screen.width/800.0, 1.0*Screen.height/480.0, 1.0));
		
	GUI.DrawTexture(Rect(350,0,450,98), guiBgTexture);
	
	GUI.DrawTexture(Rect(432,0,45,45), power1Texture);
	GUI.DrawTexture(Rect(502,0,45,45), power2Texture);
	GUI.DrawTexture(Rect(572,0,45,45), power3Texture);
	GUI.DrawTexture(Rect(642,0,45,45), power4Texture);
	GUI.DrawTexture(Rect(712,0,45,45), power5Texture); 
	
	GUI.Label(Rect(530,65,200,25),health.ToString(),guiScoreStyle);
 	GUI.Label(Rect(10,10,200,25),totscore.ToString(),guiScoreStyle);
 
	if(paused){
		
		GUI.DrawTexture(Rect(0,0,800,480), bgTexture);
		if(isMainMenu){
			GUI.Label(Rect(300,50,200,40),"Paused",titleStyle);
			
			if (GUI.Button(Rect(300,100,200,60),"Resume",buttonStyle)){
		 		Pause();
			}
			if (GUI.Button(Rect(300,172,200,60),"Main Menu",buttonStyle)){
			 	Pause();
				Application.LoadLevel(0);
			}
			if (GUI.Button(Rect(300,245,200,60),"Instructions",buttonStyle)){
				reset();
				isInstructions = true;
			}
			if (GUI.Button(Rect(300,317,200,60),"Options",buttonStyle)){
			 	reset();
				isOptions = true;
			}
		}
		if(isInstructions){
			GUI.Label(Rect(30,30,740,360),"ANDROID\nTilt the screen to move your spaceship\nTap on the screen to shoot once and hold town to keep firing.\n\nPC\nUse the arrow keys or ZQSD to move around\nPress spacebar to shoot\n\nEXPLINATION\nHelp the patient survive the infection by killing as many viruses as you can!\nDon't let them past you or touch you, as this will make his condition worse.\nYou can pick up upgrades by smashing into white bloodcells, but keep away from the red ones, wich will damage your ship, causing you to lose upgrades!",instructionStyle);
			if (GUI.Button(Rect(300,400,200,60),"Back",buttonStyle)){
				reset();
				isMainMenu = true;
			}
		}
		if(isOptions){
			GUI.Label(Rect(250,235,300,35),"Options coming soon!",optionsStyle);
			if (GUI.Button(Rect(300,400,200,60),"Back",buttonStyle)){
				reset();
				isMainMenu = true;
			}
		}	
	}
	if(dead){
	
		var posted:boolean = false;	
		
		GUI.DrawTexture(Rect(0,0,800,480), bgTexture);
		
		GUI.Label(Rect(300,70,200,40),"You died!",titleStyle);
		GUI.Label(Rect(300,120,200,40),"Score: " + totscore,scoreStyle);
		
		playerName = GUI.TextField (Rect (300, 160, 200, 30), playerName, 25,textFieldStyle);
		
		if (GUI.Button(Rect(300,200,200,60),"Submit Score",buttonStyle)){
	 		if (posted == false){
		 		if(playerName != "" && playerName != "Enter your name here!"){
					posted = true;
					textField = "Submitted!";
					GetComponentInChildren(scoreHandler).SendMessage("postScore");
				}
			}
		}
		if (GUI.Button(Rect(300,272,200,60),"Main Menu",buttonStyle)){
		 	dead = false;
			health = 120;
			score = 0;
			Application.LoadLevel(0);
		}
		GUI.Label(Rect(550,230,200,30),textField,scoreStyle);
	}
}

function Pause(){
	if(paused){
		Time.timeScale = 1;
		paused = false;
	}else{
		Time.timeScale = 0;
		paused = true;
	}
}

function toggleDead(){
	if(!dead){
		Time.timeScale = 0;
		dead = true;
	}
}

function reset(){
	isMainMenu = false;
	isOptions = false;
	isInstructions = false;
}