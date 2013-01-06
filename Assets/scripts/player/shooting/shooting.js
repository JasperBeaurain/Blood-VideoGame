#pragma strict

var bullet:Transform;

function Start () {
}

function Update () {
	//create a new bullet when fireing
	if(Input.GetButtonDown("Fire1")){
		var bulletPos:Vector3;
		bulletPos = transform.position;
		bulletPos.z += 0.5;
		Instantiate(bullet,bulletPos,bullet.rotation);
	}
}