#pragma strict

var bullet:Transform;
var shootdelay:float = 0.2;
var shoottype:String = "triple";
var bulletPos:Vector3;
var bulletExtraZPos : float = 1;
private var lastTime: float = 0.0;

function Start () {
}

function Update () {
	if(Input.GetButton("Fire1")){
		if (Time.time - lastTime > shootdelay){
			lastTime = Time.time;
			//create a new bullet when fireing
			bulletPos = transform.position;
			bulletPos.z += bulletExtraZPos;
			if (shoottype == "triple"){		//or create triple ones when powerup is active
				Instantiate(bullet,bulletPos,bullet.rotation);
				bulletPos.x += 1;
				Instantiate(bullet,bulletPos,bullet.rotation);
				bulletPos.x -= 2;
				Instantiate(bullet,bulletPos,bullet.rotation);
   		 	}else {
   		 		Instantiate(bullet,bulletPos,bullet.rotation);
   		 	}
   		 }
	}
}