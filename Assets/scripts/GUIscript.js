#pragma strict

var GUIhealth: Transform;
var GUIscore: Transform; 
var GUIpowers: Transform;

var health: int;
var score: int;
var powers: String;

function Start () {
	health = 3;
	score = 0;
	powers = "0 0 0";
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