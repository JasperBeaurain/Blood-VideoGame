#pragma strict

var beatspeed : float = 1;
var beat : boolean = true;

function Start () {
	yield WaitForSeconds (0.1);
	while(beat){
		beatspeed -= 0.005;
		audio.Play();
		yield WaitForSeconds (beatspeed/2);
		audio.Play();
		yield WaitForSeconds (beatspeed);
	}
}

function Update () {
	if (beatspeed < 0.2){
		beat = false;
	}else {
		beat = true;
	}
}