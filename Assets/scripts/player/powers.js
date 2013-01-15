#pragma strict

private var decidepower : int = 0;
private var startcooldown : boolean;
private var warncooldown1 : boolean = false;
private var warncooldown2 : boolean = false;
private var warncooldown3 : boolean = false;
private var warncooldown4 : boolean = false;
private var warncooldown5 : boolean = false;
var spawner : Transform;
var colup : boolean = false;		//do not config in unity editor!
var coldown : boolean = false;		//do not config in unity editor!
var player : Transform;
var bullet : Transform;
var shield : Transform;
var PowerupCooldown : int = 10;
var power1 : int = 0;
var power2 : int = 0;
var power3 : int = 0;
var power4 : int = 0;
var power5 : int = 0;

function Start () {
}

function Update () {
	/////////////// POWERUP ///////////////
	if (colup){
		decidepower = Random.Range(1,6);
		
			//Check to see what powers are already active so you can add to others instead
		if (power1 == 1 && decidepower == 1){
			decidepower = 2;}
		if (power2 == 1 && decidepower == 2){
			decidepower = 3;}
		if (power3 == 1 && decidepower == 3){
			decidepower = 4;}
		if (power4 == 1 && decidepower == 4){
			decidepower = 5;}
		if (power5 == 1 && decidepower == 5){
			decidepower = 1;}
		if (power1 == 1 && power2 == 1 && power3 == 1 && power4 == 1 && power5 == 1){		//check to see if all powers are active (prevents +2)
			spawner.GetComponent(PowerSpawner).stoppowerupspawn = true;
			colup = false;
			return;
		}
		
		if (power1 == -1){		//if there is a negative power add to that first
			decidepower = 1;
		}else if (power2 == -1){
			decidepower = 2;
		}else if (power3 == -1){
			decidepower = 3;
		}else if (power4 == -1){
			decidepower = 4;
		}else if (power5 == -1){
			decidepower = 5;}
		
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
		}else if (decidepower == 4){
			if (power4 == 0){
				power4 += 1;
				setpower4(1);
			}else if (power4 == -1){
				power4 += 1;
				setpower4(0);	
			}
		}else if (decidepower == 5){
			if (power5 == 0){
				power5 += 1;
				setpower5(1);
			}else if (power5 == -1){
				power5 += 1;
				setpower5(0);	
			}
		}
		
		if (power1 == 1 && power2 == 1 && power3 == 1 && power4 == 1 && power5 == 1){		//check to see if all powers are active
			spawner.GetComponent(PowerSpawner).stoppowerupspawn = true;
		}
		
		colup = false;		//stop update
		
		/////////////// POWERDOWN ///////////////
	}else if (coldown){
		spawner.GetComponent(PowerSpawner).stoppowerupspawn = false;
		decidepower = Random.Range(1,6);
		
		if (power1 == -1 && decidepower == 1){
			decidepower = 2;}
		if (power2 == -1 && decidepower == 2){
			decidepower = 3;}
		if (power3 == -1 && decidepower == 3){
			decidepower = 4;}
		if (power4 == -1 && decidepower == 4){
			decidepower = 5;}
		if (power5 == -1 && decidepower == 5){
			decidepower = 1;}
		if (power1 == -1 && power2 == -1 && power3 == -1 && power4 == -1 && power5 == -1){
			//Debug.Log("You died!");		//End of the line (=dead)
			coldown = false;
			Application.LoadLevel(0);
		}
		
		if (power1 == 1){
			decidepower = 1;
		}
		if (power2 == 1){
			decidepower = 2;
		}
		if (power3 == 1){
			decidepower = 3;
		}
		if (power4 == 1){
			decidepower = 4;
		}
		if (power5 == 1){
			decidepower = 5;
		}
		if (decidepower == 1){
			if (power1 == 0){
				power1 -= 1;
				setpower1(-1);
			}else if (power1 == 1){
				power1 -= 1;
				warncooldown1 = false;
				setpower1(0);
			}
		}else if (decidepower == 2){
			if (power2 == 0){
				power2 -= 1;
				setpower2(-1);
			}else if (power2 == 1){
				power2 -= 1;
				warncooldown2 = false;
				setpower2(0);
			}
		}else if (decidepower == 3){
			if (power3 == 0){
				power3 -= 1;
				setpower3(-1);
			}else if (power3 == 1){
				power3 -= 1;
				warncooldown3 = false;
				setpower3(0);		
			}
		}else if (decidepower == 4){
			if (power4 == 0){
				power4 -= 1;
				setpower4(-1);
			}else if (power4 == 1){
				power4 -= 1;
				warncooldown4 = false;
				setpower4(0);		
			}
		}else if (decidepower == 5){
			if (power5 == 0){
				power5 -= 1;
				setpower5(-1);
			}else if (power5 == 1){
				power5 -= 1;
				warncooldown5 = false;
				setpower5(0);		
			}
		}
		coldown = false;
		
		if (power1 == -1 && power2 == -1 && power3 == -1 && power4 == -1 && power5 == -1){
			//Debug.Log("You died!");		//End of the line (=dead)
			Application.LoadLevel(0);
		}
	}
	
	/////////////// EXTRA CHECK FOR POWERUPS ///////////////
	if (power1 == 1 && power2 == 1 && power3 == 1 && power4 == 1 && power5 == 1){
		spawner.GetComponent(PowerSpawner).stoppowerupspawn = true;
		var powerup : GameObject = GameObject.FindWithTag("powerup");
		if (powerup){				//remove powerups if all powerups are active
			Destroy(powerup);
		}
	}
		
	//show powers in GUI
	
	var gui : GameObject;
	gui = GameObject.Find("GUI");
    gui.GetComponent(GUIscript).powers = power1+" "+power2+" "+power3+" "+power4+" "+power5;
    //show cooldowns in GUI
    
    var guipowers : GameObject;
    guipowers = GameObject.Find("powers");
    if (warncooldown1||warncooldown2||warncooldown3||warncooldown4||warncooldown5){
    	guipowers.guiText.fontStyle = FontStyle.Italic;
    }else {
    	guipowers.guiText.fontStyle = FontStyle.Normal;
    }
    Debug.Log("");
}

