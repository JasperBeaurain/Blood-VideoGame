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

var buttonStyle:GUIStyle;
var bgTexture:Texture;

function Start () {
}

function Update () {
	GUIhealth.guiText.text = health.ToString();
	GUIscore.guiText.text = score.ToString();
	GUIpowers.guiText.text = powers;
	
	if (health >= 120){
		//Debug.Log("You died!");		//End of the line (=dead)
		toggleDead();
	}
}

function OnGUI(){
	if(paused){
	
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, Vector3(1.0*Screen.width/800.0, 1.0*Screen.height/480.0, 1.0));
		
		GUI.DrawTexture(Rect(0,0,800,480), bgTexture);
		
		GUI.Label(Rect(400,50,100,20),"Paused");
		
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
		
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, Vector3(1.0*Screen.width/800.0, 1.0*Screen.height/480.0, 1.0));		
		
		GUI.DrawTexture(Rect(0,0,800,480), bgTexture);
		
		GUI.Label(Rect(400,40,200,20),"You died!");
		GUI.Label(Rect(400,65,150,20),"Score: " + score);
		
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
/*





*/