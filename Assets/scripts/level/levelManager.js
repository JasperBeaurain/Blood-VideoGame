#pragma strict
//import System.Collections.Generic;


public var numberOfparts:int = 0;
public var prefab:Transform;
private var nextPos : Vector3;

public var recycleDuration:float;
var levelQueue : System.Collections.Generic.Queue.<Transform> = new System.Collections.Generic.Queue.<Transform>(numberOfparts);

function Start () {
	
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
	var o:Transform;
	o = levelQueue.Peek();
	if( o.localPosition.z + recycleDuration < playermovement.distTravelled){
		recycle();
	}
}

function recycle(){
	var o: Transform;
	o = levelQueue.Dequeue();
	o.localPosition = nextPos;
	nextPos.z += (o.localScale.z);
	
	//nextPos.x += 6.5; //schuine baan test
	
	levelQueue.Enqueue(o);
}