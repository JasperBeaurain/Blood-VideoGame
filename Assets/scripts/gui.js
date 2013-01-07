#pragma strict

var lastTime: float = -1.0;

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
	}
	
}