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
var lvlParts:levelParts = new levelParts();


function Start () {
	
	//Instantiate all the parts
	nextPos = Vector3.zero;
	var i:int;
	for(i=0;i<numberOfparts;i++){
		var o:Transform;
		rand = Random.Range(1,6);
		o = Instantiate(calcPrefab(rand),nextPos,calcPrefab(rand).rotation);
		nextPos.z += o.localScale.z;
		//nextPos.z += o.renderer.bounds.size.z;
		//levelQueue.Enqueue(o);
		lvlParts.Add(o);
	}
			lvlParts.Length();
			Debug.Log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
}

function Update () {
	var o:Transform;
	var derp:float;
	o = lvlParts.LastPart();
	if( o.localPosition.z + recycleDuration < playermovement.distTravelled){
		o =	lvlParts.Remove();
		//var deadObjLength:float;
		//deadObjLength = o.localScale.z;
		//deadObjLength = o.renderer.bounds.size.z;
		Destroy(o.gameObject);
		rand = Random.Range(1,6);
		o = Instantiate(calcPrefab(rand),nextPos,calcPrefab(rand).rotation);
		derp=lvlParts.FirstPart().localScale.z;
		nextPos.z += derp;
		lvlParts.Add(o);
			Debug.Log("size previous"+derp);
			lvlParts.Length();
			Debug.Log("---------------------");
		//levelQueue.Enqueue(o);
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
	return prefab1;
}

class levelParts{

	var parts = new Array();
	
	function levelParts(){
	}

	function Add(obj:Transform){
		parts.Push(obj);
	}
	
	function Remove():Transform{
		return parts.Shift();
	}
	
	function LastPart():Transform{
		return parts[0];
	}
	
	function FirstPart():Transform{
			Debug.Log("added "+parts[0].ToString());
		return parts[parts.length-1];
	}
	
	function Length():int{
			Debug.Log("new queue "+parts.ToString());
		return parts.length;
	}
}