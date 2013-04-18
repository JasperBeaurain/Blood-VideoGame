#pragma strict

var buttonStyle:GUIStyle;
var bgTexture:Texture;

function Start () {

}

function Update () {

}

function OnGUI(){

	GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, Vector3(1.0*Screen.width/800.0, 1.0*Screen.height/480.0, 1.0));
	
	GUI.DrawTexture(Rect(0,0,800,480), bgTexture);
	
	if (GUI.Button(Rect(30,100,370,60),"Play",buttonStyle)){
	 
	}
	if (GUI.Button(Rect(30,172,370,60),"Highscores",buttonStyle)){
	 
	}
	if (GUI.Button(Rect(30,245,370,60),"Instructions",buttonStyle)){
	 
	}
	if (GUI.Button(Rect(30,317,370,60),"Options",buttonStyle)){
	 
	}
	if (GUI.Button(Rect(30,389,370,60),"Quit",buttonStyle)){
	 
	}
}