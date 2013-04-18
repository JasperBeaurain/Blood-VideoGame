#pragma strict

var GUIhealth: Transform;
var GUIscore: Transform; 
var GUIpowers: Transform;
var player : Transform;

var health: int = 120;
public static var score: int = 0;
var powers: String;
var cooldown: String;

var style:GUIStyle;
public static var paused = false;
public static var dead = false;

function Start () {
}

function Update () {
	GUIhealth.guiText.text = health.ToString();
	GUIscore.guiText.text = score.ToString();
	GUIpowers.guiText.text = powers;
	
	if (health >= 2020){
		//Debug.Log("You died!");		//End of the line (=dead)
		toggleDead();
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
			Pause();
			Application.LoadLevel(0);
		}
	}
	if(dead){
		var posted:boolean =false;
		GUI.Box(Rect(0,0,Screen.width,Screen.height),"",style);
		GUI.Label(Rect(Screen.width/2,Screen.height/2,150,20),"You died!");
		GUI.Label(Rect(Screen.width/2,Screen.height/2 + 25,150,20),"Score: " + score);
		if(GUI.Button(Rect(Screen.width/2,Screen.height/2 + 50,100,20),"Submit Score")){
			if (!posted){
				posted = true;
				GetComponentInChildren(scoreHandler).SendMessage("postScore");
				GUI.Label(Rect(Screen.width/2+100,Screen.height/2 + 50,100,20),"Submitted");
			}
		}
		if(GUI.Button(Rect(Screen.width/2,Screen.height/2 + 75,100,20),"Main Menu")){
			dead = false;
			health = 120;
			score = 0;
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

function toggleDead(){
	if(!dead){
		Time.timeScale = 0;
		dead = true;
	}
}