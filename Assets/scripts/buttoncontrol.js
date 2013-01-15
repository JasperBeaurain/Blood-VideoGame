#pragma strict

private var lastTime: float = -1.0;
private var spawnedbullets : int = 0;
var player : Transform;
var bullet : Transform;
var shield : Transform;

function Start () {
	
}

function Update () {

	if(Application.platform == RuntimePlatform.Android){
		//Back to menu option for Android Version	
		if (Input.GetKeyDown(KeyCode.Escape)){
			if (Time.time - lastTime < 0.5){
				Application.LoadLevel(0);
   			 }else {
				lastTime = Time.time;
   			 }
		}
		//Cheats for android
		if (Input.GetKeyDown(KeyCode.Menu)){
			if (Time.time - lastTime < 0.2){
				SpeedyCheat();
			}else {
				ShieldCheat();
				lastTime = Time.time;
			}
		}
	}else{
		//Cheats for windows
		if (Input.GetKeyDown(KeyCode.W)){
			SpeedyCheat();
		}else if (Input.GetKeyDown(KeyCode.X)){
			ShieldCheat();
		}else if(Input.GetKeyDown(KeyCode.Escape)){
			Application.LoadLevel(0);
		}
	}
}

function SpeedyCheat() {
	if (player.GetComponent(playermovement).forwardSpeed == 15){
		player.GetComponent(playermovement).forwardSpeed += 35;
		bullet.GetComponent(bulletScript).shotSpeed += 35;
	}else {
		player.GetComponent(playermovement).forwardSpeed = 15;
		bullet.GetComponent(bulletScript).shotSpeed = 50;
	}
}

function ShieldCheat() {

	var existingShield : GameObject = GameObject.FindWithTag("shield");
	
	if (existingShield){
		Destroy(existingShield);
		player.GetComponent(shooting).bulletExtraZPos = 1;
	}else {
		var ShieldPos:Vector3;
		ShieldPos = player.transform.position;
		ShieldPos.z += 2;
		Instantiate(shield,ShieldPos,shield.rotation);
		player.GetComponent(shooting).bulletExtraZPos = 3;
	}
}