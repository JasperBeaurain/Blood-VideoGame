#pragma strict
import System.Collections.Generic;


var numberOfparts:int = 0;
var prefab:Transform;
var recycleDuration:float;

private var nextPos : Vector3;
private var levelQueue : Queue.<Transform> = new Queue.<Transform>(numberOfparts);

function Start () {
	
	//Instantiate all the parts
	var i:int;
	for(i=0;i<numberOfparts;i++){
		var o:Transform;
		o = Instantiate(prefab,nextPos,prefab.rotation);
		levelQueue.Enqueue(o);
	}	
	nextPos = transform.localPosition;
	for(i=0;i<numberOfparts;i++){
		recycle();
	}
}

function Update () {
	//check if recycling is needed
	var o:Transform;
	o = levelQueue.Peek();
	if( o.localPosition.z + recycleDuration < playermovement.distTravelled){
		recycle();
	}
}

function recycle(){
	//Move the closest level part to the end of the stack
	var o: Transform;
	o = levelQueue.Dequeue();
	o.localPosition = nextPos;
	nextPos.z += (o.localScale.z);	
	levelQueue.Enqueue(o);
}