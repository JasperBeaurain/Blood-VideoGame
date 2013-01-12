#pragma strict

private var player : Transform;

function Start () {
}

function Update () {
	Transform.position = player.transform.position;
}