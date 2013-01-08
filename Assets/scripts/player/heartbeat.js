#pragma strict

var beatspeed : float = 0.6;
var beat : boolean = true;

function Start () {
	yield WaitForSeconds (0.1);
	while(beat){
		beatspeed -= 0.005;
		Debug.Log(beatspeed);
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