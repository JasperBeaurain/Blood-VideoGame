#pragma strict

var GUIhealth: Transform;
var GUIscore: Transform; 
var GUIpowers: Transform;

var heath: int;
var score: int;
var powers: String;

function Start () {
	health = 100;
	score = 0;
	powers = "0 0 0";
}

function Update () {
	GUIhealth.guiText.text = heath;
	GUIscore.guiText.text = score;
	GUIpowers.guiText.text = powers;
}