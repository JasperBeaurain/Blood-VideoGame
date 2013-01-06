#pragma strict
var derp:boolean = false;
function Start () {
	yield WaitForSeconds(5);
	derp = true;
}

function Update () {
	if(derp){
		transform.position.z += 30 * Time.deltaTime;
	}
}