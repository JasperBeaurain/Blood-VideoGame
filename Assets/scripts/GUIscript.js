#pragma strict

var player : Transform;

var health: int = 120;
public static var score: int = 0;
var power1: int;
var power2: int;
var power3: int;
var power4: int;
var power5: int;

var cooldown: String;

var style:GUIStyle;
public static var paused = false;
public static var dead = false;

var buttonStyle:GUIStyle;
var bgTexture:Texture;
var titleStyle:GUIStyle;
var scoreStyle:GUIStyle; 
var guiScoreStyle:GUIStyle;

var guiBgTexture:Texture;

var power1Texture:Texture;
var power2Texture:Texture;
var power3Texture:Texture;
var power4Texture:Texture;
var power5Texture:Texture;

function Start () {
}

function Update () {
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
 	GUI.Label(Rect(10,10,200,25),score.ToString(),guiScoreStyle);
 
	if(paused){
		
		GUI.DrawTexture(Rect(0,0,800,480), bgTexture);
		
		GUI.Label(Rect(300,50,200,40),"Paused",titleStyle);
		
		if (GUI.Button(Rect(300,100,200,60),"Resume",buttonStyle)){
	 		Pause();
		}
		if (GUI.Button(Rect(300,172,200,60),"Main Menu",buttonStyle)){
		 	Pause();
			Application.LoadLevel(0);
		}
		if (GUI.Button(Rect(300,245,200,60),"Instructions",buttonStyle)){
			
		}
		if (GUI.Button(Rect(300,317,200,60),"Options",buttonStyle)){
		 
		}
		
	}
	if(dead){
	
		var posted:boolean =false;	
		
		GUI.DrawTexture(Rect(0,0,800,480), bgTexture);
		
		GUI.Label(Rect(300,70,200,40),"You died!",titleStyle);
		GUI.Label(Rect(300,120,200,40),"Score: " + score,scoreStyle);
		
		if (GUI.Button(Rect(300,200,200,60),"Submit Score",buttonStyle)){
	 		if (!posted){
				posted = true;
				GetComponentInChildren(scoreHandler).SendMessage("postScore");
				GUI.Label(Rect(Screen.width/2+100,Screen.height/2 + 50,100,20),"Submitted");
			}
		}
		if (GUI.Button(Rect(300,272,200,60),"Main Menu",buttonStyle)){
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