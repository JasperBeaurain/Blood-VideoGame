#pragma strict

var bullet:Transform;
var shootdelay:float = 0.2;
var shoottype:String = "triple";
var bulletPos:Vector3;
var bulletExtraZPos : float = 1.75;
private var lastTime: float = 0.0;

function Start () {
}

function Update () {
	if(!GUIscript.paused){
		if(Input.GetButton("Fire1")){
			if (Time.time - lastTime > shootdelay){
				lastTime = Time.time;
				//create a new bullet when fireing
				bulletPos = transform.position;
				bulletPos.z += bulletExtraZPos;
				if (shoottype == "triple"){		//or create triple ones when powerup is active
					Instantiate(bullet,bulletPos,transform.rotation);
					bulletPos.x += 0.75;
					Instantiate(bullet,bulletPos,transform.rotation);
					bulletPos.x -= 1.5;
					Instantiate(bullet,bulletPos,transform.rotation);
	   		 	}else {
	   		 		Instantiate(bullet,bulletPos,transform.localRotation);
	   		 	}
	   		 }
		}
	}
}