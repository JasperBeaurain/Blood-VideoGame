#pragma strict

private var startRatio:float;
private var firstTime:boolean = true;
function Start () {
}

function Update () {
	if (firstTime){
		startRatio = calc(true);
		firstTime = false;
	}
	
	var hitLeftPoint : RaycastHit;
	var leftXPos:float;
	if (Physics.Raycast (transform.position, Vector3.left, hitLeftPoint)) {
		if(hitLeftPoint.transform.gameObject.tag == "levelWall"){
			leftXPos = hitLeftPoint.point.x;
			transform.position.x = leftXPos + (calc(false) * startRatio);
		}
	}	
	
	var translation = Time.deltaTime * -5;
	transform.Translate ( 0,0,translation);
	
	var player : GameObject;
	player = GameObject.Find("player");
	
	if (player.transform.position.z - 10 > transform.position.z) {
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
					return tubeWidth;
				}else{
					distToLeft = Vector3.Distance(hitLeft.point,transform.position);
					ratio = distToLeft/tubeWidth;
					return ratio;
				}
			}
		}
	}
}