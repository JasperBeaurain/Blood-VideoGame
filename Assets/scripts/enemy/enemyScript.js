#pragma strict

var enemySpeed:float = -5.0;
private var startRatio:float;
private var firstTime:boolean = true;

function Start () {
}

function Update () {

	if (firstTime){
		//determine the ratio at the first update
		startRatio = calc(true);
		firstTime = false;
	}
	
	//stay centered in the level
	var hitLeftPoint : RaycastHit;
	var leftXPos:float;
	if (Physics.Raycast (transform.position, Vector3.left, hitLeftPoint)) {
		if(hitLeftPoint.transform.gameObject.tag == "levelWall"){
			leftXPos = hitLeftPoint.point.x;
			transform.position.x = leftXPos + (calc(false) * startRatio);
		}
	}	
	
	//move forward
	var translation = enemySpeed * Time.deltaTime;
	transform.Translate ( 0,0,translation);
	
	//despawn 10 meter behind the player
	var player : GameObject;
	player = GameObject.Find("player");
	
	if (transform.position.z + 10 < player.transform.position.z){
		Destroy(gameObject);
	}
}

function calc(isRatio:boolean){
	var hitLeft : RaycastHit;
	var hitRight : RaycastHit;
	
	var tubeWidth:float;
	var distToLeft:float;
	var ratio:float;
	if (Physics.Raycast (transform.position, Vector3.left, hitLeft)) {
		if(Physics.Raycast (transform.position, Vector3.right, hitRight)){
			if(hitLeft.transform.gameObject.tag == "levelWall" && hitRight.transform.gameObject.tag == "levelWall"){
				tubeWidth = Vector3.Distance(hitLeft.point,hitRight.point);
				if(isRatio == false){
					return tubeWidth;	//return only the width
				}else{
					distToLeft = Vector3.Distance(hitLeft.point,transform.position);
					ratio = distToLeft/tubeWidth;
					return ratio;		//return the ratio
				}
			}
		}
	}
}