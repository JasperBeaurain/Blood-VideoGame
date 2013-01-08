#pragma strict

private var decidepower : int = 0;
private var col : boolean;
var power1 : int = 0;
var power2 : int = 0;
var power3 : int = 0;

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision) {

/////////////// POWERUPS ///////////////

	if (collision.gameObject.tag == "powerup"){
		col = true;
		while(col){
		
			decidepower = Random.Range(1,4);
		
				//Check to see what powers are already active
			if (power1 == 1 && decidepower == 1){
				decidepower = 2;}
			if (power2 == 1 && decidepower == 2){
				decidepower = 3;}
			if (power3 == 1 && decidepower == 3){
				decidepower = 1;}
			if (power1 == 1 && power2 == 1 && power3 == 1){col=false;yield;}	//check to see if all powers are active
			
			
			if (decidepower == 1){	//check what power 
				if (power1 == 0){	//check state of power
					power1 += 1;	//set state of power
					setpower1(1);	//start powerup script (1-> powerup ; 0 -> normal ; -1 -> powerdown)
					col = false;	//stop loop
				}else if (power1 == -1){
					power1 += 1;
					setpower1(0);
					col = false;				
				}
			}else if (decidepower == 2){
				if (power2 == 0){
					power2 += 1;
					setpower2(1);
					col = false;
				}else if (power2 == -1){
					power2 += 1;
					setpower2(0);
					col = false;				
				}
			}else if (decidepower == 3){
				if (power3 == 0){
					power3 += 1;
					setpower3(1);
					col = false;
				}else if (power3 == -1){
					power3 += 1;
					setpower3(0);
					col = false;				
				}
			}
				
	    }
    }
    
    /////////////// POWERDOWNS ///////////////
    
    if (collision.gameObject.tag == "powerdown"){
		col = true;
		while(col){
		
			decidepower = Random.Range(1,4);
		
			if (power1 == -1 && decidepower == 1){
				decidepower = 2;}
			if (power2 == -1 && decidepower == 2){
				decidepower = 3;}
			if (power3 == -1 && decidepower == 3){
				decidepower = 1;}
			if (power1 == -1 && power2 == -1 && power3 == -1){col=false;Debug.Log("You Died!");}		//End of the line (=dead)
			
			
			if (decidepower == 1){
				if (power1 == 0){
					power1 -= 1;
					setpower1(-1);
					col = false;
				}else if (power1 == 1){
					power1 -= 1;
					setpower1(0);
					col = false;				
				}
			}else if (decidepower == 2){
				if (power2 == 0){
					power2 -= 1;
					setpower2(-1);
					col = false;
				}else if (power2 == 1){
					power2 -= 1;
					setpower2(0);
					col = false;				
				}
			}else if (decidepower == 3){
				if (power3 == 0){
					power3 -= 1;
					setpower3(-1);
					col = false;
				}else if (power3 == -1){
					power3 -= 1;
					setpower3(0);
					col = false;				
				}
			}
				
	    }
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