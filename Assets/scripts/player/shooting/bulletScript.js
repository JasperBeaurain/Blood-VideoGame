#pragma strict
private var player : GameObject;
var shotSpeed:float = 30;
var maxShotDistance:int = 150;

function Start () {
	player = GameObject.Find("player");
}

function Update () {
	
	transform.position.z += shotSpeed * Time.deltaTime;
	
//	Remove bullet if it hits nothing
	if (transform.position.z > player.transform.position.z + maxShotDistance){
		Destroy(gameObject);
	}
}

function OnTriggerEnter (collider : Collider) {
	//destroy enemy and bullet when bullet collides with it
    if(collider.gameObject.tag == "enemy"){
    	Destroy(collider.gameObject);
    	Destroy(gameObject);
    	Debug.Log("Shot an enemy!");
    }
}