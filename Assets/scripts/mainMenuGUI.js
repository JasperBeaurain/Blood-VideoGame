#pragma strict

var buttonStyle:GUIStyle;
var titleStyle:GUIStyle;
var creditStyle:GUIStyle;
var bgTexture:Texture;
var shiptexture:Texture;
function Start () {

}

function Update () {

}

function OnGUI(){

	GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, Vector3(1.0*Screen.width/800.0, 1.0*Screen.height/480.0, 1.0));
	
	GUI.DrawTexture(Rect(0,0,800,480), bgTexture);
	GUI.Label(Rect(40,20,200,60),"Viral",titleStyle);
	if (GUI.Button(Rect(30,100,370,60),"Play",buttonStyle)){
		Application.LoadLevel(1);
			Time.timeScale = 1;
	}
	if (GUI.Button(Rect(30,172,370,60),"Highscores",buttonStyle)){
	 
	}
	if (GUI.Button(Rect(30,245,370,60),"Instructions",buttonStyle)){
	 
	}
	if (GUI.Button(Rect(30,317,370,60),"Options",buttonStyle)){
	 
	}
	if (GUI.Button(Rect(30,389,370,60),"Quit",buttonStyle)){
		Application.Quit();
	}
	
	GUI.DrawTexture(Rect(325,125,450,225),shiptexture);
	GUI.Label(Rect(460,450,400,26),"Made by: Jasper, Tuur, Owen and Tuur",creditStyle);
}