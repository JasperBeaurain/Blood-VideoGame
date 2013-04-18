#pragma strict

var player : GameObject;

function Start () {
	player = GameObject.Find("player");
}

function Update () {
}

function OnTriggerEnter (collider : Collider) {
	
	if (collider.gameObject.tag == "powerup"){
		player.GetComponent(powers).colup = true;
	}
	Destroy(collider.gameObject);
}