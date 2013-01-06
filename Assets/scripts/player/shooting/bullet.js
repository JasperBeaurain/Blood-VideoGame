#pragma strict
private var shot:boolean = false;
var player : Transform;


function Start () {
	yield WaitForSeconds(2);
	shot = true;
}

function Update () {
	if(shot){
		transform.position.z += 30 * Time.deltaTime + 0.5;
		transform.position.x = player.position.x;
	}
	
	//Remove bullet if it hits nothing
	if (transform.position.z > player.position.z + 150){
		Destroy(gameObject);
	}
}

function OnTriggerEnter (collider : Collider) {
	//destroy enemy and bullet when bullet collides with it
    if(collider.gameObject.tag == "enemy"){
    	Destroy(collider.gameObject);
    	Destroy(gameObject);
    }
}