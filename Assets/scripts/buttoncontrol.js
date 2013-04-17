#pragma strict

private var lastTime: float = -1.0;
private var spawnedbullets : int = 0;
var player : Transform;
var bullet : Transform;
var shield : Transform;
var Gui:Transform;

	//Cheats keys caching 
	
	private var fdown:boolean=false;
	private var adown:boolean=false;
	private var sdown:boolean=false;
	private var tdown:boolean=false;
	
	private var hdown:boolean=false;
	private var idown:boolean=false;
	private var edown:boolean=false;
	private var ldown:boolean=false;
	private var ddown:boolean=false;

function Start () {
	
}

function Update () {
	if(!Gui.GetComponent(GUIscript).paused && !Gui.GetComponent(GUIscript).dead ){
		if(Application.platform == RuntimePlatform.Android){
			//Back to menu option for Android Version	
			if (Input.GetKeyDown(KeyCode.Escape)){
				if (Time.time - lastTime < 0.5){
					Gui.GetComponent(GUIscript).SendMessage("Pause");
	   			 }else {
					lastTime = Time.time;
	   			 }
			}
			//Cheats for android
			/*if (Input.GetKeyDown(KeyCode.Menu)){
				if (Time.time - lastTime < 0.2){
					SpeedyCheat();
				}else {
					ShieldCheat();
					lastTime = Time.time;
				}
			}*/
		}else{
			if(Input.GetKeyDown(KeyCode.Escape)){
				Gui.GetComponent(GUIscript).SendMessage("Pause");
			}
			
	//Cheats for windows
			//speed FAST
			else if (Input.GetKeyDown(KeyCode.F)){fdown=!fdown;}
			else if (Input.GetKeyDown(KeyCode.A)){adown=!adown;}
			else if (Input.GetKeyDown(KeyCode.S)){sdown=!sdown;}
			else if (Input.GetKeyDown(KeyCode.T)){tdown=!tdown;}
			
			else if (fdown&&adown&&sdown&&tdown){
				SpeedyCheat();
				fdown=false;
				adown=false;
				sdown=false;
				tdown=false;
			}
			//SHIELD
			else if (Input.GetKeyDown(KeyCode.H)){hdown=!hdown;}
			else if (Input.GetKeyDown(KeyCode.I)){idown=!idown;}
			else if (Input.GetKeyDown(KeyCode.E)){edown=!edown;}
			else if (Input.GetKeyDown(KeyCode.L)){ldown=!ldown;}
			else if (Input.GetKeyDown(KeyCode.D)){ddown=!ddown;}
			else if (sdown&&hdown&&idown&&edown&&ldown&&ddown){
				ShieldCheat();
				sdown=false;
				hdown=false;
				idown=false;
				edown=false;
				ldown=false;
				ddown=false;
			}
			//reset all on press of R
			else if (Input.GetKeyDown(KeyCode.R)){
				fdown=false;
				adown=false;
				sdown=false;
				tdown=false;
				hdown=false;
				idown=false;
				edown=false;
				ldown=false;
				ddown=false;
				player.GetComponent(playermovement).forwardSpeed = 15;
			}
		}
	}else{
		if(!Gui.GetComponent(GUIscript).dead){
			if(Input.GetKeyDown(KeyCode.Escape)){
				Gui.GetComponent(GUIscript).SendMessage("Pause");
			}
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