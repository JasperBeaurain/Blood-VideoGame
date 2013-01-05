#pragma strict

var player:Transform;

function Start () {

}

function Update () {
	transform.position.z = player.transform.position.z - 150;
}