#pragma strict

var shotSpeed:float = 30;
var maxShotDistance:int = 150;
private var gui : GameObject;
private var player : GameObject;

function Start () {
	//get the player
	player = GameObject.Find("player");
}

function Update () {
	
	//make the bullet move
	transform.position.z += shotSpeed * Time.deltaTime;
	
	//Remove bullet if it hits nothing
	if (transform.position.z > player.transform.position.z + maxShotDistance){
		Destroy(gameObject);
	}
}

function OnTriggerEnter (collider : Collider) {
	//destroy enemy and bullet when bullet collides with it
    if(collider.gameObject.tag == "enemy"){
    	Destroy(collider.gameObject);
    	Destroy(gameObject);
    	//Debug.Log("Shot an enemy!");
    	
    	//add to score
		gui = GameObject.Find("GUI");
    	gui.GetComponent(GUIscript).score += 1;
    	
    }else if(collider.gameObject.tag == "powerup" || collider.gameObject.tag == "powerdown"){
    	Destroy(gameObject);
    	//Debug.Log("Shot an power!");
    }
}