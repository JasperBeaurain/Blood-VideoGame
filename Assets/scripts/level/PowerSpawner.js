#pragma strict

var powerspawnInterval:float;
var powerupPrefab:Transform;
var powerdownPrefab:Transform;
var stoppowerupspawn : boolean;
var spawndownnumber	: int;	//default is 2: spawns equal amout of up and down

private var upordown:int;
private var wallLeftX:float;
private var wallRightX:float;
private var firstTime:boolean = true;

function Start () {
	//spawn an power every x seconds, at a random position
	while (true) {
		upordown = Random.Range(0,spawndownnumber);
		if (!stoppowerupspawn){		//do not spawn powerups when you have all of them
			if (upordown == 0){		//powerups
				yield WaitForSeconds(powerspawnInterval);
	  			var powerupposOffset:float = Random.Range(0.7,(wallRightX-wallLeftX)-0.7);
	  		  	var powerupspawnPos:Vector3 = Vector3(wallLeftX + powerupposOffset ,0,transform.position.z);
	 		   	Instantiate( powerupPrefab, powerupspawnPos, powerupPrefab.rotation);
			}
    	}
    	if (upordown > 0) {	//powerdown
	    	yield WaitForSeconds(powerspawnInterval);
			var powerdownposOffset:float = Random.Range(1.3,(wallRightX-wallLeftX)-1.3);
	    	var powerdownspawnPos:Vector3 = Vector3(wallLeftX + powerdownposOffset ,0,transform.position.z);
	    	Instantiate( powerdownPrefab, powerdownspawnPos, powerupPrefab.rotation);
		}
	}
}

function Update () {
	//is this the first time the update() runs?
	if(firstTime){
		//avoid glitches that might occur when update() would be at the same moment as start()
		firstTime = false;
	}else{
		
		//keep itself centered within the level
		var wallHitLeft : RaycastHit;
		var wallHitRight : RaycastHit;
		
		if (Physics.Raycast (transform.position, Vector3.left, wallHitLeft)) {
			if(Physics.Raycast (transform.position, Vector3.right, wallHitRight)){
				if(wallHitLeft.transform.gameObject.tag == "levelWall" && wallHitRight.transform.gameObject.tag == "levelWall"){
					wallLeftX = Mathf.Round(wallHitLeft.point.x*1000)/1000;
					wallRightX = Mathf.Round(wallHitRight.point.x*1000)/1000;
					transform.position.x = wallLeftX + (wallRightX - wallLeftX)/2;
					
				}
			}
		}
	}
}

