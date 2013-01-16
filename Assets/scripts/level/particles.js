#pragma strict

var player:Transform;
var spawnDistance:float = 75;

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
}

function Update () {
	//keep itself x meter in front of the player
	transform.position.z = player.position.z + spawnDistance;
}