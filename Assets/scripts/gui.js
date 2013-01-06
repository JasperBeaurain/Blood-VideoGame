#pragma strict

private var backtimes : int;

function Start () {
	backtimes = 0;
}

function Update () {
	if(Application.platform == RuntimePlatform.Android){
		//Close option for Android Version
		if (Input.GetKey(KeyCode.Escape)){
			backtimes = backtimes + 1;
			if (backtimes == 2){
		 		backtimes = 0; 
		 		Application.Quit();
			}
		}
	}
	 
}