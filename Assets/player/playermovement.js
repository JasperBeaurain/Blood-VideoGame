
function Start () {

}

var leftBorder : float = -5.0;

var rightBorder : float = 5.0;

var forwardSpeed: float = 15.0;
var horizontalSpeed : float = 10.0;

public static var distTravelled:float;

function Update () {

 	if(Application.platform == RuntimePlatform.Android){
		//Android Version
		var cali : Vector3 = Vector3.zero;
		cali.x = -Input.acceleration.y;
		rigidbody.velocity = cali * horizontalSpeed;
 	}else{
	 	//Pc version!
		var x = Input.GetAxis("Horizontal") * horizontalSpeed;
		rigidbody.velocity = Vector3(x,0,0);
 	}
	
	
	/*------NEW PART-----------
	
	if( transform.position.x < leftBorder )
	
	transform.position.x = leftBorder;
	
	if( transform.position.x > rightBorder )
	
	transform.position.x = rightBorder;
	
	*///---------------------------
	
	
	
	var translation = Time.deltaTime * forwardSpeed;
	
	transform.Translate ( 0,0,translation);
	
	//rigidbody.AddForce(0,0,forwardSpeed);
	
	distTravelled = transform.position.z;

}

function OnCollisionEnter(collision : Collision) {
    
    if (collision.gameObject.tag == "levelWall"){
		Debug.Log("Hit the Wall!");
    }
    
}