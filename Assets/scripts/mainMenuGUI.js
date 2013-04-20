#pragma strict

var buttonStyle:GUIStyle;
var titleStyle:GUIStyle;
var creditStyle:GUIStyle;
var bgTexture:Texture;
var shiptexture:Texture;
var instructionStyle:GUIStyle;
var backButtonStyle:GUIStyle;
var optionsStyle:GUIStyle;

var isMainMenu:boolean = true;
var isHighScores:boolean = false;
var isOptions:boolean = false;
var isInstructions:boolean = false;

function Start () {
	reset();
	isMainMenu = true;
}

function Update () {

}

function OnGUI(){

	GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, Vector3(1.0*Screen.width/800.0, 1.0*Screen.height/480.0, 1.0));
	
	GUI.DrawTexture(Rect(0,0,800,480), bgTexture);
	
	if(isMainMenu){
		GUI.Label(Rect(40,20,200,60),"Viral",titleStyle);
		if (GUI.Button(Rect(30,100,370,60),"Play",buttonStyle)){
			Application.LoadLevel(1);
			Time.timeScale = 1;
			reset();
			isMainMenu = true;
		}
		if (GUI.Button(Rect(30,172,370,60),"Highscores",buttonStyle)){
			reset();
			isHighScores = true;
		}
		if (GUI.Button(Rect(30,245,370,60),"Instructions",buttonStyle)){
		 	reset();
			isInstructions = true;
		}
		if (GUI.Button(Rect(30,317,370,60),"Options",buttonStyle)){
		 	reset();
			isOptions = true;
		}
		if (GUI.Button(Rect(30,389,370,60),"Quit",buttonStyle)){
			reset();
			isMainMenu = true;
			Application.Quit();
		}
		
		GUI.DrawTexture(Rect(325,125,450,225),shiptexture);
		GUI.Label(Rect(460,450,400,26),"Made by: Jasper, Tuur, Owen and Tuur",instructionStyle);
	}
	if(isHighScores){
		//display highscores in here
		if (GUI.Button(Rect(300,400,200,60),"Back",backButtonStyle)){
			reset();
			isMainMenu = true;
		}
	}
	if(isInstructions){
		GUI.Label(Rect(30,30,740,360),"ANDROID\nTilt the screen to move your spaceship\nTap on the screen to shoot once and hold town to keep firing.\n\nPC\nUse the arrow keys or ZQSD to move around\nPress spacebar to shoot\n\nEXPLINATION\nHelp the patient survive the infection by killing as many viruses as you can!\nDon't let them past you or touch you, as this will make his condition worse.\nYou can pick up upgrades by smashing into white bloodcells, but keep away from the red ones, wich will damage your ship, causing you to lose upgrades!",instructionStyle);
		if (GUI.Button(Rect(300,400,200,60),"Back",backButtonStyle)){
			reset();
			isMainMenu = true;
		}
	}
	if(isOptions){
		GUI.Label(Rect(250,235,300,35),"Options coming soon!",optionsStyle);
		if (GUI.Button(Rect(300,400,200,60),"Back",backButtonStyle)){
			reset();
			isMainMenu = true;
		}
	}
}
function reset(){
	isMainMenu = false;
	isHighScores = false;
	isOptions = false;
	isInstructions = false;
}