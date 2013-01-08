#pragma strict

private var lastTime: float = -1.0;
private var spawnedbullets : int = 0;
var player : Transform;
var bullet : Transform;

function Start () {
	
}

function Update () {

	if(Application.platform == RuntimePlatform.Android){
		//Close option for Android Version	
		if (Input.GetKeyDown(KeyCode.Escape)){
			if (Time.time - lastTime < 0.5){
				Application.Quit();
   			 }else {
				lastTime = Time.time;
   			 }
		}
		//Cheats for android
		if (Input.GetKeyDown(KeyCode.Menu)){
			if (Time.time - lastTime < 0.2){
				SpeedyCheat();
			}else {
				BulletCheat();
				lastTime = Time.time;
			}
		}
	}
	
	//Cheats for windows
	if (Input.GetKeyDown(KeyCode.W)){
		SpeedyCheat();
	}else if (Input.GetKeyDown(KeyCode.X)){
		BulletCheat();
	}
}

function SpeedyCheat() {
	if (player.GetComponent(playermovement).forwardSpeed == 15){
		player.GetComponent(playermovement).forwardSpeed = 50;
	}else {
		player.GetComponent(playermovement).forwardSpeed = 15;
	}
}

function BulletCheat() {
	while(spawnedbullets < 16){
		spawnedbullets += 1;
		// create bullets
		var bulletPos:Vector3;
		bulletPos = player.transform.position;
		bulletPos.z += 5;
		bulletPos.x = -4 + spawnedbullets/2;
		Instantiate(bullet,bulletPos,bullet.rotation);
	}
	spawnedbullets = 0;
}