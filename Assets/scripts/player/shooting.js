#pragma strict

var bullet:Transform;
var shootdelay:float = 0.2;
private var lastTime: float = 0.0;

function Start () {
}

function Update () {
	if(Input.GetButton("Fire1")){
		if (Time.time - lastTime > shootdelay){
			lastTime = Time.time;
			//create a new bullet when fireing
			var bulletPos:Vector3;
			bulletPos = transform.position;
			bulletPos.z += 0.5;
			Instantiate(bullet,bulletPos,bullet.rotation);
   		 }
	}
}