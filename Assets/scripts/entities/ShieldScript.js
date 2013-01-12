#pragma strict

var player : GameObject;

function Start () {
	player = GameObject.Find("player");
}

function Update () {
	var translation = Time.deltaTime * player.GetComponent(playermovement).forwardSpeed;
	transform.Translate ( 0,0,translation);
	transform.position.x = player.transform.position.x;
}

function OnTriggerEnter (collider : Collider) {
	
	if (collider.gameObject.tag == "powerup"){
		player.GetComponent(powers).colup = true;
	}
	Destroy(collider.gameObject);
}