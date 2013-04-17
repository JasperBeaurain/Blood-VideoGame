#pragma strict

//speeds
var forwardSpeed: float = 15.0;
var horizontalSpeed : float = 10.0;

var androidHorizontalSpeed:float = 15.0;
var target:Transform;
var guide:Transform;
private var gui : GameObject;
public static var distTravelled:float;

function Start () {

}

function Update () {

 	if(Application.platform == RuntimePlatform.Android){
		//Android Version
		rigidbody.velocity = -Input.acceleration.y * androidHorizontalSpeed * transform.right;
 	}else{
	 	//Pc version!
		rigidbody.velocity = Input.GetAxis("Horizontal") * horizontalSpeed *transform.right;
 	}
	var translation = Time.deltaTime * forwardSpeed;
	transform.Translate (0,0,translation);
	
	//rotate along with level
	var dist:float;
	dist = transform.position.x - guide.position.x;
	//transform.LookAt(Vector3(target.position.x+dist,target.position.y,target.position.z));
	
	var rotation = Quaternion.LookRotation(Vector3(target.position.x+dist,target.position.y,target.position.z) - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * 6.0);

	
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
	//health
    if(collider.gameObject.tag == "enemy"){
    	gui = GameObject.Find("GUI");
		gui.GetComponent(GUIscript).health += 2;
		Destroy(collider.gameObject);
    }
    	//destroy entity when you collide with it
    	Destroy(collider.gameObject);
}

function OnDestroy(){
	//reset distance travelled when script is destroyed
	distTravelled = 0;
}