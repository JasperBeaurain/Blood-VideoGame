#pragma strict

private var decidepower : int = 0;
private var colup : boolean = false;
var coldown : boolean = false;		//do not config in unity editor!
var power1 : int = 0;
var power2 : int = 0;
var power3 : int = 0;

function Start () {

}

function Update () {
	if (colup){
	
		decidepower = Random.Range(1,4);
		
			//Check to see what powers are already active so you can add to others instead
		if (power1 == 1 && decidepower == 1){
			decidepower = 2;}
		if (power2 == 1 && decidepower == 2){
			decidepower = 3;}
		if (power3 == 1 && decidepower == 3){
			decidepower = 1;}
		if (power1 == 1 && power2 == 1 && power3 == 1){	//check to see if all powers are active
			GetComponent(PowerSpawner).stoppowerspawn = true;
			colup = false;
			return;
		}
		
		if (power1 == -1){		//if there is a negative power add to that first
			decidepower = 1;
		}else if (power2 == -1){
			decidepower = 2;
		}else if (power3 == -1){
			decidepower = 3;}
		
		if (decidepower == 1){	//check what power 
			if (power1 == 0){	//check state of power
				power1 += 1;	//set state of power
				setpower1(1);	//start powerup script (1-> powerup ; 0 -> normal ; -1 -> powerdown)
			}else if (power1 == -1){
				power1 += 1;
				setpower1(0);		
			}
		}else if (decidepower == 2){
			if (power2 == 0){
				power2 += 1;
				setpower2(1);
			}else if (power2 == -1){
				power2 += 1;
				setpower2(0);
			}
		}else if (decidepower == 3){
			if (power3 == 0){
				power3 += 1;
				setpower3(1);
			}else if (power3 == -1){
				power3 += 1;
				setpower3(0);	
			}
		}
	colup = false;		//stop update
	}else if (coldown){
	
		decidepower = Random.Range(1,4);
		
		if (power1 == -1 && decidepower == 1){
			decidepower = 2;}
		if (power2 == -1 && decidepower == 2){
			decidepower = 3;}
		if (power3 == -1 && decidepower == 3){
			decidepower = 1;}
		if (power1 == -1 && power2 == -1 && power3 == -1){
		coldown = false;
		Debug.Log("You died!");		//End of the line (=dead)
		return;
		}
		
		if (power1 == 1){
			decidepower = 1;
		}else if (power2 == 1){
			decidepower = 2;
		}else if (power3 == 1){
			decidepower = 3;}
		
		if (decidepower == 1){
			if (power1 == 0){
				power1 -= 1;
				setpower1(-1);
			}else if (power1 == 1){
				power1 -= 1;
				setpower1(0);
			}
		}else if (decidepower == 2){
			if (power2 == 0){
				power2 -= 1;
				setpower2(-1);
			}else if (power2 == 1){
				power2 -= 1;
				setpower2(0);
			}
		}else if (decidepower == 3){
			if (power3 == 0){
				power3 -= 1;
				setpower3(-1);
			}else if (power3 == -1){
				power3 -= 1;
				setpower3(0);		
			}
		}
		coldown = false;
	}
}

function OnTriggerEnter(collider : Collider) {
	if (collider.gameObject.tag == "powerup"){
		colup = true;
    }else if (collider.gameObject.tag == "powerdown"){
		coldown = true;					
	}
}


/////////////// SETTING POWERS ///////////////


function setpower1(type : int){
	if (type == 1){
		//add powerup code
		
	}else if (type == 0){
		//add normalizer code
		
	}else if (type == -1){
		//add powerdown code
		
	}
}

function setpower2(type : int){
	if (type == 1){
		//add powerup code
		
	}else if (type == 0){
		//add normalizer code
		
	}else if (type == -1){
		//add powerdown code
		
	}
}

function setpower3(type : int){
	if (type == 1){
		//add powerup code
		
	}else if (type == 0){
		//add normalizer code
		
	}else if (type == -1){
		//add powerdown code
		
	}
}