#pragma strict

var startRatio:float;
var firstTime:boolean;
function Start () {
	firstTime = true;
}

function Update () {
	if (firstTime){
		startRatio = calc(true);
		firstTime = false;
	}


	
	var hitLeftPoint : RaycastHit;
	var leftXPos:float;
	if (Physics.Raycast (transform.position, Vector3.left, hitLeftPoint, 150.0)) {
		leftXPos = hitLeftPoint.point.x;
		transform.position.x = leftXPos + (calc(false) * startRatio);
	}
	
	//transform.position = (raycast nr links zijn pos) + (ratio * startRatio)
	
	
	var translation = Time.deltaTime * -2;
	
	transform.Translate ( 0,0,translation);
}

function calc(isRatio:boolean){
	var hitLeft : RaycastHit;
	var hitRight : RaycastHit;
	
	var tubeWidth:float;
	var distToLeft:float;
	var ratio:float;
	if (Physics.Raycast (transform.position, Vector3.left, hitLeft, 150.0)) {
		if(Physics.Raycast (transform.position, Vector3.right, hitRight, 150.0)){
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