function OnTriggerEnter(collider : Collider) {
	if (collider.gameObject.tag == "powerup"){
		colup = true;
    }else if (collider.gameObject.tag == "powerdown"){
		coldown = true;					
	}
}


/////////////// SETTING POWERS ///////////////


function setpower1(type : int){			//shield
	if (type == 1){				//on powerup
		var ShieldPos:Vector3;
		ShieldPos = player.transform.position;
		ShieldPos.z += 2;
		Instantiate(shield,ShieldPos,shield.rotation);
		player.GetComponent(shooting).bulletExtraZPos = 2.5;
		cooldown(1);
	}else if (type == 0){	//on powerdown while having powerup (normal again)
		var existingShield : GameObject = GameObject.FindWithTag("shield");
		Destroy(existingShield);
		player.GetComponent(shooting).bulletExtraZPos = 1;
	}else if (type == -1){
		//Extra Life
	}
}

function setpower2(type : int){			//shootingspeed
	if (type == 1){
		player.GetComponent(shooting).shootdelay = 0.1;
		cooldown(2);
	}else if (type == 0){
		player.GetComponent(shooting).shootdelay = 0.2;
	}else if (type == -1){
		//Extra Life
		
	}
}

function setpower3(type : int){			//bullets
	if (type == 1){
		player.GetComponent(shooting).shoottype = "triple";
		cooldown(3);
	}else if (type == 0){
		player.GetComponent(shooting).shoottype = "single";
	}else if (type == -1){
		//Extra Life
	}
}

function setpower4(type : int){			//shoot distance
	if (type == 1){
		bullet.GetComponent(bulletScript).maxShotDistance = 50;
		cooldown(4);
	}else if (type == 0){
		bullet.GetComponent(bulletScript).maxShotDistance = 30;
	}else if (type == -1){
		//Extra life
	}
}

function setpower5(type : int){			//cooldown time
	if (type == 1){
		PowerupCooldown = 20;
		cooldown(5);
	}else if (type == 0){
		PowerupCooldown = 10;
	}else if (type == -1){
		//Extra life
	}
}

function cooldown(power:int){		//cooldown script
		yield WaitForSeconds(PowerupCooldown - 5);
		if (power == 1 && power1 == 1){
			warncooldown1 = true;
		}else if (power == 2 && power2 == 1){
			warncooldown2 = true;
		}else if (power == 3 && power3 == 1){
			warncooldown3 = true;
		}else if (power == 4 && power4 == 1){
			warncooldown4 = true;
		}else if (power == 5 && power5 == 1){
			warncooldown5 = true;
		}
		yield WaitForSeconds(5);
		if (power == 1 && power1 == 1){
			power1 -= 1;
			warncooldown1 = false;
			setpower1(0);
		}else if (power == 2 && power2 == 1){
			power2 -= 1;
			warncooldown2 = false;
			setpower2(0);
		}else if (power == 3 && power3 == 1){
			power3 -= 1;
			warncooldown3 = false;
			setpower3(0);
		}else if (power == 4 && power4 == 1){
			power4 -= 1;
			warncooldown4 = false;
			setpower4(0);
		}else if (power == 5 && power5 == 1){
			power5 -= 1;
			warncooldown5 = false;
			setpower5(0);
		}
}