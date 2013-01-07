#pragma strict

private var lastTime: float = -1.0;
var player : Transform;

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
		//Speedy Cheat for android
		if (Input.GetKeyDown(KeyCode.Menu)){
			if (player.GetComponent(playermovement).forwardSpeed == 15){
				player.GetComponent(playermovement).forwardSpeed = 50;
			}else {
				player.GetComponent(playermovement).forwardSpeed = 15;
			}
		}
	}
	//Speedy Cheat for windows
	if (Input.GetKeyDown(KeyCode.W)){
		if (player.GetComponent(playermovement).forwardSpeed == 15){
			player.GetComponent(playermovement).forwardSpeed = 50;
		}else {
			player.GetComponent(playermovement).forwardSpeed = 15;
		}
	}
}