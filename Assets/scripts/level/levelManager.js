#pragma strict
import System.Collections.Generic;

var numberOfparts:int = 0;
var recycleDuration:float;

var prefab1:Transform;
var prefab2:Transform;
var prefab3:Transform;
var prefab4:Transform;
var prefab5:Transform;

private var nextPos : Vector3;
private var levelQueue : Queue.<Transform> = new Queue.<Transform>(numberOfparts);
private var rand:int;

function Start () {
	
	//Instantiate all the parts
	nextPos = Vector3.zero;
	var i:int;
	for(i=0;i<numberOfparts;i++){
		var o:Transform;
		rand = Random.Range(1,6);
		o = Instantiate(calcPrefab(rand),nextPos,calcPrefab(rand).rotation);
		nextPos.z += o.localScale.z;
		levelQueue.Enqueue(o);
	}
}

function Update () {
	var o:Transform;
	o = levelQueue.Peek();
	if( o.localPosition.z + recycleDuration < playermovement.distTravelled){
		o =	levelQueue.Dequeue();
		var deadObjLength:float;
		deadObjLength = o.localScale.z;
		Destroy(o.gameObject);
		rand = Random.Range(1,6);
		o = Instantiate(calcPrefab(rand),nextPos,calcPrefab(rand).rotation);
		nextPos.z += deadObjLength;
		levelQueue.Enqueue(o);
	}
}

function calcPrefab(number:int){
	switch(number){
		case 1:
			return prefab1;
		case 2:
			return prefab2;
		case 3:
			return prefab3;
		case 4:
			return prefab4;
		case 5:
			return prefab5;
	}
	return;
}