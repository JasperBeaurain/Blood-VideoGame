#pragma strict

var player:Transform;
var enemyPrefab:Transform;
var spawnInterval:float;
var spawnDistance:float;

private var firstTime:boolean = true;

private var wallLeftX:float;
private var wallRightX:float;

function Start () {
	
	//position itself inside the level
	var hitLeft : RaycastHit;
	var hitRight : RaycastHit;
	
	if (Physics.Raycast (Vector3(-200,0,transform.position.z), Vector3.right, hitLeft)) {
		if(Physics.Raycast (Vector3(200,0,transform.position.z), Vector3.left, hitRight)){
			if(hitLeft.transform.gameObject.tag == "levelWall" && hitRight.transform.gameObject.tag == "levelWall"){
			
				var left:float = Mathf.Round(hitLeft.point.x*1000)/1000;	//limit the number of decimal places
				var right:float = Mathf.Round(hitRight.point.x*1000)/1000;	//computer will calculate incorrectly otherwise
				transform.position.x = left + (right - left)/2;
			}
		}
	}
	
	//spawn an enemy every x seconds, at a random position
	while (true) {
        yield WaitForSeconds(spawnInterval);
        var posOffset:float = Random.Range(0.7,(wallRightX-wallLeftX)-0.7);
        var spawnPos:Vector3;
        spawnPos = Vector3(wallLeftX + posOffset ,0,transform.position.z);
        Instantiate( enemyPrefab, spawnPos, enemyPrefab.rotation);
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
	
	//keep itself x meter in front of the player
	transform.position.z = player.position.z + spawnDistance;
}