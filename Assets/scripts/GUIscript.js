#pragma strict

var GUIhealth: Transform;
var GUIscore: Transform; 
var GUIpowers: Transform;
var player : Transform;

var health: int = 120;
var score: int = 0;
var powers: String;
var cooldown: String;

var style:GUIStyle;

public static var paused = false;

function Start () {
}

function Update () {
	GUIhealth.guiText.text = health.ToString();
	GUIscore.guiText.text = score.ToString();
	GUIpowers.guiText.text = powers;
	
	if (health >= 220){
		//Debug.Log("You died!");		//End of the line (=dead)
		Application.LoadLevel(0);
	}
}

function OnGUI(){
	if(paused){
		GUI.Box(Rect(0,0,Screen.width,Screen.height),"",style);
		GUI.Label(Rect(Screen.width/2,Screen.height/2,100,20),"Paused");
		if(GUI.Button(Rect(Screen.width/2,Screen.height/2 + 25,100,20),"Continue")){
			Pause();
		}
		if(GUI.Button(Rect(Screen.width/2,Screen.height/2 + 50,100,20),"Main Menu")){
			Application.LoadLevel(0);
		}
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