#pragma strict

var powerspawnInterval:float;
var powerupPrefab:Transform;
var powerdownPrefab:Transform;
var stoppowerspawn : boolean = false;
var spawndownnumber	: int;	//default is 2: spawns equal amout of up and down

private var upordown:int = 1;
private var wallLeftX:float;
private var wallRightX:float;

function Start () {
	//spawn an power every x seconds, at a random position
	while (true) {
		if (!stoppowerspawn){
		upordown = Random.Range(0,spawndownnumber);
		if (upordown == 0){		//powerups
			yield WaitForSeconds(powerspawnInterval);
	  		var powerupposOffset:float = Random.Range(0.6,(wallRightX-wallLeftX)-0);
	    	var powerupspawnPos:Vector3 = Vector3(wallLeftX + powerupposOffset ,0,transform.position.z);
	    	Instantiate( powerupPrefab, powerupspawnPos, powerupPrefab.rotation);
	    }else if (upordown > 0) {	//powerdown
	    	yield WaitForSeconds(powerspawnInterval);
	  		var powerdownposOffset:float = Random.Range(0.6,(wallRightX-wallLeftX)-0);
	    	var powerdownspawnPos:Vector3 = Vector3(wallLeftX + powerdownposOffset ,0,transform.position.z);
	    	Instantiate( powerdownPrefab, powerdownspawnPos, powerupPrefab.rotation);
	    }
	    }
    }
}

function Update () {

}

