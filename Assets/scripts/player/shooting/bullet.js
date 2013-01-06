#pragma strict
private var shot:boolean = false;
var player : Transform;

function Start () {
	shot = true;
}

function Update () {
	if(shot){
		transform.position.z += 30 * Time.deltaTime + 0.5;
	}
	
	//Remove bullet if it hits nothing
	if (transform.position.z > player.position.z + 150){
		Destroy(gameObject);
	}
	// Shoots bullet at keypress
	if (Input.GetButtonDown("Fire1")) {	
		Instantiate(bullet, Vector3(transform.position.x,transform.position.y,transform.position.z+1), transform.rotation);
	}
}

function OnTriggerEnter (collider : Collider) {
	//destroy enemy and bullet when bullet collides with it
    if(collider.gameObject.tag == "enemy"){
    	Destroy(collider.gameObject);
    	Destroy(gameObject);
    }
}