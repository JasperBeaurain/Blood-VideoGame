#pragma strict

var GUIhealth: Transform;
var GUIscore: Transform; 
var GUIpowers: Transform;
var player : Transform;

var health: int = 100;
var score: int = 0;
var powers: String;
var cooldown: String;

function Start () {
}

function Update () {
	GUIhealth.guiText.text = health.ToString();
	GUIscore.guiText.text = score.ToString();
	GUIpowers.guiText.text = powers;
	
	if (health <= 0){
		//Debug.Log("You died!");		//End of the line (=dead)
		Application.LoadLevel(0);
	}
}