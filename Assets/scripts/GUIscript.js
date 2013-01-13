#pragma strict

var GUIhealth: Transform;
var GUIscore: Transform; 
var GUIpowers: Transform;
var GUIcooldown: Transform;
var player : Transform;

var health: int = 100;
var score: int = 0;
var powers: String;
var cooldown: String;

var warncooldown1 : String;
var warncooldown2 : String;
var warncooldown3 : String;
var warncooldown4 : String;

function Start () {
}

function Update () {
	GUIhealth.guiText.text = health.ToString();
	GUIscore.guiText.text = score.ToString();
	GUIpowers.guiText.text = powers;
	
	cooldown = warncooldown1 + " " + warncooldown2 + " " + warncooldown3 + " " + warncooldown4;
	GUIcooldown.guiText.text = cooldown;
	
	
	if (health <= 0){
		//Debug.Log("You died!");		//End of the line (=dead)
		Application.LoadLevel(0);
	}
}