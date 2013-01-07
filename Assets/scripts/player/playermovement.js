#pragma strict

//speeds
var forwardSpeed: float = 15.0;
var horizontalSpeed : float = 10.0;

var androidHorizontalSpeed:float = 15.0;

public static var distTravelled:float;

function Start () {

}

function Update () {

 	if(Application.platform == RuntimePlatform.Android){
		//Android Version
		var cali : Vector3 = Vector3.zero;
		cali.x = -Input.acceleration.y;
		rigidbody.velocity = cali * androidHorizontalSpeed;
 	}else{
	 	//Pc version!
		var x = Input.GetAxis("Horizontal") * horizontalSpeed;
		rigidbody.velocity = Vector3(x,0,0);
 	}
	
	var translation = Time.deltaTime * forwardSpeed;
	transform.Translate ( 0,0,translation);
	
	//keep track of the current distance the player has travelled
	distTravelled = transform.position.z;

}

function OnCollisionEnter(collision : Collision) {
    //debug when colliding with the wall, might be needed for future use
    if (collision.gameObject.tag == "levelWall"){
		//Debug.Log("Hit the Wall!");
    }
    
}


function OnTriggerEnter (collider : Collider) {
	//destroy enemy when you collide with it
   // if(collider.gameObject.tag == "enemy"){
    	Destroy(collider.gameObject);
   // }
}